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
      <Breadcrumb currentPage="Timer Blocks" />
      <div className="mb-8 rounded-xl overflow-hidden border border-gray-200">
        <img src="/timer-block-project/demo.gif" alt="Timer Blocks" className="w-full"/>
      </div>
      <h1>[WIP🚧] Timer Blocks Web App</h1>
      <p>Come back later!</p>
    </section>
  );
}
