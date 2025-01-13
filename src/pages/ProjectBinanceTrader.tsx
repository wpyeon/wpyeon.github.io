import { useParams } from "react-router-dom";
import styles from "./styles/MainPage.module.css";
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function ProjectDetail() {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <section className={styles.subsection}>
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
      <h3>Trading Strategy</h3>
      <p>
        Simply put, the strategy is to buy long when the price is above the upper
        bound and sell short when the price is below the lower bound. The upper and
        lower boundaries will reposition based on the latest position.
        This strategy will earn when the price is trending upward/downward in a
        constant manner. When the profit exceeds a user-defined threshold, the
        program will liquidate all the positions and settle profit. On the other
        hand, if the profit is below another user-defined threshold, the program
        will liquidate all the positions and settle loss.
      </p>
      <h3>Implementation</h3>
      <p>
        The program is built using Electron, React, and TypeScript. The program
        uses the Binance API (Both REST and WebSocket) to read market data, send
        orders, and modify user data. The program uses SQLite to store past
        trading data and user data.
      </p>
    </section>
  );
}
