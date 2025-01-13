import DevChip from "./Chips";

export interface MediaGridItemProps {
  imgSrc: string;
  title: string;
  chipTypes: string[];
}

export default function MediaGridItem({ imgSrc, title, chipTypes }: MediaGridItemProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-lg desktop:hover:-translate-y-1 desktop:hover:-translate-x-1 desktop:transition-transform desktop:duration-300">
      <img 
        className="w-full h-[200px] object-cover mb-0" 
        src={imgSrc} 
        alt="Project Image" 
      />
      <div className="flex flex-col p-4 mt-0">
        <div className="text-base font-semibold text-gray-800 mb-2">
          {title ? title : "Project"}
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
