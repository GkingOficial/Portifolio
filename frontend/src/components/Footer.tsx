export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 text-sm text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 flex justify-center">
        <span className="copyright">© {new Date().getFullYear()} Talisson Damião - Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
