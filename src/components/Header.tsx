'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Ambient light effect with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 opacity-70" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="relative w-full mx-auto px-4 py-16 sm:px-6 lg:px-8 flex items-center">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col justify-center relative">
            {/* Glow effect behind the text */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-100 to-gray-100 rounded-lg blur-2xl opacity-20" />
            
            <div className="relative">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block text-green-700 drop-shadow-sm">Sua Pesquisa Mais Rápida</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                  IA para Análise de Imagens de Fauna
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed backdrop-blur-sm">
                Deixe a IA cuidar das imagens para você. Classifique milhares de fotos em segundos e recupere horas de trabalho.
              </p>

              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  Entre para a lista de espera e garanta um
                </p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition duration-300">
                  desconto especial no lançamento!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col max-w-md gap-y-2">
                <div className="flex gap-x-4">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-auto rounded-md border-gray-300 bg-white/90 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 backdrop-blur-sm"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 focus-visible:outline-green-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-green-500/25"
                  >
                    Quero Meu Desconto
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Não enviamos spam</p>
              </form>
              
              
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-100 to-gray-100 rounded-2xl blur-2xl opacity-20" />
            <Image
              src="/onca.jpg"
              alt="Nature-inspired analytics"
              width={600}
              height={600}
              className="relative rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
              <div className="flex justify-between items-center text-gray-800">
                <div>
                  <p className="text-sm font-semibold">Total Reach</p>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
                    9,872,289
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">Conversion Rate</p>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
                    23.5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
