type Variant = "white" | "green";

const styles: Record<Variant, string> = {
  white: "bg-white text-ink",
  green: "bg-brand text-white",
};

/** Pill button with the green arrow badge on the right (hero, pricing, footer). */
export function CtaButton({
  children,
  variant = "white",
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center gap-[6.698px] overflow-clip rounded-[31.256px] py-[4.465px] pl-[17.86px] pr-[4.465px] transition-transform duration-200 ease-out active:scale-[0.97] ${styles[variant]} ${className}`}
    >
      <span className="whitespace-nowrap text-center text-[15.628px] font-medium uppercase leading-[23.442px] tracking-[-0.3126px]">
        {children}
      </span>
      <ArrowBadge size={39.07} icon={20.093} />
    </a>
  );
}

export function ArrowBadge({ size, icon }: { size: number; icon: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full bg-cta"
      style={{ width: size, height: size }}
    >
      <span
        className="relative overflow-clip transition-transform duration-200 ease-out group-hover:rotate-45"
        style={{ width: icon, height: icon }}
      >
        <span className="absolute inset-[26.43%_26.44%_23.48%_23.48%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/img/arrow-up-right-lg.svg" className="absolute inset-0 block size-full max-w-none" />
        </span>
      </span>
    </span>
  );
}
