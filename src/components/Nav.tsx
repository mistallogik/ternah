/* eslint-disable @next/next/no-img-element */

const links = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions", menu: true },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-[32px] z-50 flex justify-center px-4 max-md:top-4">
      <nav className="relative h-[60px] w-full max-w-[1112px] rounded-[999px] bg-[#00352d] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_14px_40px_0px_rgba(0,0,0,0.4)]">
        <div className="absolute left-[22px] right-[8px] top-[8px] flex items-center justify-between max-md:left-[18px]">
          <div className="flex items-center gap-[28px]">
            <a href="#" aria-label="Ternah home" className="flex items-center">
              <img alt="ternah" src="/img/logo.svg" className="block h-[28px] w-[107.29px] max-w-none" />
            </a>
            <ul className="flex items-center gap-[26px] max-md:hidden">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex h-[20.016px] items-center gap-[4px] text-[14px] font-medium leading-[20.02px] tracking-[-0.42px] whitespace-nowrap text-white opacity-50 transition-opacity duration-150 hover:opacity-100"
                  >
                    {l.label}
                    {l.menu && (
                      <img alt="" src="/img/hero/chevron-down.svg" className="block size-[16px] max-w-none" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#get-early-access"
            className="group relative h-[44px] min-h-[44px] w-[192.656px] shrink-0 overflow-clip rounded-[28px] bg-white transition-transform duration-200 ease-out active:scale-[0.97]"
          >
            <span className="absolute left-[3.5px] top-[4.5px] grid size-[35px] place-items-center rounded-[17.5px] bg-cta">
              <span className="relative size-[18px] overflow-clip transition-transform duration-200 ease-out group-hover:rotate-45">
                <span className="absolute inset-[26.43%_26.44%_23.48%_23.47%]">
                  <img alt="" src="/img/arrow-up-right.svg" className="absolute inset-0 block size-full max-w-none" />
                </span>
              </span>
            </span>
            <span className="absolute left-[109px] top-[11.5px] -translate-x-1/2 text-center text-[14px] font-medium uppercase leading-[21px] tracking-[-0.28px] whitespace-nowrap text-ink">
              Get early access
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
