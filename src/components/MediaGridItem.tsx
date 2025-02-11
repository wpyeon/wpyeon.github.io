import DevChip from "./Chips";
import { FiExternalLink } from "react-icons/fi";

export interface MediaGridItemProps {
  imgSrc: string;
  title: string;
  chipTypes: string[];
  isExternalLink?: boolean;
}

export default function MediaGridItem({ imgSrc, title, chipTypes, isExternalLink = false }: MediaGridItemProps) {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white shadow-lg desktop:hover:-translate-y-1 desktop:hover:-translate-x-1 desktop:transition-transform desktop:duration-300">
      <img 
        className="w-full h-[200px] object-cover mb-0" 
        src={imgSrc} 
        alt="Project Image" 
      />
      <div className="flex flex-col flex-1 justify-between p-4 mt-0">
        <div className="text-base font-semibold text-gray-800 mb-2">
          {title ? title : "Project"}
          {isExternalLink && <FiExternalLink className="inline-block pl-1 text-gray-500" />}
        </div>
        <div className="inline-flex gap-1 flex-wrap">
          {chipTypes.map((chipType) => (
            <DevChip key={chipType} type={chipType} />
          ))}
        </div>
      </div>
    </div>
  );
}
