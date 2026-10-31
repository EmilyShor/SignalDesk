import Brand from './Brand';

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen bg-canvas lg:grid-cols-2">
      <aside className="relative flex flex-col justify-between overflow-hidden bg-ink p-8 text-white sm:p-12 lg:p-16">
        <Brand light />
        <div className="relative z-10 py-12 lg:py-24">
          <span className="mb-6 inline-flex rounded-full border border-mint/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">Less noise. More progress.</span>
          <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Good work starts<br />with a clear signal.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/70">One calm workspace to capture issues, find their owners, and move your team forward.</p>
          <div className="mt-10 flex items-center gap-3 text-sm text-mint"><span className="h-2 w-2 rounded-full bg-mint" />Capture. Collaborate. Resolve.</div>
        </div>
        <p className="relative z-10 text-xs text-white/50">SignalDesk · Issue tracking, with clarity.</p>
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-48 h-[32rem] w-[32rem] rounded-full border-[70px] border-brand-500/20" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
      </aside>
      <section className="flex items-center justify-center px-6 py-12 sm:px-12">{children}</section>
    </main>
  );
}
