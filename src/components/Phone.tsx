/* eslint-disable @next/next/no-img-element */

/**
 * iPhone 14 Pro frame from the Figma file. Layers use the exact Figma insets;
 * `children` render inside the screen layer (between glass and buttons).
 * `set` picks which exported SVG set to use (hero is 395.6×804, realities 367×746).
 */
export function Phone({
  set,
  width,
  height,
  children,
  className = "",
}: {
  set: "hero" | "realities";
  width: number;
  height: number;
  children: React.ReactNode;
  className?: string;
}) {
  const src = (name: string) => `/img/${set}/phone-${name}.svg`;
  const layer = (inset: string, name: string) => (
    <div className="absolute" style={{ inset }}>
      <img alt="" src={src(name)} className="absolute inset-0 block size-full max-w-none" />
    </div>
  );
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      {layer("0 0.46% 0 0.68%", "bezel")}
      {layer("0 0.46% 0 0.68%", "bezel-stroke")}
      {layer("0.67% 1.82% 0.67% 2.05%", "glass")}
      {layer("0.67% 1.82% 0.67% 2.05%", "glass-stroke")}
      {layer("0.73% 39.64% 98.94% 39.41%", "speaker")}
      {layer("0.67% 39.52% 98.88% 39.29%", "speaker-stroke")}
      {children}
      {layer("28.33% 0 60.58% 99.32%", "buttons-right")}
      {layer("20.04% 99.09% 55.66% 0", "buttons-left")}
      {layer("0.11% 0.68% 0.11% 0.91%", "antenna")}
      {layer("3.58% 36.22% 92.16% 35.99%", "island")}
    </div>
  );
}

/** The Figma "home" screen: simulator screenshot plus the "image 40" overlay. */
export function HomeScreen({ set, radius }: { set: "hero" | "realities"; radius: number }) {
  const right = set === "hero" ? "4.63%" : "4.56%";
  return (
    <>
      <div className="absolute" style={{ inset: `1.99% ${right} 1.18% 4.78%`, borderRadius: radius }}>
        <img
          alt="Ternah app home screen"
          src="/img/hero/screen-home.png"
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          style={{ borderRadius: radius }}
        />
      </div>
      <div
        className="absolute aspect-[665/447] -translate-y-1/2"
        style={{ left: "4.78%", right: "4.55%", top: "74.07%" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="/img/hero/screen-overlay.png"
            className="absolute left-0 top-[-184.34%] h-[322.95%] w-[99.99%] max-w-none"
          />
        </div>
      </div>
    </>
  );
}
