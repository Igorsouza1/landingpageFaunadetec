'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Target, Globe } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Carregue até 50.000 imagens e receba somente as que têm animais.",
    imageUrl: "/economiaTempo.svg",
    imageAlt: "Pesquisador analisando imagens de armadilhas fotográficas",
    details: [
      "Processamento ultrarrápido de grandes volumes de imagens",
      "Filtragem inteligente focada apenas em fotos com animais",
      "Redução drástica do tempo de análise manual"
    ]
  },
  {
    icon: Target,
    title: "Resultados Confiáveis",
    description: "Precisão na análise, eliminando erros humanos. Relatórios organizados para uso direto.",
    imageUrl: "/analisandoImagens.svg",
    imageAlt: "Gráficos e relatórios de análise de vida selvagem",
    details: [
      "Algoritmos de IA de última geração para identificação precisa",
      "Eliminação de falsos positivos e negativos",
      "Geração automática de relatórios detalhados e prontos para uso"
    ]
  },
  {
    icon: Globe,
    title: "Liberdade de Uso",
    description: "Interface simples, acessível a qualquer hora e lugar.",
    imageUrl: "/anywhere.svg",
    imageAlt: "Pesquisador usando o aplicativo em um tablet no campo",
    details: [
      "Acesso via web, compatível com qualquer dispositivo",
      "Trabalhe do campo, do escritório ou de casa com a mesma eficiência",
      "Atualizações e backups automáticos na nuvem"
    ]
  }
]

const BenefitSection = ({ benefit, index }) => {
  const isEven = index % 2 === 0
  const textAnimation = isEven
    ? { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 0.5 } }
  const imageAnimation = isEven
    ? { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 0.5 } }

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-20`}>
      <motion.div className="w-full md:w-1/2" {...imageAnimation}>
        <Image
          src={benefit.imageUrl}
          alt={benefit.imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </motion.div>
      <motion.div className="w-full md:w-1/2" {...textAnimation}>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4">
            <benefit.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            {benefit.title}
          </h3>
        </div>
        <p className="text-xl text-gray-700 mb-6">{benefit.description}</p>
        <ul className="space-y-2">
          {benefit.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-green-600">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
        >
          O que você ganha com nossa solução?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-700 mb-16"
        >
          Transforme sua pesquisa de vida selvagem com tecnologia de ponta
        </motion.p>
        {benefits.map((benefit, index) => (
          <BenefitSection key={index} benefit={benefit} index={index} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
        >
          Revolucione sua pesquisa agora
        </motion.a>
      </div>
    </section>
  )
}

