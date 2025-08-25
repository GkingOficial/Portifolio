import ProjectCard from '../components/ProjectCard'

export default function Contact() {
  const imgURL = 'https://drive.google.com/file/d/1ICs1UOImrXuLX88r9bnh5cg5i2wbqZGK/view?usp=drive_link'
  return (
    <div className="text-center">
      <img
        src={imgURL}
        alt="Banner do portfólio"
        className="mx-auto rounded-lg shadow-lg max-w-3xl"
      />
      <h1 className="text-3xl font-bold mt-6">Contact</h1>
    </div>
  )
}
