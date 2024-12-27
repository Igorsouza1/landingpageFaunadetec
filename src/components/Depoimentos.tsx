import Image from 'next/image'

const companies = [
  { name: 'Instituto Homem Pantaneiro', logo: '/ihp-vertical-logo-2.png' },
  { name: 'IFMS', logo: '/ifms.png' },
  { name: 'Sebrae', logo: '/sebrae.png' },
]

export default function PartnerCompanies() {
  return (
    <section className="bg-green-900 py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-green-100 text-2xl font-semibold mb-6">
          Empresas que confiam em nós
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-96 h-48 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`Logo da ${company.name}`}
                width={240}
                height={60}
                className="max-w-full max-h-full object-contain filter  hue-rotate-70 saturate-200 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

