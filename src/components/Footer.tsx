/* eslint-disable @next/next/no-img-element */
import { CtaButton } from "./CtaButton";

const columns = [
  { title: "EXPLORE", links: ["Products", "Features", "Pricing", "Contact"] },
  { title: "SOLUTIONS", links: ["For Landlords", "For Tenants", "Property Managers"] },
  { title: "COMPANY", links: ["About", "Careers", "Help & Support"] },
  { title: "LEGAL", links: ["Terms of use", "Privacy policy", "Security"] },
];

/** Gemini star, rebuilt from the Figma layer stack (10 colour blobs masked to the star shape). */
const geminiLayers: { w: number; h: number; ml: number; mt: number; mask: string; inset: string }[] = [
  { w: 10.405, h: 11.24, ml: 2.84, mt: 11.45, mask: "5.253px -3.774px", inset: "-1.96% -1.01%" },
  { w: 10.082, h: 10.304, ml: 10.47, mt: 3.23, mask: "-2.373px 4.453px", inset: "-62.38% -63.75%" },
  { w: 11.191, h: 14.149, ml: 7.62, mt: 16.12, mask: "0.474px -8.436px", inset: "-36.84% -45.94%" },
  { w: 11.191, h: 14.149, ml: 7.62, mt: 16.12, mask: "0.474px -8.436px", inset: "-36.84% -45.94%" },
  { w: 14.733, h: 15.082, ml: 6.14, mt: 15.33, mask: "1.956px -7.651px", inset: "-23.03% -23.13%" },
  { w: 9.917, h: 9.55, ml: 21.35, mt: 9.75, mask: "-13.255px -2.07px", inset: "-54.37% -52.36%" },
  { w: 16.455, h: 16.575, ml: 0, mt: 5.64, mask: "8.097px 2.037px", inset: "-14.21% -14.17%" },
  { w: 17.821, h: 17.562, ml: 12.04, mt: 7.77, mask: "-3.938px -0.086px", inset: "-9.67% -9.81% -9.66% -9.81%" },
  { w: 7.688, h: 6.482, ml: 15.53, mt: 6.44, mask: "-7.433px 1.236px", inset: "-58.01% -48.92% -58.02% -48.92%" },
  { w: 17.477, h: 17.173, ml: 4.74, mt: 0, mask: "3.36px 7.68px", inset: "-4.54% -4.79%" },
  { w: 9.331, h: 8.547, ml: 7.1, mt: 16.04, mask: "0.995px -8.361px", inset: "-31.53% -30.38% -31.55% -30.38%" },
];
// Layer 3 and 4 share the same artwork in Figma; map each layer to its exported file.
const geminiFiles = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];

function GeminiMark() {
  return (
    <div className="inline-grid shrink-0 place-items-start leading-[0] [grid-template-columns:max-content] [grid-template-rows:max-content]">
      <div className="relative col-start-1 row-start-1 ml-[-8.1px] mt-[-7.68px] inline-grid place-items-start [grid-template-columns:max-content] [grid-template-rows:max-content]">
        {geminiLayers.map((l, i) => {
          const mask = {
            maskImage: "url(/img/footer/gemini-mask.svg)",
            WebkitMaskImage: "url(/img/footer/gemini-mask.svg)",
            maskMode: "alpha",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            maskClip: "no-clip",
            WebkitMaskClip: "no-clip",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: l.mask,
            WebkitMaskPosition: l.mask,
            maskSize: "17.54px 17.539px",
            WebkitMaskSize: "17.54px 17.539px",
          } as React.CSSProperties;
          return (
            <div
              key={i}
              className="relative col-start-1 row-start-1"
              style={{ width: l.w, height: l.h, marginLeft: l.ml, marginTop: l.mt, ...mask }}
            >
              <div className="absolute" style={{ inset: l.inset }}>
                <img alt="" src={`/img/footer/gemini-g${geminiFiles[i]}.svg`} className="block size-full max-w-none" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="about" className="bg-mint px-[24px] pb-[24px] pt-[73px] max-md:px-3 max-md:pb-3 max-md:pt-12">
      <div className="mx-auto flex w-full max-w-[1464px] flex-col items-center gap-[68px] max-md:gap-10">
        <div className="flex w-full max-w-[1368px] items-center justify-between gap-8 max-md:flex-col max-md:items-start max-md:px-3">
          <h2 className="w-[535px] max-w-full text-balance font-display text-[42.418px] leading-[1.6] tracking-[-1.2725px] text-ink uppercase max-md:text-[30px]">
            let us know how we can help
          </h2>
          <CtaButton variant="green" href="#contact" className="w-[189px]">
            START FOR FREE
          </CtaButton>
        </div>

        <div className="relative h-[934px] w-full overflow-clip rounded-[24px] bg-forest-deep max-lg:h-auto max-lg:pb-[clamp(140px,26vw,353px)]">
          {/* Oversized wordmark bleeding off the bottom */}
          <div className="absolute bottom-[-33px] left-1/2 aspect-[1464/353] w-full -translate-x-1/2 max-lg:bottom-[-2.25%]">
            <img alt="" src="/img/footer/ternah-big.svg" className="absolute inset-0 block size-full max-w-none" />
          </div>

          <div className="relative px-[48px] pt-[48px] max-md:px-6 max-md:pt-8">
            <div className="flex w-full items-start justify-between gap-12 max-lg:flex-col">
              <div className="flex w-[346.265px] shrink-0 flex-col items-start gap-[40px] max-md:w-full">
                <div className="flex w-[333px] max-w-full flex-col items-start gap-[23px]">
                  <a href="#" aria-label="Ternah home" className="flex items-center">
                    <img alt="ternah" src="/img/footer/logo.svg" className="block h-[36px] w-[137.944px] max-w-none" />
                  </a>
                  <p className="w-full text-[16px] leading-[1.2] tracking-[-0.32px] text-white">
                    The operating system for residential rentals. Built for the long tail of small operators and
                    the people who live in their buildings.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start gap-[14px]">
                  <p className="w-full text-[14px] leading-[1.2] tracking-[-0.28px] text-[#b7b7b7]">ASK AI ABOUT TERNAH</p>
                  <div className="flex w-[288.554px] items-center gap-[20.388px]">
                    <a href="#" aria-label="Ask ChatGPT about Ternah">
                      <img alt="ChatGPT" src="/img/footer/chatgpt.svg" className="block h-[20px] w-[83.994px] max-w-none" />
                    </a>
                    <a href="#" aria-label="Ask Gemini about Ternah" className="flex items-center gap-[4.46px]">
                      <GeminiMark />
                      <img alt="Gemini" src="/img/footer/gemini-word.svg" className="block h-[13.622px] w-[55.914px] max-w-none" />
                    </a>
                    <a href="#" aria-label="Ask Claude about Ternah">
                      <img alt="Claude" src="/img/footer/claude.svg" className="block h-[18.417px] w-[85.87px] max-w-none" />
                    </a>
                  </div>
                </div>
              </div>

              <nav className="flex w-[695px] max-w-full items-start gap-[49px] leading-[1.2] max-md:grid max-md:grid-cols-2 max-md:gap-8">
                {columns.map((c) => (
                  <div key={c.title} className="flex min-w-px flex-1 flex-col items-start gap-[16px]">
                    <p className="w-full text-[14px] tracking-[-0.28px] text-[#b7b7b7]">{c.title}</p>
                    <ul className="flex w-full flex-col items-start gap-[8px] text-[16px] tracking-[-0.32px] text-white">
                      {c.links.map((l) => (
                        <li key={l} className="w-full">
                          <a href="#" className="transition-opacity duration-150 hover:opacity-70">
                            {l}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          <div className="absolute left-[48px] right-[48px] top-[531px] flex flex-col gap-[20px] max-lg:relative max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:mt-16 max-lg:px-12 max-md:px-6">
            <div className="relative h-0 w-full">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" src="/img/footer/divider.svg" className="block size-full max-w-none" />
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4 text-[14px] leading-[20px] tracking-[-0.28px] text-white max-lg:flex-col max-lg:items-start">
              <p className="whitespace-nowrap max-md:whitespace-normal">
                © 2026 3TK Digital Innovations Inc. Ternah™ TN28337350SOC 2 · PIPEDA · GDPR
              </p>
              <div className="flex items-center justify-end gap-[12px] whitespace-nowrap">
                <p>Made with care in Canada</p>
                <p>•</p>
                <p>Follow us:</p>
                <ul className="flex items-center gap-[12px]">
                  <li className="relative size-[20px]">
                    <a href="#" aria-label="Instagram" className="absolute left-[3px] top-[3px] block size-[14px] overflow-clip opacity-70 transition-opacity hover:opacity-100">
                      <img alt="" src="/img/footer/instagram.svg" className="absolute inset-0 block size-full max-w-none" />
                    </a>
                  </li>
                  <li className="relative size-[20px]">
                    <a href="#" aria-label="LinkedIn" className="absolute left-[3px] top-[3px] block size-[14px] overflow-clip opacity-70 transition-opacity hover:opacity-100">
                      <span className="absolute inset-[1%_0_0.5%_0]">
                        <img alt="" src="/img/footer/linkedin.svg" className="absolute inset-0 block size-full max-w-none" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
