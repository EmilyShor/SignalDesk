export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="13" fill="currentColor" />
      <path d="M10 24h5l4-12 5 16 3-8h3" stroke="#C9F3DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark className={`h-10 w-10 shrink-0 ${light ? 'text-brand-400' : 'text-brand-700'}`} />
      <span className={`text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>SignalDesk<span className="text-brand-400">.</span></span>
    </span>
  );
}
