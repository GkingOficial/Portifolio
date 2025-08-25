export default function Home() {
  const imgURL = "https://nsmlmcxlwqbgacghefjt.supabase.co/storage/v1/object/public/Portifolio-Bucket/Lattes.jpg"
  return (
    <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
      <div className="flex-none w-48 md:w-56 md:mt-12">
        <img alt="picture" loading="eager" src={imgURL}
          className="w-64 h-64 object-cover rounded-full border-4 border-neutral-700 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div>
        <div className="text-center md:text-left">
          <h1 className="group my-4 text-3xl font-semibold">
            <span className="">Hello, world!</span>
          </h1>
        </div>

        <p className="my-4 text-justify">
          My name is Talisson, an engineer in training with a focus on applied Artificial Intelligence, embedded systems, and data products that connect technology to the real world.
        </p>

        <p className="my-4 text-justify">
          My interest isn't in developing software per se, but in using AI, automation, and data science tools to solve practical problems, create useful prototypes, and contribute to interdisciplinary projects—from academic research to affordable solutions with social impact.
        </p>

        <p className="my-4 text-justify">
          I participate in projects involving GNNs for molecular toxicity, smart materials optimization with genetic algorithms, environmental monitoring with embedded hardware, among others. I also have my own initiatives focused on creating data products and platforms with scalability.
        </p>
      </div>
    </section>
  )
}
