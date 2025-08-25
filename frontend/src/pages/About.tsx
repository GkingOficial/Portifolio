import ProjectCard from '../components/ProjectCard'

export default function About() {
  const imgURL = 'https://nsmlmcxlwqbgacghefjt.supabase.co/storage/v1/object/public/Portifolio-Bucket/perfil-h.JPG'
  return (
    <div className="text-center">
      <img
        src={imgURL}
        alt="Banner do portfólio"
        className="mx-auto rounded-lg shadow-lg max-w-3xl"
      />
      <h1 className="text-3xl font-bold mt-6">Bem-vindo ao meu portfólio</h1>
    </div>
  )
}
