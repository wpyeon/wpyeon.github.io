interface ProjectImageComponentProps {
  imgSrc: string;
  imgDescription: string;
}

export default function ProjectImageComponent({
  imgSrc,
  imgDescription,
}: ProjectImageComponentProps) {
  return (
    <div>
      <img src={imgSrc} alt={imgDescription} />
      <p>{imgDescription}</p>
    </div>
  );
}
