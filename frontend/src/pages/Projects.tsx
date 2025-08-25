import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [items, setItems] = useState<any[] | null>(null)
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    api.get('/projects/?ordering=-created_at')
      .then(r => setItems(r.data?.results ?? r.data ?? []))
      .catch(() => {
        setErr('Sem conexão com a API — mostrando exemplos.')
        setItems([
          { title: 'GNN vs MLP (Mutagenicidade)', short_desc: 'Comparativo com AUROC e CV 5-fold.', tech_stack: 'Python, TensorFlow, RDKit', category: 'Dados/IA' },
          { title: 'Kanban React + Django', short_desc: 'Board estilo Trello integrado ao DRF.', tech_stack: 'Django, React, DRF', category: 'Software' },
          { title: 'Cactus Rockets', short_desc: 'Projeto de foguetes acadêmicos (até 3 km).', tech_stack: 'CAD, Simulação, Telemetria', category: 'Competição' },
        ])
      })
  }, [])

  return (
    <section>
      <h1 className="text-3xl font-bold">Portfólio</h1>
      <p className="mt-2 text-neutral-300 max-w-2xl">
        Projetos de software, hardware, pesquisa e competições — direto ao ponto.
      </p>

      {err && <div className="mt-4 text-xs text-amber-400">{err}</div>}

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {(items ?? []).slice(0, 6).map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </section>
  )
}
