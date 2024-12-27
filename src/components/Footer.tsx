import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-50 py-6 text-green-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm">
            © {currentYear} Fauna Detec. Todos os direitos reservados.
          </div>
          <nav className="flex space-x-4 text-sm">
            <Link 
              href="/privacy-policy" 
              className="hover:text-green-600 transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/terms-and-conditions" 
              className="hover:text-green-600 transition-colors duration-300"
            >
              Termos e Condições
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

