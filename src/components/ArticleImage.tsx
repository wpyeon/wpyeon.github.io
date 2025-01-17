export type ArticleImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export const ArticleImage = ({
  src,
  alt,
  caption,
}: ArticleImageProps) => {
  return (
    <div className="flex flex-col mb-4 overflow-hidden w-100 items-center">
      <img
        src={src}
        alt={alt}
        className="mb-2 rounded-xl border border-gray-200"
      />
      {caption && <p className="text-sm text-gray-600 mb-0">{caption}</p>}
    </div>
  );
}
