'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="relative bg-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 opacity-70" />
      
      <div className="relative max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tudo que você precisa saber sobre o produto e como funciona. Não encontrou sua dúvida?{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
              Fale com nosso time
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              Como funciona o período de teste gratuito?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oferecemos um período de teste gratuito de 14 dias para você experimentar todas as funcionalidades premium da plataforma. Não é necessário cartão de crédito para começar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              O que está incluído na versão gratuita?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              A versão gratuita inclui acesso básico à plataforma, com limite de 100 análises por mês, relatórios essenciais e suporte por email.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              Vocês têm um programa de afiliados?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sim! Nosso programa de afiliados oferece comissões atrativas para cada novo cliente que você trouxer. Entre em contato para mais detalhes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              Preciso ter experiência prévia com IA?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Não! Nossa plataforma foi desenvolvida pensando em usuários de todos os níveis. Oferecemos tutoriais detalhados e suporte para ajudá-lo a começar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              Quais são os planos de pagamento disponíveis?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oferecemos planos mensais e anuais, com desconto especial para pagamento anual. Os preços variam de acordo com o volume de análises necessárias.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-4 bg-white/80 backdrop-blur-sm">
            <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-green-600 hover:no-underline">
              Vocês oferecem suporte técnico?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sim, oferecemos suporte técnico por email 24/7 para todos os clientes, e suporte prioritário por chat para clientes dos planos premium.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

