import NextImage, { type ImageProps } from "next/image";

// 1×1 #0D0D0D PNG — matches the page background (tailwind `bg` = #0D0D0D), so
// images fade up out of the dark instead of popping in. Static module constant,
// so it's defined once and reused for every image rather than per-instance.
const DARK_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGPg5eUFAABSACgr+S0sAAAAAElFTkSuQmCC";

/**
 * `next/image` with the portfolio's defaults baked in:
 *  - `quality={90}` — near-original sharpness (vs Next's default 75)
 *  - `placeholder="blur"` + dark `blurDataURL` — smooth fade-in from the bg
 *
 * Lazy loading is inherited from `next/image` (every image is `loading="lazy"`
 * unless it sets `priority`). Every prop passes through, and the defaults sit
 * before the spread so callers can override quality/placeholder when needed.
 */
export default function Img(props: ImageProps) {
  return (
    <NextImage
      quality={90}
      placeholder="blur"
      blurDataURL={DARK_BLUR}
      {...props}
    />
  );
}
