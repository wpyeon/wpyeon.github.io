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
        <Link to="https://wpyeon.github.io/visstory-web/" target="_blank">
          <MediaGridItem
            imgSrc="/visstory-project/banner.png"
            title="Visual Data Storytelling Competition Submission"
            chipTypes={["react", "recharts"]}
            isExternalLink={true}
          />
        </Link>
        <Link to="/timer-blocks">
          <MediaGridItem
            imgSrc="/timer-block-project/banner.png"
            title="[WIP] Timer Blocks Web App"
            chipTypes={["react"]}/>
        </Link>
      </div>
    </div>
  );
}
