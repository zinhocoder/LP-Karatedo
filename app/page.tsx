"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Users,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Zap,
  Trophy,
  Brain,
  Sparkles,
  X,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

import { FaWhatsapp } from "react-icons/fa"

export default function MarceloMatosKarateLanding() {
  const [selectedBelt, setSelectedBelt] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const beltProgression = [
    {
      name: "Faixa Branca",
      color: "bg-white border-2 border-gray-300",
      textColor: "text-gray-800",
      time: "Início",
      skills: ["Postura básica", "Primeiros movimentos", "Disciplina inicial"],
      description:
        "O começo da jornada. Aqui você aprende os fundamentos do Karate Shotokan, incluindo postura, respiração e os primeiros movimentos. É o momento de construir as bases para todo o seu desenvolvimento futuro.",
      image: "/faixas/faixa-branca.jpg",
    },
    {
      name: "Faixa Amarela",
      color: "bg-yellow-500 border-2 border-yellow-500",
      textColor: "text-yellow-900",
      time: "3-6 meses",
      skills: ["Katas básicos", "Técnicas de defesa", "Concentração"],
      description:
        "Sua primeira evolução! Na faixa amarela, você já domina os movimentos básicos e começa a aprender katas simples. Sua confiança cresce junto com sua habilidade técnica, e você já sente os benefícios físicos e mentais do treinamento.",
      image: "/faixas/faixa-amarela.jpg",
    },
    {
      name: "Faixa Laranja",
      color: "bg-orange-600 border-2 border-orange-600",
      textColor: "text-white",
      time: "9-12 meses",
      skills: ["Combinações", "Equilíbrio avançado", "Resistência"],
      description:
        "Na faixa laranja, você já executa combinações de golpes e defesas com maior fluidez. Seu equilíbrio melhora significativamente, assim como sua resistência física. Você começa a entender a filosofia por trás dos movimentos.",
      image: "/faixas/faixa-laranja.jpg",
    },
    {
      name: "Faixa Verde",
      color: "bg-emerald-600 border-2 border-green-700",
      textColor: "text-white",
      time: "15-18 meses",
      skills: ["Sparring controlado", "Autodefesa efetiva", "Liderança"],
      description:
        "Um marco importante! Na faixa verde, você já é capaz de aplicar técnicas em situações reais de sparring controlado. Sua autodefesa se torna efetiva e você começa a desenvolver qualidades de liderança, ajudando os iniciantes.",
      image: "/faixas/faixa-verde.jpg",
    },
    {
      name: "Faixa Roxa",
      color: "bg-violet-600 border-2 border-purple-700",
      textColor: "text-white",
      time: "21-24 meses",
      skills: ["Técnicas avançadas", "Filosofia marcial", "Mentoria"],
      description:
        "Na faixa roxa, você domina técnicas avançadas e aprofunda seu conhecimento na filosofia do Karate. Você se torna um exemplo para os alunos mais novos e começa a entender o verdadeiro significado do caminho marcial.",
      image: "/faixas/faixa-roxa.jpg",
    },
    {
      name: "Faixa Marrom",
      color: "bg-yellow-800 border-2 border-amber-900",
      textColor: "text-white",
      time: "27-30 meses",
      skills: ["Domínio técnico", "Preparação para preta", "Ensino"],
      description:
        "A última etapa antes da faixa preta. Você demonstra excelência técnica e compreensão profunda do Karate. Neste estágio, você já participa ativamente do ensino e se prepara intensamente para o desafio da faixa preta.",
      image: "/faixas/faixa-marrom.jpg",
    },
    {
      name: "Faixa Preta",
      color: "bg-gray-900 border-2 border-gray-700",
      textColor: "text-white",
      time: "3+ anos",
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black py-16 md:py-20 lg:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-red-800/20 to-red-900/30"></div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo-marcelo-matos.jpg"
                alt="Escola Marcelo Matos Karate-Do"
                width={180}
                height={180}
                className="rounded-xl shadow-2xl"
              />
            </div>

            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              Metodologia Tradicional SKIF Japan
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              TRANSFORME-SE ATRAVÉS DO
              <span className="block text-red-500 mt-2">KARATE SHOTOKAN</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
              Força, disciplina, saúde e autoconfiança para todas as idades
            </p>

            <p className="text-lg md:text-lg mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Na Escola Marcelo Matos Karate, cada treino é uma jornada de evolução. Com metodologia tradicional e
              acolhimento de verdade, aqui você encontra uma comunidade, valores e inspiração para a vida.
            </p>

            <div className="w-full max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold w-full h-16 text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 group"
                onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    <span>AULA EXPERIMENTAL</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-sm font-normal">100% GRATUITA</span>
                </div>
              </Button>
            </div>

            <div className="mt-6 flex flex-col space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% Gratuita</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Sem Compromisso</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Todas as Idades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Belt Evolution Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              SUA JORNADA DE EVOLUÇÃO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Sem orientação você <span className="text-red-500">estagna</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-black mb-8">
              Com nossa escola você <span className="text-green-400">evolui</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Sem a Escola */}
            <Card className="bg-gray-900 border border-gray-700 hover:border-red-500/30 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-400 mb-3">SEM ORIENTAÇÃO</h3>
                  <p className="text-lg text-gray-200">Treino sozinho, sem metodologia</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-800">B</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-700 rounded-full">
                        <div className="h-3 bg-gray-500 rounded-full w-1/12"></div>
                      </div>
                    </div>
                    <span className="text-gray-300 text-base">2 anos</span>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-100 mb-4 text-lg">Resultado após 2 anos:</h4>
                    <ul className="space-y-3 text-gray-200 text-base">
                      <li className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>Ainda na faixa branca</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>Técnicas incorretas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>Sem disciplina mental</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>Desmotivação constante</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Com a Escola */}
            <Card className="bg-gray-900 border border-green-500/30 hover:border-green-400 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-3">COM NOSSA ESCOLA</h3>
                  <p className="text-lg text-gray-200">Metodologia SKIF Japan</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                      {beltProgression.slice(0, 5).map((belt, index) => (
                        <div key={index} className={`w-5 h-5 ${belt.color} rounded-full border`}></div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-700 rounded-full">
                        <div className="h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    <span className="text-green-400 text-base">2 anos</span>
                  </div>

                  <div className="bg-green-900/20 p-6 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-4 text-lg">Resultado após 2 anos:</h4>
                    <ul className="space-y-3 text-gray-100 text-base">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Faixa Verde ou superior</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Técnicas perfeitas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Disciplina mental forte</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Motivação constante</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Belt Progression */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8">Sua Progressão na Escola Marcelo Matos</h3>

            <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
              {beltProgression.map((belt, index) => (
                <button
                  key={index}
                  onClick={() => handleBeltChange(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-full transition-all duration-300 ${
                    selectedBelt === index ? "ring-4 ring-red-500 scale-110" : "hover:scale-105"
                  } ${belt.color}`}
                  aria-label={belt.name}
                ></button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div
                className={`relative transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                } flex justify-center order-2 md:order-1`}
              >
                <Image
                  src={beltProgression[selectedBelt].image || "/placeholder.svg"}
                  alt={beltProgression[selectedBelt].name}
                  width={300}
                  height={450}
                  className="md:w-[400px] md:h-[600px] rounded-lg shadow-2xl shadow-red-500/50"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/60 to-red-600/60 rounded-xl blur-md -z-10"></div>
              </div>

              <div
                className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"} space-y-6 order-1 md:order-2`}
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevBelt}
                    disabled={selectedBelt === 0}
                    className={`p-3 rounded-full ${
                      selectedBelt === 0 ? "text-gray-600" : "text-white hover:bg-gray-800"
                    }`}
                    aria-label="Faixa anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <h4 className="text-2xl md:text-3xl font-bold text-center">{beltProgression[selectedBelt].name}</h4>
                  <button
                    onClick={nextBelt}
                    disabled={selectedBelt === beltProgression.length - 1}
                    className={`p-3 rounded-full ${
                      selectedBelt === beltProgression.length - 1 ? "text-gray-600" : "text-white hover:bg-gray-800"
                    }`}
                    aria-label="Próxima faixa"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <Badge
                    className={`${
                      selectedBelt === 0
                        ? "bg-white text-gray-800"
                        : selectedBelt === 1
                          ? "bg-yellow-500 text-yellow-900"
                          : selectedBelt === 2
                            ? "bg-orange-600 text-white"
                            : selectedBelt === 3
                              ? "bg-emerald-600 text-white"
                              : selectedBelt === 4
                                ? "bg-violet-600 text-white"
                                : selectedBelt === 5
                                  ? "bg-yellow-800 text-white"
                                  : "bg-gray-900 text-white"
                    } px-4 py-2 text-base`}
                  >
                    {beltProgression[selectedBelt].time}
                  </Badge>
                </div>

                <p className="text-gray-100 text-lg leading-relaxed">{beltProgression[selectedBelt].description}</p>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h5 className="font-bold text-white mb-4 text-lg">Habilidades desenvolvidas:</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {beltProgression[selectedBelt].skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-100 text-base">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedBelt < beltProgression.length - 1 && (
                  <div className="text-center">
                    <Button
                      onClick={nextBelt}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg group text-lg"
                    >
                      Próximo nível
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              TRANSFORMAÇÃO COMPLETA
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Um espaço para quem quer <span className="text-red-500">evoluir</span>
            </h2>
            <p className="text-xl text-gray-200">no corpo, na mente e no espírito</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-gray-900 border border-gray-700 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-500 mb-4">{benefit.title}</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Sensei Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              EXCELÊNCIA E TRADIÇÃO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Por que escolher a <span className="text-red-500">Escola Marcelo Matos?</span>
            </h2>
            <p className="text-xl text-gray-200">Compromisso sério com você, com a tradição e com a excelência</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/sensei-marcelo-matos.jpg?height=500&width=400&text=Sensei+Marcelo+Matos"
                alt="Sensei Marcelo Matos"
                width={400}
                height={500}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-red-500">🥋 Sensei Marcelo Matos</h3>
                <p className="text-xl text-gray-100 mb-8">
                  Com mais de 30 anos dedicados ao Karate, referência em ensino responsável e humano.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Faixa Preta 1º Dan - SKIF Japan",
                  "Praticante desde 1989 (35+ anos)",
                  "Preparado em Primeiros Socorros",
                  "Faixa Azul Jiu-jitsu, Amarela Judô",
                  "Bacharelando Educação Física",
                  "Discípulo do Sensei Furusho",
                  "Supervisão Sensei Elcio Pinto (6º Dan)",
                ].map((credential, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-100 text-lg">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-red-500">
                <blockquote className="text-xl italic text-gray-100 mb-4">
                  "Mais do que formar atletas, meu propósito é formar pessoas melhores: mais fortes, disciplinadas e
                  equilibradas."
                </blockquote>
                <cite className="text-red-400 font-bold text-lg">— Sensei Marcelo Matos</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              HISTÓRIAS DE SUCESSO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              O que dizem nossos <span className="text-red-500">alunos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Comecei para melhorar minha saúde, mas encontrei muito mais: autoconfiança, foco e um ambiente acolhedor.",
                author: "André, 34 anos",
              },
              {
                text: "Meu filho era tímido e inseguro. Agora é determinado, respeitoso e feliz com o Karate.",
                author: "Patrícia, mãe do Pedro",
              },
              {
                text: "Cada treino é uma oportunidade de aprender e evoluir. Me sinto acolhido e desafiado ao mesmo tempo.",
                author: "Carlos, 27 anos",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900 border border-gray-700 hover:border-red-500/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-100 italic mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="font-bold text-white text-lg">{testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-200">Aqui, cada história importa. Cada conquista é celebrada.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">
            O seu próximo passo começa <span className="text-black">agora</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              "Aprender uma arte marcial tradicional reconhecida mundialmente",
              "Fortalecer corpo e mente com metodologia comprovada",
              "Integrar uma comunidade que inspira e transforma",
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white mx-auto mb-4" />
                <p className="text-white leading-relaxed text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl font-bold mb-8 text-white">Este é o seu momento!</p>

          <div className="w-full max-w-md mx-auto mb-12">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold w-full h-16 text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 group"
              onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span>AULA EXPERIMENTAL</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-sm font-normal">100% GRATUITA!</span>
              </div>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", text: "Preencha o formulário e agende sua aula — é gratuita e sem compromisso" },
              { step: "2", text: "Venha conhecer nosso espaço e participar de uma aula real" },
              { step: "3", text: "Sinta-se à vontade para seguir a sua jornada no nosso Dojo" },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <p className="text-white leading-relaxed text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-6 px-4 py-2 text-sm">
              TIRE SUAS DÚVIDAS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Perguntas frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
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
                  "✅ Sim. Metodologia segura, respeitando o desenvolvimento motor e emocional, com preparação em Primeiros Socorros.",
              },
              {
                question: "Qual é a idade mínima para treinar?",
                answer: "✅ A partir dos 4 anos. Começar cedo desenvolve disciplina e autoconfiança.",
              },
              {
                question: "O que é o Karate Shotokan?",
                answer:
                  "✅ Um dos estilos mais tradicionais do Karate, com ênfase em técnica, disciplina e filosofia. Seguimos a metodologia SKIF Japan.",
              },
              {
                question: "Como faço para agendar a aula experimental?",
                answer:
                  "✅ É simples! Clique no botão, preencha seus dados e entraremos em contato para confirmar seu horário.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800 rounded-lg px-8 border-0">
                <AccordionTrigger className="text-left hover:no-underline hover:text-red-400 font-semibold py-8 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-100 leading-relaxed pb-8 text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 lg:py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-900/20"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Sua jornada começa com um passo.
            <span className="block text-red-500 mt-2">O próximo é seu!</span>
          </h2>

          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Na Escola Marcelo Matos Karate, você encontra um ambiente seguro, acolhedor e inspirador para evoluir. Cada
            treino é uma oportunidade de ser mais forte, mais saudável e mais equilibrado.
          </p>

          <div className="w-full max-w-md mx-auto mb-16">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold w-full h-16 text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 group"
              onClick={() => window.open("https://wa.me/5521999045826", "_blank")}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span>AULA EXPERIMENTAL</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-sm font-normal">GRATUITA AGORA!</span>
              </div>
            </Button>
          </div>

          <p className="text-xl text-gray-300 mb-16">Venha fazer parte da nossa família!</p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500/30 transition-colors">
              <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-3 text-white text-lg">Endereço</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Casa dos Poveiros
                <br />
                Rua do Bispo, 302
                <br />
                Tijuca, Rio de Janeiro - RJ
                <br />
                CEP: 20261-068
              </p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500/30 transition-colors">
              <Phone className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-3 text-white text-lg">WhatsApp</h3>
              <a
                href="https://wa.me/5521999045826"
                className="text-gray-200 hover:text-red-400 transition-colors text-base"
              >
                +55 21 99904-5826
              </a>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500/30 transition-colors md:col-span-2 lg:col-span-1">
              <Instagram className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold mb-3 text-white text-lg">Instagram</h3>
              <a
                href="https://instagram.com/marcelomatoskarate"
                className="text-gray-200 hover:text-red-400 transition-colors text-base"
              >
                @marcelomatoskarat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5521999045826"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="w-8 h-8" color="white" />
      </a>
    </div>
  )
}
