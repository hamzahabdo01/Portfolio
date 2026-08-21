import { useState } from "react";

interface SkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const SkeletonImage = ({ src, alt, className, ...props }: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const hasHFull = /\bh-full\b/.test(className ?? "");
  const hasWFull = /\bw-full\b/.test(className ?? "");

  return (
    <div className={`relative ${hasHFull ? "h-full" : ""} ${hasWFull ? "w-full" : ""}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-black/5" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className ?? ""}`}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;