import MediaGridItem from "../components/MediaGridItem";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col h-100">
      <h2 className="text-2xl font-bold mb-4">Hi there!</h2>
      <p>
        I'm a passionate software engineer with expertise in web development,
        particularly in React and TypeScript. I am in an early stage of my
        career and am looking for opportunities to grow my skills and
        experience.
      </p>

      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <Link to="/binance-trader">
          <MediaGridItem
            imgSrc="/binance-trader-project/banner.png"
            title="Binance Trader Desktop App"
            chipTypes={["react", "electron", "sqlite"]}
          />
        </Link>
        <Link to="/binance-trader">
          <MediaGridItem
            imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            title="Timer Blocks Web App"
            chipTypes={["react"]}
          />
        </Link>
      </div>
    </div>
  );
}
