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
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-12">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.38em] text-accent">{eyebrow}</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.88] text-white sm:text-7xl lg:text-[5.25rem]">
              {title}
            </h1>
            <p className="mt-8 text-xl leading-[1.7] text-white/75 sm:text-2xl">{description}</p>
          </div>
          <div className="space-y-8">{children}</div>
        </div>

        {aside ? (
          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            {aside}
          </aside>
        ) : null}
      </div>
    </section>
  );
}
