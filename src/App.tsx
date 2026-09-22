/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Droplets,
  Heart,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageCircleHeart,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  X,
  ArrowRight,
  ExternalLink,
  Award,
  Download
} from 'lucide-react';

// Imported high-fidelity generated images
import mariaPortrait from './assets/images/maria_helena_portrait_1790112580363.jpg';
import presencialImg from './assets/images/presencial_consultation_1790112591264.jpg';
import onlineImg from './assets/images/online_consultation_1790112600345.jpg';
import balancedFoodImg from './assets/images/balanced_fresh_food_1790112608812.jpg';

// WhatsApp links from the profile
const WHATSAPP_PRESENCIAL = "https://wa.link/h06xi8";
const WHATSAPP_ONLINE = "https://wa.link/hxzvpm";
const INSTAGRAM_URL = "https://www.instagram.com/maria.helena_nutri";
const EMAIL_CONTACT = "mariahelenasouzareis7@gmail.com";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive Hydration Calculator State
  const [userWeight, setUserWeight] = useState<number>(68);
  const [activityLevel, setActivityLevel] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [activeTestimonialTab, setActiveTestimonialTab] = useState<'all' | 'presencial' | 'online'>('all');

  const weightInputId = useId();

  // Water calculation formula:
  // Low: 35ml/kg, Moderate: 40ml/kg, High: 45ml/kg
  const calculateWaterGoal = () => {
    const factor = activityLevel === 'low' ? 35 : activityLevel === 'moderate' ? 40 : 45;
    const totalMl = Math.round((userWeight || 60) * factor);
    const bottles500ml = (totalMl / 500).toFixed(1);
    return { totalMl, bottles500ml };
  };

  const waterResult = calculateWaterGoal();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_CONTACT);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#metodologia' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const differentials = [
    {
      icon: HeartHandshake,
      title: 'Sem Dietas Restritivas',
      description:
        'Esqueça a culpa ao comer pão, doces ou participar de jantares com amigos. Você vai aprender a ter flexibilidade, equilíbrio e autonomia alimentar.'
    },
    {
      icon: Sparkles,
      title: 'Plano 100% Personalizado',
      description:
        'Nada de cardápios prontos de gaveta. Seu plano é construído com você, considerando sua rotina corrida, orçamento e preferências reais.'
    },
    {
      icon: MessageCircleHeart,
      title: 'Acompanhamento Contínuo',
      description:
        'Canal aberto direto no WhatsApp entre as consultas para tirar dúvidas de supermercado, restaurantes ou qualquer desafio da sua semana.'
    },
    {
      icon: Users,
      title: 'Adequado à Rotina Familiar',
      description:
        'Estratégias fáceis e receitas práticas para que você não precise cozinhar duas refeições diferentes em casa. Nutrição que une a família.'
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Anamnese Completa & Escuta Ativa',
      subtitle: 'Entendendo sua história única',
      desc: 'Mapeamento profundo do seu histórico de saúde, exames laboratoriais, rotina de sono, níveis de estresse e, principalmente, sua relação com a comida.'
    },
    {
      step: '02',
      title: 'Plano Alimentar Individualizado',
      subtitle: 'Construção conjunta e viável',
      desc: 'Criamos um planejamento alimentar claro, saboroso e prático, com opções de substituições inteligentes e receitas descomplicadas para o seu dia a dia.'
    },
    {
      step: '03',
      title: 'Acompanhamento & Evolução Contínua',
      subtitle: 'Constância sem neuras',
      desc: 'Monitoramento da sua evolução, suporte pelo WhatsApp e consultas de retorno para ajustar metas, superar platôs e celebrar cada conquista.'
    }
  ];

  const testimonials = [
    {
      name: 'Camila Silveira',
      role: 'Advogada · Paciente Presencial',
      type: 'presencial',
      quote:
        'Eu achava que precisava cortar o pão e o arroz para emagrecer. Com a Maria Helena, perdi 9kg em 5 meses comendo de verdade, sem passar fome e sem a loucura que eu vivia antes. Minha autoestima voltou!',
      result: '-9kg com sustentabilidade'
    },
    {
      name: 'Juliana Mendes',
      role: 'Empresária · Paciente Online (Lisboa)',
      type: 'online',
      quote:
        'Moro fora do Brasil e a consulta online foi impecável! O suporte no WhatsApp me salvou nas semanas mais difíceis. Minha digestão melhorou 100% e hoje tenho uma energia surreal para trabalhar e treinar.',
      result: 'Disposição & saúde intestinal'
    },
    {
      name: 'Ricardo Prado',
      role: 'Engenheiro · Paciente Presencial',
      type: 'presencial',
      quote:
        'Fiz a bioimpedância na consulta presencial e vi a evolução mês a mês. O plano é tão prático que não atrapalhou em nada minhas viagens a trabalho. Melhor investimento que fiz para minha saúde.',
      result: 'Redução de gordura corporal e ganho de massa'
    },
    {
      name: 'Beatriz Fonseca',
      role: 'Médica · Paciente Online',
      type: 'online',
      quote:
        'Minha rotina de plantões é caótica. A Maria Helena adaptou o cardápio exatamente ao que eu conseguia levar na marmita ou pedir. Pela primeira vez na vida sinto paz com a minha alimentação.',
      result: 'Paz com a comida e constância'
    }
  ];

  const faqs = [
    {
      q: 'Como funciona a Consulta Online?',
      a: 'A consulta online acontece por videochamada individual (Google Meet ou Zoom), com a mesma duração e profundidade da presencial. Analisamos sua rotina, histórico e exames. Você recebe todo o material no seu celular e tem acesso ao suporte contínuo via WhatsApp.'
    },
    {
      q: 'O plano alimentar é entregue na hora?',
      a: 'Sim! Durante a própria consulta, nós alinhamos os pilares do plano juntos para que ele seja 100% factível. O documento final completo e detalhado, com receitas e guia de compras, é enviado no mesmo dia ou em até 24h úteis.'
    },
    {
      q: 'Você aceita plano ou convênio de saúde?',
      a: 'Os atendimentos são exclusivamente particulares, o que garante tempo de consulta dedicado, escuta aprofundada e acompanhamento próximo. No entanto, fornecemos recibo detalhado com CRM/CRN para que você solicite reembolso junto ao seu plano de saúde.'
    },
    {
      q: 'Preciso parar de comer o que eu mais gosto?',
      a: 'De forma alguma! A base da minha metodologia é a nutrição comportamental e flexível. Você aprenderá a incluir suas comidas favoritas com consciência e prazer, sem sabotar seus objetivos.'
    },
    {
      q: 'Com que frequência acontecem as consultas de acompanhamento?',
      a: 'Geralmente os retornos ocorrem a cada 30 ou 45 dias, dependendo do objetivo e do momento de cada paciente. Entre as consultas, você conta com suporte direto no WhatsApp para ajustes rápidos e dúvidas.'
    },
    {
      q: 'O que está incluso na Consulta Presencial?',
      a: 'Inclui anamnese completa, avaliação física com bioimpedância e medidas corporais detalhadas, elaboração do plano individualizado, lista de compras, orientações de receitas e suporte próximo via WhatsApp.'
    }
  ];

  const filteredTestimonials = activeTestimonialTab === 'all'
    ? testimonials
    : testimonials.filter(t => t.type === activeTestimonialTab);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3531] relative">
      {/* 1. TOP BAR / NAVBAR (Strict 3-zone contract) */}
      <header className="sticky top-0 z-40 w-full glass-nav border-b border-[#E8E4DC]/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-2xl sm:text-2xl font-serif font-bold tracking-tight text-[#2C3531] hover:text-[#7E9777] transition-colors"
          >
            Maria Helena <span className="font-sans text-xs uppercase tracking-widest text-[#7E9777] font-semibold ml-1.5">Nutri</span>
          </a>

          {/* Zone 2: 5 clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#424E48]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C87D65] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C87D65] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/download/maria-helena-nutri.zip"
              download="maria-helena-nutri.zip"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#2C3531] bg-white border border-[#E8E4DC] hover:border-[#7E9777] hover:bg-[#F2F5F1] transition-all shadow-xs"
              title="Baixar arquivo ZIP completo pronto para VS Code e Vercel"
            >
              <Download className="w-3.5 h-3.5 text-[#7E9777]" />
              <span>Baixar ZIP</span>
            </a>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C87D65] hover:bg-[#B56B53] shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar Consulta
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="lg:hidden p-2 text-[#2C3531] hover:text-[#7E9777] rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E8E4DC] bg-[#FDFBF7] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#2C3531]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#C87D65] transition-colors border-b border-[#E8E4DC]/40"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={WHATSAPP_PRESENCIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#7E9777] hover:bg-[#6A8264] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Agendar Consulta Presencial
                </a>
                <a
                  href={WHATSAPP_ONLINE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#2C3531] border border-[#C87D65] hover:bg-[#C87D65]/10 transition-colors"
                >
                  <Video className="w-4 h-4 text-[#C87D65]" />
                  Agendar Consulta Online
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
        {/* Soft background ambient gradient accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#8A9A86]/10 via-[#F7F4EF]/40 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Quiet unboxed text metadata */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7E9777] uppercase tracking-wider mb-3">
                <span>Nutrição Clínica & Comportamental</span>
                <span aria-hidden="true">·</span>
                <span>Atendimento Presencial & Online</span>
              </div>

              {/* Impactful Headline with balanced wrap */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#2C3531] leading-[1.18] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
                Conquiste resultados reais com hábitos práticos e <span className="italic font-normal text-[#C87D65]">sem neuras.</span>
              </h1>

              {/* Humanized Subtitle */}
              <p className="text-base sm:text-lg text-[#55635D] leading-relaxed mb-8 max-w-xl">
                Um acompanhamento nutricional acolhedor e baseado na sua rotina real. 
                Esqueça restrições radicais e terrorismo alimentar: aprenda a comer com prazer, autonomia e constância para viver sua melhor versão.
              </p>

              {/* 2 Primary Action CTAs */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                {/* CTA 1: Presencial (Highlighted Terracotta) */}
                <a
                  href={WHATSAPP_PRESENCIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C87D65] hover:bg-[#B56B53] shadow-md hover:shadow-lg transition-all duration-200 pulse-cta"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Consulta Presencial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* CTA 2: Online (Secondary Outline with Sage Accent) */}
                <a
                  href={WHATSAPP_ONLINE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#2C3531] bg-white border border-[#8A9A86]/70 hover:border-[#7E9777] hover:bg-[#F2F5F1] shadow-xs hover:shadow-sm transition-all duration-200"
                >
                  <Video className="w-4 h-4 text-[#7E9777]" />
                  <span>Consulta Online</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#55635D]" />
                </a>
              </div>

              {/* Quiet Social Proof & Trust Badges (Zero-pill text) */}
              <div className="pt-4 border-t border-[#E8E4DC] w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#63706A]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9777]" />
                  <span>+500 pacientes transformados</span>
                </div>
                <span className="hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9777]" />
                  <span>Planos 100% individualizados</span>
                </div>
                <span className="hidden sm:inline" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9777]" />
                  <span>Suporte direto no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Editorial Visual Anchor */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Decorative Organic Backdrop Shape */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#8A9A86]/20 via-[#F7F4EF] to-[#C87D65]/15 rounded-[2.5rem] transform rotate-1 -z-10" />

                {/* Main Photo Card */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-xl border border-[#E8E4DC]/80">
                  <img
                    src={mariaPortrait}
                    alt="Nutricionista Maria Helena em seu consultório acolhedor"
                    className="w-full h-auto object-cover aspect-[3/4]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient Overlay at the base for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Photo caption / badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-base font-serif font-medium">Maria Helena</p>
                    <p className="text-xs text-white/90">Nutricionista Clínica & Funcional</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge */}
                <div className="absolute -bottom-6 -left-3 sm:-left-6 glass-card p-3.5 sm:p-4 rounded-2xl border border-white/80 shadow-lg max-w-[240px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#7E9777]/15 flex items-center justify-center text-[#7E9777] shrink-0">
                      <Heart className="w-5 h-5 fill-[#7E9777]/20" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C3531]">Sem restrições radicais</p>
                      <p className="text-[11px] text-[#63706A]">Nutrição com leveza e empatia</p>
                    </div>
                  </div>
                </div>

                {/* Floating Online Badge */}
                <div className="absolute -top-3 -right-2 sm:-right-4 glass-card px-3.5 py-2 rounded-full border border-white/80 shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-[#2C3531]">Atendimento no Brasil & Mundo</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS / PILARES DO ATENDIMENTO */}
      <section id="diferenciais" className="py-16 md:py-20 bg-[#F7F4EF]/70 border-y border-[#E8E4DC]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7E9777]">Pilares da Metodologia</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-4" style={{ textWrap: 'balance' }}>
              Por que o acompanhamento com Maria Helena é diferente?
            </h2>
            <p className="text-sm sm:text-base text-[#55635D]">
              O objetivo não é apenas prescrever calorias, mas transformar a forma como você se relaciona com a comida e com o seu bem-estar diário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#E8E4DC] card-hover flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7E9777]/10 flex items-center justify-center text-[#7E9777] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#2C3531] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#55635D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DUAL DE SERVIÇOS (PRESENCIAL VS. ONLINE) */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D65]">Escolha o Seu Formato</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-4" style={{ textWrap: 'balance' }}>
              Dois caminhos, o mesmo rigor e acolhimento
            </h2>
            <p className="text-sm sm:text-base text-[#55635D]">
              Seja no aconchego do consultório ou no conforto da sua casa, você terá um plano estratégico pensado para as suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: CONSULTA PRESENCIAL */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={presencialImg}
                    alt="Consultório acolhedor de nutrição presencial"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#7E9777] flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    Atendimento Presencial
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#2C3531] mb-2">
                    Consulta Presencial
                  </h3>
                  <p className="text-sm text-[#55635D] mb-6 leading-relaxed">
                    Ideal para quem deseja o contato próximo, a experiência do consultório e uma avaliação física e corporal completa e detalhada.
                  </p>

                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7E9777]/15 flex items-center justify-center text-[#7E9777] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Bioimpedância & antropometria:</strong> percentual de gordura, massa magra e circunferências.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7E9777]/15 flex items-center justify-center text-[#7E9777] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Plano alimentar discutido e alinhado:</strong> montado com você na consulta para máxima adesão.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7E9777]/15 flex items-center justify-center text-[#7E9777] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Guia de compras e substituições:</strong> materiais visuais para facilitar suas idas à feira e ao mercado.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7E9777]/15 flex items-center justify-center text-[#7E9777] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Suporte via WhatsApp:</strong> canal direto para tirar dúvidas do dia a dia até o retorno.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0">
                <a
                  href={WHATSAPP_PRESENCIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#7E9777] hover:bg-[#6A8264] transition-all duration-200 shadow-sm hover:shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Presencial no WhatsApp</span>
                </a>
                <p className="text-center text-xs text-[#7B8881] mt-2.5">
                  Vagas limitadas para atendimento presencial este mês
                </p>
              </div>
            </div>

            {/* Card 2: CONSULTA ONLINE */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C87D65]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={onlineImg}
                    alt="Consulta online de nutrição com atendimento global"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#C87D65] flex items-center gap-1.5 shadow-xs">
                    <Video className="w-3.5 h-3.5" />
                    Atendimento Online (Brasil & Exterior)
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#2C3531] mb-2">
                    Consulta Online
                  </h3>
                  <p className="text-sm text-[#55635D] mb-6 leading-relaxed">
                    A mesma profundidade e empatia do consultório com a praticidade de ser atendido onde você estiver, sem trânsito ou deslocamento.
                  </p>

                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C87D65]/15 flex items-center justify-center text-[#C87D65] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Videochamada exclusiva (Google Meet / Zoom):</strong> conversa minuciosa de cerca de 1 hora sem pressa.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C87D65]/15 flex items-center justify-center text-[#C87D65] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Análise de fotos, medidas e exames:</strong> protocolo prático de autoavaliação guiada.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C87D65]/15 flex items-center justify-center text-[#C87D65] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Material digital completo:</strong> receitas práticas, lista de compras e planner no seu celular.
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C87D65]/15 flex items-center justify-center text-[#C87D65] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#424E48]">
                        <strong>Acompanhamento próximo no WhatsApp:</strong> suporte direto comigo para sanar dúvidas sempre que precisar.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0">
                <a
                  href={WHATSAPP_ONLINE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#C87D65] hover:bg-[#B56B53] transition-all duration-200 shadow-sm hover:shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Online no WhatsApp</span>
                </a>
                <p className="text-center text-xs text-[#7B8881] mt-2.5">
                  Horários flexíveis para quem mora no Brasil ou exterior
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. METODOLOGIA / COMO FUNCIONA A CONSULTA */}
      <section id="metodologia" className="py-16 md:py-20 bg-[#F7F4EF]/70 border-t border-[#E8E4DC]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7E9777]">Passo a Passo</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-4" style={{ textWrap: 'balance' }}>
              Como funciona o seu acompanhamento
            </h2>
            <p className="text-sm sm:text-base text-[#55635D]">
              Um processo estruturado com começo, meio e consolidação de hábitos reais para a vida toda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#E8E4DC] relative flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="text-4xl font-serif font-bold text-[#7E9777]/30 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2C3531] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C87D65] uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-[#55635D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC]/60 flex items-center gap-2 text-xs text-[#7E9777] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Foco em autonomia</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VALOR AGREGADO / INTERATIVO: CALCULADORA DE HIDRATAÇÃO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#FDFBF7] to-[#F7F4EF] rounded-3xl p-6 sm:p-10 border border-[#E8E4DC] shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#7E9777]/15 text-[#7E9777] flex items-center justify-center mx-auto mb-3">
                <Droplets className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3531] mb-2">
                Descubra sua Meta Hídrica Ideal
              </h2>
              <p className="text-sm text-[#55635D]">
                A hidratação correta é a chave silenciosa para acelerar o metabolismo, diminuir a retenção de líquidos e controlar a ansiedade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-5">
                <div>
                  <label htmlFor={weightInputId} className="block text-xs font-semibold uppercase tracking-wider text-[#424E48] mb-2">
                    Seu Peso Atual: <span className="text-[#C87D65] font-bold text-sm">{userWeight} kg</span>
                  </label>
                  <input
                    id={weightInputId}
                    type="range"
                    min="40"
                    max="140"
                    value={userWeight}
                    onChange={(e) => setUserWeight(Number(e.target.value))}
                    className="w-full accent-[#7E9777] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#7B8881] mt-1">
                    <span>40 kg</span>
                    <span>90 kg</span>
                    <span>140 kg</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#424E48] mb-2">
                    Nível de Atividade Física
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['low', 'moderate', 'high'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setActivityLevel(lvl)}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                          activityLevel === lvl
                            ? 'bg-[#7E9777] text-white border-[#7E9777] shadow-xs'
                            : 'bg-white text-[#424E48] border-[#E8E4DC] hover:border-[#7E9777]'
                        }`}
                      >
                        {lvl === 'low' && 'Leve'}
                        {lvl === 'moderate' && 'Moderado'}
                        {lvl === 'high' && 'Intenso'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8E4DC] text-center shadow-xs">
                <p className="text-xs uppercase tracking-wider text-[#7B8881] mb-1">
                  Recomendação Diária Estimada
                </p>
                <div className="text-4xl font-serif font-bold text-[#7E9777] my-2">
                  {(waterResult.totalMl / 1000).toFixed(2)} <span className="text-xl font-sans font-normal text-[#2C3531]">Litros/dia</span>
                </div>
                <p className="text-xs text-[#55635D] mb-4">
                  Aproximadamente <strong>{waterResult.bottles500ml} garrafinhas</strong> de 500ml distribuídas ao longo do seu dia.
                </p>
                <div className="text-[12px] bg-[#F7F4EF] p-2.5 rounded-xl text-[#55635D] leading-relaxed">
                  💡 <strong>Dica da Nutri:</strong> Comece o dia com 400ml de água logo ao acordar e prefira chás claros sem açúcar caso tenha dificuldade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE MARIA HELENA & FILOSOFIA */}
      <section id="sobre" className="py-16 md:py-24 border-t border-[#E8E4DC]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual element */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E8E4DC] shadow-lg">
                <img
                  src={balancedFoodImg}
                  alt="Alimentação saudável, colorida e equilibrada sem terrorismo nutricional"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 p-4 bg-[#F7F4EF] rounded-2xl border border-[#E8E4DC] flex items-center gap-3">
                <Award className="w-8 h-8 text-[#7E9777] shrink-0" />
                <p className="text-xs text-[#424E48] leading-tight">
                  Atendimento pautado em evidências científicas, ética profissional e nutrição humanizada.
                </p>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E9777]">Conheça Sua Nutricionista</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-6" style={{ textWrap: 'balance' }}>
                "Comer bem deve ser fonte de prazer, energia e vida — nunca de culpa."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#55635D] leading-relaxed">
                <p>
                  Olá! Sou <strong>Maria Helena</strong>, nutricionista apaixonada por descomplicar a relação das pessoas com a comida. 
                  Ao longo dos anos atendendo centenas de pacientes, percebi que a maior barreira para ter saúde não é a falta de força de vontade, 
                  mas sim o excesso de regras mirabolantes que ninguém consegue manter.
                </p>
                <p>
                  Minha abordagem une a ciência da nutrição à compreensão real do comportamento humano. 
                  Isso significa que o seu planejamento respeita suas preferências gastronômicas, seu tempo diário e seus momentos sociais.
                </p>
                <p>
                  Seja na <strong>consulta presencial</strong> com bioimpedância e acolhimento direto, ou na <strong>consulta online</strong> com flexibilidade geográfica total, 
                  meu compromisso é caminhar ao seu lado para que você alcance seus objetivos com paz, saúde e consistência.
                </p>
              </div>

              {/* Direct links */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#2C3531] border border-[#E8E4DC] hover:border-[#7E9777] hover:bg-[#F2F5F1] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C87D65]" />
                  <span>@maria.helena_nutri</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#2C3531] border border-[#E8E4DC] hover:border-[#7E9777] hover:bg-[#F2F5F1] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#7E9777]" />
                  <span>{copiedEmail ? 'Email copiado!' : EMAIL_CONTACT}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL / DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 md:py-24 bg-[#F7F4EF]/70 border-t border-[#E8E4DC]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D65]">Resultados Reais</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-4" style={{ textWrap: 'balance' }}>
              Histórias de quem aprendeu a comer sem culpa
            </h2>
            <p className="text-sm sm:text-base text-[#55635D]">
              Veja a experiência de pacientes que conquistaram seus objetivos com autonomia e tranquilidade.
            </p>

            {/* Filter Tabs */}
            <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-[#E8E4DC] mt-6 shadow-xs">
              <button
                onClick={() => setActiveTestimonialTab('all')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeTestimonialTab === 'all'
                    ? 'bg-[#7E9777] text-white shadow-xs'
                    : 'text-[#55635D] hover:text-[#2C3531]'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveTestimonialTab('presencial')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeTestimonialTab === 'presencial'
                    ? 'bg-[#7E9777] text-white shadow-xs'
                    : 'text-[#55635D] hover:text-[#2C3531]'
                }`}
              >
                Presencial
              </button>
              <button
                onClick={() => setActiveTestimonialTab('online')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeTestimonialTab === 'online'
                    ? 'bg-[#7E9777] text-white shadow-xs'
                    : 'text-[#55635D] hover:text-[#2C3531]'
                }`}
              >
                Online
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#E8E4DC] flex flex-col justify-between card-hover shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-[#7E9777] uppercase tracking-wider">
                      {item.result}
                    </div>
                    <span className="text-[11px] text-[#7B8881] bg-[#F7F4EF] px-2.5 py-1 rounded-full">
                      {item.type === 'presencial' ? 'Consulta Presencial' : 'Consulta Online'}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#424E48] italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DC]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7E9777]/15 text-[#7E9777] font-serif font-bold flex items-center justify-center text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2C3531]">{item.name}</p>
                    <p className="text-xs text-[#7B8881]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7E9777]">Tire Suas Dúvidas</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3531] mt-2 mb-4" style={{ textWrap: 'balance' }}>
              Perguntas Frequentes
            </h2>
            <p className="text-sm sm:text-base text-[#55635D]">
              Transparência completa sobre como acontecem os atendimentos, valores e metodologia.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E8E4DC] rounded-2xl overflow-hidden transition-all bg-[#FDFBF7]"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F4EF]/50 transition-colors cursor-pointer"
                  >
                    <span className="font-serif font-semibold text-base sm:text-lg text-[#2C3531]">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C87D65]' : 'text-[#7B8881]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#55635D] leading-relaxed border-t border-[#E8E4DC]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prompt to WhatsApp if question is not in FAQ */}
          <div className="mt-10 p-6 rounded-2xl bg-[#F7F4EF] border border-[#E8E4DC] text-center">
            <p className="text-sm text-[#424E48] mb-3">
              Ficou com alguma dúvida específica sobre seu caso ou disponibilidade de agenda?
            </p>
            <a
              href={WHATSAPP_PRESENCIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C87D65] hover:text-[#B56B53] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Converse comigo diretamente pelo WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#7E9777]/90 via-[#6B8E23]/90 to-[#4F6848] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-xs">
            Dê o Primeiro Passo Hoje
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight" style={{ textWrap: 'balance' }}>
            Pronta para conquistar resultados duradouros sem sofrimento?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Agende sua consulta presencial ou online e tenha um plano desenhado exclusivamente para a sua rotina e seus objetivos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_PRESENCIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-[#2C3531] bg-[#FDFBF7] hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-[#7E9777]" />
              <span>Agendar Consulta Presencial</span>
            </a>

            <a
              href={WHATSAPP_ONLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#C87D65] hover:bg-[#B56B53] shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Video className="w-4 h-4 text-white" />
              <span>Agendar Consulta Online</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#2C3531] text-[#E8E4DC] py-14 border-t border-[#3F4B45]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Wordmark & Bio */}
            <div className="md:col-span-2">
              <span className="text-2xl font-serif font-bold text-white">
                Maria Helena <span className="text-xs uppercase tracking-widest text-[#8A9A86] font-sans font-semibold ml-1">Nutricionista</span>
              </span>
              <p className="text-xs sm:text-sm text-[#A7B4AD] mt-3 max-w-md leading-relaxed">
                Resultados reais com hábitos alimentares práticos e sem neuras. Atendimento nutricional humanizado para quem busca saúde, estética e qualidade de vida.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Maria Helena Nutricionista"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C87D65] text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copiar email de contato"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#7E9777] text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Copiar email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A9A86] mb-4">
                Navegação
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7B4AD]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contato & Agendamento */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A9A86] mb-4">
                Agendamento
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#A7B4AD]">
                <li>
                  <a
                    href={WHATSAPP_PRESENCIAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8A9A86]" />
                    Consulta Presencial
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_ONLINE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Video className="w-3.5 h-3.5 text-[#C87D65]" />
                    Consulta Online
                  </a>
                </li>
                <li className="pt-2 text-xs text-[#8A9A86]">
                  {EMAIL_CONTACT}
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Ethics */}
          <div className="pt-8 border-t border-[#3F4B45] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9A86]">
            <p>
              © {new Date().getFullYear()} Maria Helena Nutricionista. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#7B8881]">
              Atendimento em conformidade com o Código de Ética do Nutricionista (CFN/CRN).
            </p>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP QUICK CONVERSION TRIGGER (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="group relative">
          <button
            onClick={() => setBookingModalOpen(true)}
            aria-label="Abrir opções de agendamento"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-xs font-semibold hidden sm:inline whitespace-nowrap">
              Agendar no WhatsApp
            </span>
          </button>
        </div>
      </div>

      {/* 13. BOOKING MODAL (PRESENCIAL OU ONLINE) */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E8E4DC] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#7B8881] hover:text-[#2C3531] rounded-full hover:bg-[#F7F4EF] transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E9777]">
                Atendimento Personalizado
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#2C3531] mt-1 mb-2">
                Qual consulta você prefere?
              </h3>
              <p className="text-xs sm:text-sm text-[#55635D]">
                Escolha o formato ideal para a sua rotina e fale diretamente no WhatsApp:
              </p>
            </div>

            <div className="space-y-3.5">
              <a
                href={WHATSAPP_PRESENCIAL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBookingModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-[#7E9777]/30 hover:border-[#7E9777] bg-[#FDFBF7] hover:bg-[#F2F5F1] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7E9777]/15 text-[#7E9777] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#2C3531] group-hover:text-[#7E9777] transition-colors">
                      Consulta Presencial
                    </p>
                    <p className="text-xs text-[#7B8881]">
                      Avaliação física completa & bioimpedância
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7E9777] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={WHATSAPP_ONLINE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBookingModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-[#C87D65]/30 hover:border-[#C87D65] bg-[#FDFBF7] hover:bg-[#C87D65]/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C87D65]/15 text-[#C87D65] flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#2C3531] group-hover:text-[#C87D65] transition-colors">
                      Consulta Online
                    </p>
                    <p className="text-xs text-[#7B8881]">
                      Atendimento por vídeo no Brasil ou exterior
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C87D65] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-center text-[11px] text-[#7B8881] mt-6">
              Horários de atendimento: Segunda a Sexta, das 08h às 19h.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
