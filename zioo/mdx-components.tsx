import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const IMAGE_DIMENSIONS = {
  "/images/artykuly/muminki/muminek-aparat.jpeg": {
    width: 1368,
    height: 2048,
  },
  "/images/artykuly/muminki/muminek-balon.jpeg": {
    width: 2360,
    height: 1563,
  },
} as const;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      const { src, alt, width, height, ...rest } = props;
      if (!src) return null;

      // 1. If width and height are provided
      if (width && height) {
        return (
          <Image
            src={src}
            alt={alt || ""}
            width={Number(width)}
            height={Number(height)}
            quality={90}
            {...(rest as any)}
          />
        );
      }

      // 2. If it's a known local image with pre-configured dimensions
      const dimensions = IMAGE_DIMENSIONS[src as keyof typeof IMAGE_DIMENSIONS];
      if (dimensions) {
        return (
          <Image
            src={src}
            alt={alt || ""}
            width={dimensions.width}
            height={dimensions.height}
            quality={90}
            {...(rest as any)}
          />
        );
      }

      // 3. Fallback for other local images
      if (src.startsWith("/")) {
        const optimizedSrc = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=90`;
        const widths = [640, 750, 828, 1080, 1200];
        const srcSet = widths
          .map(
            (w) =>
              `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=90 ${w}w`,
          )
          .join(", ");

        return (
          <img
            src={optimizedSrc}
            srcSet={srcSet}
            sizes="(max-width: 768px) 100vw, 1080px"
            alt={alt || ""}
            loading="lazy"
            {...rest}
          />
        );
      }

      // 4. Remote images
      return <img src={src} alt={alt || ""} loading="lazy" {...rest} />;
    },
  };
}
