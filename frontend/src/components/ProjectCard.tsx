export default function ProjectCard({ p }: { p: any }) {
  return (
    <div className="border border-neutral-800 rounded-2xl p-4 hover:bg-neutral-900 transition">
      <div className="text-xs uppercase tracking-wider text-neutral-400">{p.category ?? 'Projeto'}</div>
      <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
      <p className="text-neutral-300 mt-2 line-clamp-2">{p.short_desc}</p>
      {p.tech_stack && <div className="mt-3 text-sm text-neutral-400">{p.tech_stack}</div>}
    </div>
  )
}
