"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  CheckCircle,
  MapPin,
  Instagram,
  Zap,
  Trophy,
  Brain,
  X,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Mail,
  Shield,
} from "lucide-react"

import { FaWhatsapp, FaFacebook } from "react-icons/fa"

// Hook para detectar quando elemento entra na viewport
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isIntersecting] as const
}

// Componente para seção com background animado
function AnimatedSection({
  children,
  backgroundImage,
  className = "",
  overlayOpacity = "bg-black/70",
}: {
  children: React.ReactNode
  backgroundImage: string
  className?: string
  overlayOpacity?: string
}) {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Animation */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isIntersecting ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default function MarceloMatosKarateLanding() {
  const [selectedBelt, setSelectedBelt] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const beltProgression = [
    {
      name: "Faixa Branca",
      color: "bg-white border-2 border-gray-300",
      textColor: "text-gray-800",
      skills: ["Postura básica", "Primeiros movimentos", "Disciplina inicial"],
      description:
        "O começo da jornada. Aqui você aprende os fundamentos do Karate Shotokan, incluindo postura, respiração e os primeiros movimentos. É o momento de construir as bases para todo o seu desenvolvimento futuro.",
      image: "/faixas/faixa-branca.jpg",
    },
    {
      name: "Faixa Amarela",
      color: "bg-yellow-500 border-2 border-yellow-500",
      textColor: "text-yellow-900",
      skills: ["Katas básicos", "Técnicas de defesa", "Concentração"],
      description:
        "Sua primeira evolução! Na faixa amarela, você já domina os movimentos básicos e começa a aprender katas simples. Sua confiança cresce junto com sua habilidade técnica, e você já sente os benefícios físicos e mentais do treinamento.",
      image: "/faixas/faixa-amarela.jpg",
    },
    {
      name: "Faixa Laranja",
      color: "bg-orange-600 border-2 border-orange-600",
      textColor: "text-white",
      skills: ["Combinações", "Equilíbrio avançado", "Resistência"],
      description:
        "Na faixa laranja, você já executa combinações de golpes e defesas com maior fluidez. Seu equilíbrio melhora significativamente, assim como sua resistência física. Você começa a entender a filosofia por trás dos movimentos.",
      image: "/faixas/faixa-laranja.jpg",
    },
    {
      name: "Faixa Verde",
      color: "bg-emerald-600 border-2 border-green-700",
      textColor: "text-white",
      skills: ["Sparring controlado", "Autodefesa efetiva", "Liderança"],
      description:
        "Um marco importante! Na faixa verde, você já é capaz de aplicar técnicas em situações reais de sparring controlado. Sua autodefesa se torna efetiva e você começa a desenvolver qualidades de liderança, ajudando os iniciantes.",
      image: "/faixas/faixa-verde.jpg",
    },
    {
      name: "Faixa Roxa",
      color: "bg-violet-600 border-2 border-purple-700",
      textColor: "text-white",
      skills: ["Técnicas avançadas", "Filosofia marcial", "Mentoria"],
      description:
        "Na faixa roxa, você domina técnicas avançadas e aprofunda seu conhecimento na filosofia do Karate. Você se torna um exemplo para os alunos mais novos e começa a entender o verdadeiro significado do caminho marcial.",
      image: "/faixas/faixa-roxa.jpg",
    },
    {
      name: "Faixa Marrom",
      color: "bg-yellow-800 border-2 border-amber-900",
      textColor: "text-white",
      skills: ["Domínio técnico", "Preparação para preta", "Ensino"],
      description:
        "A última etapa antes da faixa preta. Você demonstra excelência técnica e compreensão profunda do Karate. Neste estágio, você já participa ativamente do ensino e se prepara intensamente para o desafio da faixa preta.",
      image: "/faixas/faixa-marrom.jpg",
    },
    {
      name: "Faixa Preta",
      color: "bg-gray-900 border-2 border-gray-700",
      textColor: "text-white",
      skills: ["Maestria", "Filosofia completa", "Transformação total"],
      description:
        "A faixa preta não é o fim, mas o verdadeiro início da sua jornada. Representa não apenas maestria técnica, mas transformação pessoal completa. Como faixa preta, você encarna os valores do Karate: disciplina, respeito, perseverança e excelência.",
      image: "/faixas/faixa-preta.jpg",
    },
  ]

  const handleBeltChange = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setSelectedBelt(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextBelt = () => {
    if (selectedBelt < beltProgression.length - 1) {
      handleBeltChange(selectedBelt + 1)
    }
  }

  const prevBelt = () => {
    if (selectedBelt > 0) {
      handleBeltChange(selectedBelt - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextBelt()
      } else if (e.key === "ArrowLeft") {
        prevBelt()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedBelt])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <AnimatedSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2012.29.26_e309afef.jpg-BQNl0vgG1eXsg8Z95kklyGzbRAfIDD.jpeg"
        className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6"
        overlayOpacity="bg-black/80"
      >
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="text-center">
            <div className="flex justify-center mb-8 md:mb-12">
              <Image
                src="/logo-marcelo-matos.jpg"
                alt="Escola Marcelo Matos Karate-Do"
                width={300}
                height={230}
                className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl shadow-2xl"
              />
            </div>

            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold">
              KARATE PARA TODOS
            </Badge>

            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight px-2">
              TRANSFORME SUA VIDA COM O<span className="block text-red-500 mt-2">KARATE SHOTOKAN</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 max-w-4xl mx-auto font-semibold px-4">
              Força, Disciplina, Saúde e Autoconfiança — Para Todas as Idades.
            </p>

            <div className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed space-y-3 md:space-y-4 px-4">
              <p>Na Escola Marcelo Matos Karate-Do, cada treino é mais do que exercício:</p>
              <p className="font-semibold text-white">É uma jornada de evolução física, mental e emocional.</p>
              <p>
                Com metodologia tradicional, baseada na maior escola de Karate do mundo, acolhimento verdadeiro e uma
                comunidade que inspira, você encontra muito mais do que um dojo —
              </p>
              <p className="font-semibold text-red-400">
                encontra propósito, valores e inspiração para uma vida plena.
              </p>
            </div>

            <div className="w-full max-w-sm mx-auto px-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold w-full h-14 md:h-16 text-xs md:text-sm lg:text-base rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-2 md:px-4"
                onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
              >
                <span className="text-center leading-tight break-words">AGENDE SUA AULA EXPERIMENTAL AQUI!</span>
              </Button>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-left space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-gray-200">Não é sobre lutar. É sobre dominar a si mesmo.</p>
                <p className="text-base md:text-lg text-white font-semibold">
                  E isso começa no tatame — ou não começa.
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Se você espera estar pronto pra começar, nunca vai começar.
                </p>
              </div>
              <div className="text-left space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-gray-200">
                  A evolução só vem para quem aparece. Não importa a sua idade.
                </p>
                <p className="text-base md:text-lg text-white font-semibold">Quem treina, muda. Quem adia, repete.</p>
                <p className="text-base md:text-lg text-red-400 font-semibold">
                  Primeira aula sem custo. A decisão é sua — como sempre foi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Methodology Section */}
      <section className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 text-black">
              Com orientação certa, você evolui de verdade.
              <span className="block text-red-600 mt-2">No Karate e na vida.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Seguir sozinho é andar em círculos. Com uma metodologia estruturada, sua jornada no Karate se transforma
              em crescimento técnico, mental e pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Method */}
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4 md:mb-6">
                  Nosso Método: Tradição Autêntica, Reconhecida Mundialmente
                </h3>
                <div className="space-y-4 md:space-y-6 text-gray-800">
                  <p className="leading-relaxed text-sm md:text-base">
                    Na Escola Marcelo Matos Karate-Do, seguimos fielmente a metodologia da Shotokan Karate International
                    Federation (SKIF) — a maior organização de Karate Shotokan do mundo, com presença em mais de 130
                    países.
                  </p>
                  <p className="leading-relaxed text-sm md:text-base">
                    A SKIF foi fundada pelo lendário Soke Hirokazu Kanazawa (10º Dan), mestre reconhecido por unir
                    excelência técnica, filosofia profunda e disciplina rigorosa. No Brasil, seguimos sob orientação da
                    Shotokan Karate International do Brasil (SKI-Brasil), entidade oficialmente reconhecida e
                    responsável por representar a SKIF Japão em território nacional.
                  </p>
                  <div className="bg-white p-4 md:p-6 rounded-lg">
                    <h4 className="font-bold text-black mb-3 md:mb-4 text-sm md:text-base">
                      Nosso método é estruturado sobre esses pilares:
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Técnica precisa e refinada, fiel aos princípios do Mestre Kanazawa
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Disciplina, ética e filosofia, aplicadas dentro e fora do dojo
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Avaliações rigorosas e reconhecidas internacionalmente
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Pertencimento a uma rede global de praticantes comprometidos com a tradição
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="leading-relaxed font-semibold text-sm md:text-base">
                    Aqui, você não aprende apenas a lutar — você trilha um caminho verdadeiro de evolução pessoal, com o
                    respaldo de uma escola mundialmente respeitada.
                  </p>
                  <p className="text-red-600 font-bold text-base md:text-lg">
                    Karate-Do, como deve ser. Autêntico. Disciplinado. Transformador.
                  </p>
                </div>
                <div className="flex justify-center mt-8 md:mt-14">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-09%20at%2010.22.37_4ebd4fba.jpg-8bSKV5VWd2fS21P6QZ9r6RJcdEL67V.jpeg"
                    alt="Karate Gi com Faixa Preta - Tradição e Excelência"
                    width={250}
                    height={170}
                    className="w-full max-w-xs md:max-w-sm rounded-lg object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Why Choose Us */}
            <Card className="bg-red-600 text-white border-0">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Por que a Escola Marcelo Matos Karate-Do?
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "Método Reconhecido Mundialmente",
                      desc: "Credenciada e filiada à SKI-Brasil, representante oficial da SKIF Japão, a maior escola de Karate Shotokan do mundo.",
                    },
                    {
                      title: "Tradição com Autenticidade",
                      desc: "Seguimos os ensinamentos do lendário Soke Hirokazu Kanazawa (10º Dan), preservando a essência do verdadeiro Karate-Do Shotokan.",
                    },
                    {
                      title: "Formação Completa",
                      desc: "Desenvolvemos corpo, mente e espírito — com técnica, ética e disciplina.",
                    },
                    {
                      title: "Treinos para Todas as Idades",
                      desc: "Crianças, jovens, adultos, idosos e famílias: todos evoluem no seu ritmo, com respeito e propósito.",
                    },
                    {
                      title: "Acompanhamento Próximo dos Senseis",
                      desc: "Orientação individualizada, com feedback constante e incentivo real à evolução.",
                    },
                    {
                      title: "Ambiente Acolhedor e Familiar",
                      desc: "Nossa comunidade é mais do que um dojo — é um espaço de apoio, amizade e crescimento mútuo.",
                    },
                    {
                      title: "Progressão Clara e Estruturada",
                      desc: "Treinos planejados, exames sérios e metas concretas, com padrão internacional.",
                    },
                    {
                      title: "Filosofia Aplicada à Vida",
                      desc: "Respeito, humildade, coragem e perseverança — valores que formam caráter, não só atletas.",
                    },
                    {
                      title: "Saúde e Bem-Estar Integrados",
                      desc: "O Karate melhora o condicionamento físico, reduz o estresse e aumenta a autoconfiança.",
                    },
                    {
                      title: "Mais do que Lutar — Viver o Caminho",
                      desc: "Aqui você não apenas aprende Karate. Você vive o caminho do guerreiro moderno, com propósito e inspiração.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-bold text-base md:text-lg">
                        {index + 1}. {item.title}
                      </h4>
                      <p className="text-red-100 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-black/20 rounded-lg">
                  <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Karate não é só luta.</p>
                  <p className="text-base md:text-lg mb-3 md:mb-4">
                    É uma jornada de crescimento pessoal que começa no tatame — e se reflete em tudo.
                  </p>
                  <p className="text-base md:text-lg font-semibold">Comece com quem sabe guiar esse caminho.</p>
                </div>

                <div className="mt-6 md:mt-8">
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-900 text-white font-bold w-full h-12 md:h-14 text-xs md:text-sm lg:text-base rounded-lg px-2 md:px-4"
                    onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
                  >
                    <span className="text-center leading-tight break-words">Iniciar minha jornada de evolução</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Belt Evolution Section */}
      <AnimatedSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2012.29.26_21dc4f05.jpg-7gdmVdhxzDMJw8lOyCxNRrejlwO1RA.jpeg"
        className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6"
        overlayOpacity="bg-black/85"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 text-white">
              Sem orientação você <span className="text-red-500">estagna</span>
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 text-white">
              Com nossa escola você <span className="text-green-400">evolui</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Sem a Escola */}
            <Card className="bg-gray-900/90 border border-gray-700 hover:border-red-500/30 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2 md:mb-3">SEM ORIENTAÇÃO</h3>
                  <p className="text-base md:text-lg text-gray-200">Treino sozinho, sem metodologia</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-xs md:text-sm font-bold text-gray-800">B</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 md:h-3 bg-gray-700 rounded-full">
                        <div className="h-2 md:h-3 bg-gray-500 rounded-full w-1/12"></div>
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm md:text-base">2 anos</span>
                  </div>

                  <div className="bg-gray-800/80 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold text-gray-100 mb-3 md:mb-4 text-base md:text-lg">
                      Resultado após 2 anos:
                    </h4>
                    <ul className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-base">
                      <li className="flex items-center space-x-3">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        <span>Ainda na faixa branca</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        <span>Técnicas incorretas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        <span>Sem disciplina mental</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
                        <span>Desmotivação constante</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Com a Escola */}
            <Card className="bg-gray-900/90 border border-green-500/30 hover:border-green-400 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 md:mb-3">COM NOSSA ESCOLA</h3>
                  <p className="text-base md:text-lg text-gray-200">Metodologia SKIF Japan</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="flex space-x-1">
                      {beltProgression.slice(0, 5).map((belt, index) => (
                        <div key={index} className={`w-3 h-3 md:w-5 md:h-5 ${belt.color} rounded-full border`}></div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 md:h-3 bg-gray-700 rounded-full">
                        <div className="h-2 md:h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm md:text-base">2 anos</span>
                  </div>

                  <div className="bg-green-900/30 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold text-green-400 mb-3 md:mb-4 text-base md:text-lg">
                      Resultado após 2 anos:
                    </h4>
                    <ul className="space-y-2 md:space-y-3 text-gray-100 text-sm md:text-base">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                        <span>Faixa Verde ou superior</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                        <span>Técnicas perfeitas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                        <span>Disciplina mental forte</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                        <span>Motivação constante</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Belt Progression */}
          <div className="bg-gray-900/90 rounded-xl p-6 md:p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
              Sua Progressão na Escola Marcelo Matos
            </h3>

            <div className="flex justify-center mb-6 md:mb-8 space-x-1 md:space-x-2 overflow-x-auto pb-2">
              {beltProgression.map((belt, index) => (
                <button
                  key={index}
                  onClick={() => handleBeltChange(index)}
                  className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 ${
                    selectedBelt === index ? "ring-2 md:ring-4 ring-red-500 scale-110" : "hover:scale-105"
                  } ${belt.color}`}
                  aria-label={belt.name}
                ></button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div
                className={`relative transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                } flex justify-center order-2 md:order-1`}
              >
                <Image
                  src={beltProgression[selectedBelt].image || "/placeholder.svg"}
                  alt={beltProgression[selectedBelt].name}
                  width={250}
                  height={375}
                  className="w-full max-w-xs md:max-w-sm lg:w-[400px] lg:h-[600px] rounded-lg shadow-2xl shadow-red-500/50"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/60 to-red-600/60 rounded-xl blur-md -z-10"></div>
              </div>

              <div
                className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"} space-y-4 md:space-y-6 order-1 md:order-2`}
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevBelt}
                    disabled={selectedBelt === 0}
                    className={`p-2 md:p-3 rounded-full ${
                      selectedBelt === 0 ? "text-gray-600" : "text-white hover:bg-gray-800"
                    }`}
                    aria-label="Faixa anterior"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
                    {beltProgression[selectedBelt].name}
                  </h4>
                  <button
                    onClick={nextBelt}
                    disabled={selectedBelt === beltProgression.length - 1}
                    className={`p-2 md:p-3 rounded-full ${
                      selectedBelt === beltProgression.length - 1 ? "text-gray-600" : "text-white hover:bg-gray-800"
                    }`}
                    aria-label="Próxima faixa"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                  {beltProgression[selectedBelt].description}
                </p>

                <div className="bg-gray-800/80 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                  <h5 className="font-bold text-white mb-3 md:mb-4 text-base md:text-lg">Habilidades desenvolvidas:</h5>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {beltProgression[selectedBelt].skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-100 text-sm md:text-base">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedBelt < beltProgression.length - 1 && (
                  <div className="text-center">
                    <Button
                      onClick={nextBelt}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg group text-sm md:text-base lg:text-lg"
                    >
                      <span className="text-center leading-tight">Próximo nível</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2012.29.23_35d748d7.jpg-m4CSuqAeInlt0CmhCnnKuXTdJBxUu1.jpeg"
        className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6"
        overlayOpacity="bg-red-600/80"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-3 md:mb-4 text-white">
              CORPO, MENTE E ESPÍRITO.
            </h2>
            <p className="text-lg md:text-xl text-red-100">Um espaço para quem quer evoluir</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Brain,
                title: "Foco e Disciplina",
                desc: "Desenvolver foco, disciplina e equilíbrio emocional através da prática tradicional.",
              },
              {
                icon: Heart,
                title: "Saúde Física",
                desc: "Melhorar sua saúde física, resistência e flexibilidade com treinos estruturados.",
              },
              {
                icon: Shield,
                title: "Autodefesa",
                desc: "Aprender autodefesa com responsabilidade e técnicas tradicionais eficazes.",
              },
              {
                icon: Zap,
                title: "Autoconfiança",
                desc: "Fortalecer sua autoestima através da evolução pessoal e conquistas graduais.",
              },
              {
                icon: Users,
                title: "Comunidade",
                desc: "Fazer parte de uma comunidade acolhedora e motivadora de praticantes.",
              },
              {
                icon: Trophy,
                title: "Todas as Idades",
                desc: "Para todas as idades e níveis. Evolua no seu tempo, com acompanhamento.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 group backdrop-blur-sm"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-100 transition-colors">
                    <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-red-100 leading-relaxed text-base md:text-lg">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Sensei Section */}
      <AnimatedSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2012.29.24_f1999f8b.jpg-ZztAFzcyYWYzzUQHQGjybsRLXDt1Kd.jpeg"
        className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6"
        overlayOpacity="bg-black/85"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-3 md:mb-4 text-white">Sobre Marcelo Matos</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 lg:mr-8">
              <Image
                src="/sensei-marcelo-matos.jpg"
                alt="Sensei Marcelo Matos"
                width={500}
                height={400}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-2xl mx-auto"
              />
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500">
                  Quem é o Sensei Marcelo Matos
                </h3>
                <p className="text-lg md:text-xl text-gray-100 mb-6 md:mb-8">
                  Com mais de 35 anos de dedicação ao Karate Shotokan, Sensei Marcelo Matos é referência em educação
                  tradicional, humano e consciente.
                </p>
                <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
                  Faixa Preta 1º Dan diplomado pela SKIF Japão, é praticante desde 1989, e discípulo dos respeitados e
                  renomados Senseis Teruo Furusho (8º Dan SKIF, in memoriam) e Elcio Pinto (5º Dan SKIF), atual Diretor
                  Técnico da SKI-Brasil para a Região Sudeste.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  Além da prática marcial, Sensei Marcelo Matos é:
                </h4>
                {[
                  "Bacharelando em Educação Física (UniCesumar)",
                  "Formando da primeira turma do Brasil do I Curso Profissionalizante de Instrutores de Lutas e Artes Marciais (UFRJ)",
                  "Certificado em Primeiros Socorros no Dojo (Reconhecido pela CBJJ e IBJJF)",
                  "Faixa Amarela de Judô",
                  "Faixa Amarela de Luta Livre",
                  "Faixa Azul de Jiu-jitsu",
                ].map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-100 text-base md:text-lg">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/80 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">
                  Mas sua trajetória vai além do tatame:
                </h4>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  Atuou em cargos de alta gestão nos setores público, privado e terceiro setor. Foi docente no ensino
                  médio e superior, desenvolvendo habilidades de comunicação, empreendedorismo, formação de pessoas e
                  liderança.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 md:p-8 rounded-lg border-l-4 border-red-500 backdrop-blur-sm">
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Essa combinação única entre experiência marcial, acadêmica e profissional garante um ensino de
                  qualidade, com visão ampla e sensibilidade humana — respeitando o ritmo e os objetivos de cada aluno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <section className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-3 md:mb-4 text-black">
              O que dizem sobre <span className="text-red-600">Marcelo Matos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {[
              {
                text: "Marcelo Matos é meu aluno há mais de uma década, e foi treinado sob minha orientação. Acompanho seu desenvolvimento desde o início da sua jornada, na década de 80. Seu método de ensino é claro, eficaz, e ele tem um talento genuíno para motivar e inspirar seus alunos. É um profissional comprometido com os verdadeiros valores do Karate-Do.",
                author: "Shihan Elcio Pinto",
                title: "Faixa Preta, 5º. Dan\nDiretor Técnico da SKI-Brasil para a Região Sudeste",
              },
              {
                text: "Toda vez que treinamos juntos no mesmo dojo, Marcelo Matos demonstra notável dedicação e compromisso com o verdadeiro Karate-Do. Estive presente na banca que avaliou sua graduação à faixa preta, e pude atestar sua seriedade, clareza didática e habilidade, e é isso que ele demonstra aos seus alunos. Seu trabalho como instrutor reflete os valores e a tradição que buscamos preservar na SKIF.",
                author: "Shihan Alex Franklin",
                title: "Faixa Preta, 5º. Dan\nPresidente da Shotokan Karate International do Brasil (SKI-Brasil)",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-6 md:p-8">
                  <blockquote className="text-gray-800 italic mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="font-bold text-red-600 text-base md:text-lg block">{testimonial.author}</cite>
                  <p className="text-gray-600 text-xs md:text-sm mt-2 whitespace-pre-line">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-red-600 text-white border-0">
            <CardContent className="p-6 md:p-8 text-center">
              <blockquote className="text-lg md:text-xl italic mb-4 md:mb-6 leading-relaxed">
                "Mesmo sendo faixa branca, me sinto respeitada e parte de algo maior. O Sensei Marcelo Matos ensina com
                paciência, clareza e muita dedicação. Aprendo mais do que Karate — aprendo a evoluir como pessoa."
              </blockquote>
              <cite className="font-bold text-base md:text-lg">Simone Mendes, aluna faixa branca</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-14%20at%2012.29.24_4daab0d8.jpg-0LXYbS9YXUnyInin8Mqw4l7f6HivN1.jpeg"
        className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6"
        overlayOpacity="bg-red-600/90"
      >
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 text-white px-4">
            O seu próximo passo começa <span className="text-black">agora</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              "Aprender uma arte marcial tradicional reconhecida mundialmente",
              "Fortalecer corpo e mente com metodologia comprovada",
              "Integrar uma comunidade que inspira e transforma",
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 p-6 md:p-8 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
                <p className="text-white leading-relaxed text-base md:text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white px-4">Este é o seu momento!</p>

          <div className="w-full max-w-sm mx-auto mb-8 md:mb-12 px-4">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold w-full h-14 md:h-16 text-xs md:text-sm lg:text-base rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-2 md:px-4"
              onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
            >
              <span className="text-center leading-tight break-words">AGENDE SUA AULA EXPERIMENTAL AQUI!</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "1", text: "Preencha o formulário e agende sua aula — é gratuita e sem compromisso" },
              { step: "2", text: "Venha conhecer nosso espaço e participar de uma aula real" },
              { step: "3", text: "Sinta-se à vontade para seguir a sua jornada no nosso Dojo" },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/10 p-6 md:p-8 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl mx-auto mb-4 md:mb-6">
                  {item.step}
                </div>
                <p className="text-white leading-relaxed text-base md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-3 md:mb-4 text-white">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
            {[
              {
                question: "Nunca pratiquei nenhuma arte marcial… posso começar?",
                answer:
                  "✅ Sim! Nosso método é estruturado para iniciantes, com progressão gradual e acompanhamento próximo.",
              },
              {
                question: "Tenho mais de 40 anos… ainda dá tempo de começar?",
                answer:
                  "✅ Com certeza! O Karate é para todas as idades. Temos alunos de diversas faixas etárias evoluindo no seu ritmo.",
              },
              {
                question: "É seguro para crianças?",
                answer:
                  "✅ Sim. Nossa metodologia é segura e respeita cada fase do desenvolvimento infantil — físico, emocional e cognitivo.\n\nSeguimos os princípios da pedagogia do movimento, promovendo o aprendizado de forma lúdica, disciplinada e respeitosa.\n\nTodos os instrutores são capacitados e têm formação em Primeiros Socorros, garantindo um ambiente de treino seguro, acolhedor e preparado.",
              },
              {
                question: "Qual é a idade mínima para treinar?",
                answer: "✅ A partir dos 4 anos. Começar cedo desenvolve disciplina e autoconfiança.",
              },
              {
                question: "O que é o Karate Shotokan?",
                answer:
                  "✅ Um dos estilos mais tradicionais do Karate, dá ênfase na técnica refinada, disciplina e filosofia de vida. Seguimos a metodologia da Shotokan Karate International Federation (SKIF) Japão, referência como a maior escola de Karate Shotokan do mundo.",
              },
              {
                question: "Como faço para agendar a aula experimental?",
                answer:
                  "✅ É simples! Clique no botão, preencha seus dados e entraremos em contato para confirmar seu horário.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-800 rounded-lg px-6 md:px-8 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-red-400 font-semibold py-6 md:py-8 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-100 leading-relaxed pb-6 md:pb-8 text-base md:text-lg whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 md:py-16 lg:py-20 xl:py-24 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-900/20"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 px-4">
            Sua jornada começa com um passo.
            <span className="block text-red-500 mt-2">O próximo é seu!</span>
          </h2>

          <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Na Escola Marcelo Matos Karate, você encontra um ambiente seguro, acolhedor e inspirador para evoluir. Cada
            treino é uma oportunidade de ser mais forte, mais saudável e mais equilibrado.
          </p>

          <div className="w-full max-w-sm mx-auto mb-12 md:mb-16 px-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold w-full h-14 md:h-16 text-xs md:text-sm lg:text-base rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-2 md:px-4"
              onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
            >
              <span className="text-center leading-tight break-words">AGENDE SUA AULA EXPERIMENTAL AQUI!</span>
            </Button>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 px-4">Venha fazer parte da nossa família!</p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center p-6 md:p-8 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500/30 transition-colors">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-red-500 mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold mb-2 md:mb-3 text-white text-base md:text-lg">Endereço</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Casa dos Poveiros
                <br />
                Rua do Bispo, 302
                <br />
                Tijuca, Rio de Janeiro - RJ
                <br />
                CEP: 20261-068
              </p>
              {/* Google Maps Embed */}
              <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0234567890123!2d-43.2345678!3d-22.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5c0123456789%3A0x1234567890abcdef!2sRua%20do%20Bispo%2C%20302%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020261-068!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Escola Marcelo Matos Karate-Do"
                ></iframe>
              </div>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500/30 transition-colors">
              <div className="flex justify-center mb-4 md:mb-6">
                <Image
                  src="/logo-marcelo-matos.jpg"
                  alt="Escola Marcelo Matos Karate-Do"
                  width={300}
                  height={80}
                  className="w-full max-w-xs md:max-w-sm rounded-lg"
                />
              </div>
              <h3 className="font-bold mb-4 md:mb-6 text-white text-base md:text-lg">Contato</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  <a
                    href="https://wa.me/5521999045826"
                    className="text-gray-200 hover:text-green-400 transition-colors text-sm md:text-base"
                  >
                    +55 21 99904-5826
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  <a
                    href="mailto:falecom@marcelomatoskarate.com.br"
                    className="text-gray-200 hover:text-red-400 transition-colors text-sm md:text-base break-all"
                  >
                    falecom@marcelomatoskarate.com.br
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
                  <a
                    href="https://instagram.com/marcelomatoskarate"
                    className="text-gray-200 hover:text-pink-400 transition-colors text-sm md:text-base"
                  >
                    @marcelomatoskarate
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  <FaFacebook className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  <a
                    href="https://www.facebook.com/share/16NhqLu1Km/"
                    className="text-gray-200 hover:text-blue-400 transition-colors text-sm md:text-base"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* School Expansion Section */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-700">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-white">
              Curtiu o modelo? Leve o Karate para sua escola, colégio ou clube!
            </h3>
            <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
              Nosso método vai além da luta: desenvolve disciplina, autoconfiança, respeito e saúde física e emocional —
              tudo de forma segura, divertida e alinhada com princípios pedagógicos.
            </p>
            <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
              Com uma abordagem acessível, estruturada e profissional, o Karate-Do pode transformar o ambiente
              educacional ou esportivo da sua instituição, agregando valor ao seu projeto pedagógico e à formação
              integral dos alunos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                "Metodologia reconhecida internacionalmente (SKIF Japão)",
                "Modelo padronizado de operações e excelência",
                "Desenvolvimento técnico, certificações e amplos recursos educacionais",
                "Instrutores qualificados certificados pela SKIF",
                "Atividades adaptadas por faixa etária e contexto escolar",
                "Participações em campeonatos",
                "Integração com valores como ética, concentração e superação",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Vamos conversar?</h4>
              <p className="text-base md:text-lg text-gray-200 mb-4 md:mb-6">
                Leve a força do Karatê para sua comunidade e colha os resultados no desempenho, no comportamento e na
                motivação dos seus alunos.
              </p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm"
                onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
              >
                <span className="text-center leading-tight break-words">Falar sobre parcerias</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-06-14_at_12.52.02_cf288812-removebg-preview-Ssz4J02hZgmSLh3RuqRLnre6zeF1yZ.png"
                alt="SKIF - Shotokan Karate International Federation"
                width={80}
                height={80}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              />
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl px-4">
              Dojo credenciado e supervisionado pela
              <br />
              <span className="font-semibold text-white">Shotokan Karate International Federation</span>
              <br />
              (SKIF, Japan)
            </p>
            <div className="pt-4 md:pt-6 border-t border-gray-800 w-full">
              <p className="text-gray-500 text-xs md:text-sm">
                © 2024 Escola Marcelo Matos Karate-Do. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5521999045826"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 md:p-4 shadow-lg z-50 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" color="white" />
      </a>
    </div>
  )
}
