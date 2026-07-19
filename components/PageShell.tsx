import SiteHeader from './SiteHeader';

export default function PageShell({
  eyebrow,
  title,
  description,
  aside,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:gap-14">
          <div className="min-w-0 space-y-8">
            <div className="max-w-3xl min-w-0">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
              <h1 className="max-w-full text-wrap break-words font-display text-[clamp(2.25rem,11vw,4.25rem)] font-black uppercase leading-[0.96] tracking-normal text-white lg:text-[5rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base font-light leading-[1.58] text-white/70 sm:text-xl">{description}</p>
            </div>
            <div className="min-w-0 space-y-6">{children}</div>
          </div>

          {aside ? (
            <aside className="h-fit min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8">
              {aside}
            </aside>
          ) : null}
        </div>
      </section>
    </>
  );
}
