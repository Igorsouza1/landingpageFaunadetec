'use client'

import { QrCode, Sparkles, Shield, Users, Rocket, Move } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BenefitsSection() {
  return (
    <div className="relative bg-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 opacity-70" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="relative">
          {/* Glow effect behind the title */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-100 to-gray-100 rounded-lg blur-2xl opacity-20" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="block text-green-700 drop-shadow-sm">Tudo o que você precisa</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              e muito mais.
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <img 
                  src="/placeholder.svg?height=160&width=320" 
                  alt="Ilustração Plug and Play"
                  className="h-40 object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Plug and Play</h3>
              <p className="text-gray-600">
                Não perca tempo recriando um fluxo de pagamento que já funciona para milhões de pessoas. Ship fast.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <QrCode className="h-20 w-20 text-green-600" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Pagamento simples e rápido</h3>
              <p className="text-gray-600">
                Tenha uma página de checkout para que seus clientes comprem seus produtos com facilidade e segurança.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <Sparkles className="h-20 w-20 text-green-600" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Customização</h3>
              <p className="text-gray-600">
                Customize o seu checkout, e deixe ele com a sua cara! (em breve)
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative h-32 w-32 bg-[#635BFF]/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg?height=160&width=320" 
                    alt="Stripe Integration"
                    className="h-24 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Migre rápido</h3>
              <p className="text-gray-600">
                Tenha um suporte ao migrar de outro gateway para a AbacatePay. Quando não quiser mais continuar com a gente, te ajudaremos a migrar também.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <Users className="h-20 w-20 text-green-600" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Networking</h3>
              <p className="text-gray-600">
                Faça parte de grupos com empreendedores que faturam +5k, +10k, +50k, +100k.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 p-6">
              <div className="h-40 flex items-center justify-center">
                <Shield className="h-20 w-20 text-green-600" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-transparent opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Segurança garantida</h3>
              <p className="text-gray-600">
                Operamos com parceiros confiáveis e seguros. Todos os seus dados são protegidos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

