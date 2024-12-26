'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-green-700 hover:text-green-600 transition duration-300">
            Fauna Detec
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="#sobre" className="text-gray-700 hover:text-green-600 transition duration-300">
              Sobre
            </Link>
            <Link href="#recursos" className="text-gray-700 hover:text-green-600 transition duration-300">
              Recursos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-green-600 transition duration-300">
              Contato
            </Link>
            <Button
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 focus-visible:outline-green-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-green-500/25"
            >
              Lista de Espera
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
