import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function ProjectTimerBlocks() {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <section>
      <Breadcrumb currentPage="82timer" />
      <div className="mb-8 rounded-xl overflow-hidden border border-gray-200">
        <img
          src="/timer-block-project/demo.gif"
          alt="Timer Blocks"
          className="w-full"
        />
      </div>
      <h1>[WIP🚧] 82timer</h1>
      <p>
        This is a web app that allows you to setup multiple timers by connecting
        them to each other. You can try out the working demo{" "}
        <a href="https://82timer.netlify.app/" target="_blank">
          here
        </a>
        .
      </p>
      <p className="whitespace-pre-line text-caption">
        Note: Please allow page and browser notifications for the notification
        blocks to work.
      </p>
    </section>
  );
}
