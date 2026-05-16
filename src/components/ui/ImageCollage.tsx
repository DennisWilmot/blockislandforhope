import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export function ImageCollage({ images, alt, priority = false }: Props) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative h-[350px] w-full overflow-hidden rounded-2xl md:h-[420px]">
        <Image
          src={images[0]}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid h-[350px] grid-cols-2 gap-2 overflow-hidden rounded-2xl md:h-[420px]">
        {images.map((src, i) => (
          <div key={src} className="relative overflow-hidden">
            <Image
              src={src}
              alt={`${alt} - ${i + 1}`}
              fill
              priority={priority && i === 0}
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="grid h-[350px] grid-cols-[1.2fr_0.8fr] gap-2 overflow-hidden rounded-2xl md:h-[420px]">
        <div className="relative overflow-hidden">
          <Image
            src={images[0]}
            alt={`${alt} - 1`}
            fill
            priority={priority}
            className="object-cover"
            sizes="60vw"
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          {images.slice(1).map((src, i) => (
            <div key={src} className="relative overflow-hidden">
              <Image
                src={src}
                alt={`${alt} - ${i + 2}`}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-[350px] grid-cols-[1.2fr_0.8fr] gap-2 overflow-hidden rounded-2xl md:h-[420px]">
      <div className="relative overflow-hidden">
        <Image
          src={images[0]}
          alt={`${alt} - 1`}
          fill
          priority={priority}
          className="object-cover"
          sizes="60vw"
        />
      </div>
      <div className="grid grid-rows-3 gap-2">
        {images.slice(1, 4).map((src, i) => (
          <div key={src} className="relative overflow-hidden">
            <Image
              src={src}
              alt={`${alt} - ${i + 2}`}
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
