import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ArticleImage } from "../components/ArticleImage";
import { CodeSnippet } from "../components/CodeSnippet";

export default function ProjectDetail() {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const codeSnippet1 = `type MessageHandler = async (...params) => Promise<void>;

type EventMessageHandler = {
  eventType: string;
  handler: MessageHandler;
};

class Channel {
  webSocket = WebSocket(); // initialize WebSocket
  handlers = EventMessageHandler[];

  public registerHandler(event: string, handler: EventMessageHandler) {
    this.handlers.push({event, handler});
  }

  public initialize() {
    this.webSocket.onMessage((message) => {
      for handler in this.handlers {
        if (handler.event === message.eventId) {
          handler(message);
        }
      }
    })
  }
}`;
  const codeSnippet2 = `var lock = false; // global lock

const handleBTCUSDTBookTickerUpdate = async (message) => {
  if (!lock && message.price >== upperBound) {
    lock = true;
    // ...send buy order
  }
};

// ...more codes here

const handleOrderUpdate = async (message) => {
  if (message.status === "200") {
    // ...reposition baseline and upper bound
    // ...handle order success
    lock = false;
  }
}`;
  const codeSnippet3 = `const eventQueue: Event[];
const eventQueueLock = false;

const onMessage = () => {
  if (eventQueueLock) return;
  this.eventQueueLock = true;
  const event = this.eventQueue.shift();
  if (event) {
    // find and execute corresponding handler
    this.eventQueueLock = false;
    this.onMessage();
  }
  else {
    this.eventQueueLock = false;
  }
}

websocket.on("message", (data) => {
  for (handler in handlers) {
    if (handler.event === someEvent) {
      this.eventQueue.push();
      onMessage();
    }
  }
})`;

  return (
    <section>
      <Breadcrumb currentPage="Binance Trader Desktop App" />
      <div className="mb-8 rounded-xl overflow-hidden w-100">
        <img
          src="/binance-trader-project/dashboard.png"
          alt="Binance Trader Desktop App"
        />
      </div>
      <h1>Binance Trader Desktop App</h1>
      <p>
        This project started as a simple idea to automate trading in the Bitcoin
        futures market. I wanted to start small and simple, so my primary goal
        was to fulfill the following requirements:
      </p>
      <ol>
        <li>Read Bitcoin market data (price, volume, etc.)</li>
        <li>Apply trading strategy, make long/short orders accordingly</li>
        <li>Evaluate trading performance</li>
        <li>Execute steps 1-3 quickly; latency will cause inaccuracies</li>
      </ol>
      <h2>Trading Strategy</h2>
      <p>
        Simply put, the strategy is to buy long when the price is above the
        upper bound and sell short when the price is below the lower bound. The
        upper and lower boundaries will reposition based on the latest position.
        This strategy will earn when the price is trending upward/downward in a
        constant manner. When the profit exceeds a user-defined threshold, the
        program will liquidate all the positions and settle profit. On the other
        hand, if the profit is below another user-defined threshold, the program
        will liquidate all the positions and settle loss.
      </p>
      <h2>Implementation</h2>
      <p>
        The program is built using Electron, React, and TypeScript. The program
        uses the Binance API (Both REST and WebSocket) to read market data, send
        orders, and modify user data. The program uses SQLite to store past
        trading data and user data.
      </p>
      <h3>API</h3>
      <p>
        Binance provides well documented API service endpoints. Common use
        cases, such as getting user account information or setting leverage are
        implemented using REST API due to ease of use. Other time-critical
        operations such as getting BTC book ticker data or making market orders
        are implemented using WebSocket API.{" "}
      </p>
      <p>
        Binance API's WebSocket provides two addresses: WebSocket API and
        WebSocket stream. Each address serves different purposes. WebSocket API
        is an address for interactive operations such as buying/selling
        positions, whereas WebSocket stream is an address for receiving streamed
        data, such as market data or any changes in user data. Once subscribed
        to a WebSocket stream's endpoint, related information will be
        continuously delivered until the connectivity is lost. Some WebSocket
        stream endpoints requires extra security, in which case you need to
        acquire <i>listenKey</i> from WebSocket API first.
      </p>
      <ArticleImage
        src="/binance-trader-project/d-wss-stream-sub.png"
        alt="Diagram of WebSocket stream subscription"
        caption="Fig. 1: WebSocket stream subscription"
      />
      <h3>Event Driven Architecture</h3>
      <p>
        The app is heavily event driven (another reason why WebSocket is chosen
        over REST); meaning that it executes certain job on a certain occurrence
        of event. For example, to buy a long position, the app checks every time
        the book ticker WebSocket stream updates. If the best ask price
        (cheapest BTC/USDT price a seller is willing to sell the asset) is above
        the current upper bound price of the trading strategy, it will
        immediately send long position buy order to API endpoint.
      </p>
      <ArticleImage
        src="/binance-trader-project/d-wss-order.png"
        alt="Diagram of order creation via WebSocket API"
        caption="Fig. 2: Order creation via WebSocket API"
      />
      <p>
        Besides creating and sending orders to API, events also trigger
        different operations such as local database update and profit
        calculation. In order to evaluate the real-time performance of the
        trade, each orders should be evaluated close to real time in order to
        settle profit or loss according to the trading strategy. The application
        subscribes to order update events to keep track of all the positions and
        their order status. The positions are stored in a local database not
        only for calculation of profit/loss, but also to keep track of the trade
        history for human evaluation of trade performance.
      </p>
      <ArticleImage
        src="/binance-trader-project/ss-trade-log.png"
        alt="Screenshot of trade log"
        caption="Fig. 3: Trade log feature"
      />
      <p>
        There are different kinds of events that the application should handle.
        To streamline the event handling, I have created <i>Channel</i> class
        and
        <i>EventMessageHandler</i> type:
      </p>
      <CodeSnippet code={codeSnippet1} />
      <p>
        In this setup, the process of handling WebSocket messages has been
        streamlined to simplify the development process. Furthermore, the setup
        provides more clarity as each event handling logic are separated into
        functions we define. Yet, there is a pitfall that I came across during
        the development.
      </p>
      <h3>The Pitfall of Event Driven Architecture</h3>
      <p>
        Earlier, I have briefly described a procedure of buying a long position
        when the price exceeds upper bound. When the purchase is successful, the
        application repositions the baseline, which also shifts the upper bound.
        It is important here that no other operations related to making orders
        should be executed. A lock has been implemented:
      </p>
      <CodeSnippet code={codeSnippet2} />
      <p>
        However, there are incidents where multiple orders are sent to the API
        before the order is successfully placed. This happens due to how events
        are arrived at WebSocket. I noticed that Binance's WebSocket API
        provides multiple messages at an instance, causing
        <i>WebSocket.onMessage(callback)</i> to execute simultaneously. Since
        the callback we provide the WebSocket object is asynchronous, some
        operations can bypass the lock.
      </p>
      <h3>The Solution</h3>
      <p>
        The handler functions still have to be asynchronous, since it should not
        block other operations such as profit calculations and database updates.
        It is only the <i>EventHandlers</i> that should not interfere with each
        other. To tackle this issue, <i>EventQueue</i> has been implemented as
        such:
      </p>
      <CodeSnippet code={codeSnippet3} />
      <p>
        This solution prevents the <i>EventMessageHandler</i> from interfering
        with each other, while still being asynchronous functions.
      </p>
      <h2>Concluding...</h2>
      <p>
        It was both challenging and rewarding to build a time-critical
        application. I learned a lot about things I was unfamiliar of, such as
        how ElectronJS deals with inter-process communications (not covered here
        but I spent several hours figuring things out). It was also refreshing
        to come back to technology I am familiar with, such as React and SQL,
        and use my knowledge to create a working application from zero to one.
      </p>
      <p>
        I am constantly expanding my knowledge in various software engineering
        field, from frontend Javascript frameworks to machine learning. If you
        enjoyed my article, don't hesitate to connect with me on LinkedIn.
        Thanks for visiting! 👋
      </p>
      <p className="whitespace-pre-line text-caption">
        <i>
          Note 1: The API I connected to in the screenshots is the Binance
          testnet API. The data presented aren't real. {`\n`}
          Note 2: The code snippet does not strictly follow the actual code of
          mine. I just wanted to represent the logic of my actual code briefly.
        </i>
      </p>
    </section>
  );
}
