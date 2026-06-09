import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/gabotics-logo.png";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Bot,
  Plug,
  TrendingDown,
  Layers,
  LineChart,
  Search,
  Workflow,
  Code2,
  Brain,
  Rocket,
  CheckCircle2,
  Linkedin,
  Instagram,
  Send,
  ArrowRight,
  Database,
  PhoneCall,
  Calendar,
  Users,
  Headphones,
  CreditCard,
  Cog,
  ShieldCheck,
  Clock,
  BarChart3,
  Plus,
  Minus,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Gabotics | Agentes de IA e Automação para WhatsApp",
    meta: [
      { name: "description", content: "Agentes de IA e automação empresarial para WhatsApp com n8n e Supabase. Reduza custos operacionais e escale suas vendas com inteligência artificial." },
      { name: "keywords", content: "Inteligência Artificial, Agentes de IA, Automação Empresarial, WhatsApp Inteligente, IA para WhatsApp, n8n, Supabase, Evolution API, chatbot IA, SDR IA, automação de vendas, atendimento automatizado, IA para empresas" },
      { property: "og:title", content: "Gabotics | Agentes de IA e Automação para WhatsApp" },
      { property: "og:description", content: "Agentes de IA e automação empresarial para WhatsApp com n8n e Supabase. Reduza custos e escale resultados." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gabotics.com/" },
      { property: "og:image", content: "https://gabotics.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Gabotics | Agentes de IA e Automação para WhatsApp" },
      { name: "twitter:description", content: "Agentes de IA e automação empresarial para WhatsApp com n8n e Supabase." },
      { name: "twitter:image", content: "https://gabotics.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://gabotics.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Gabotics",
          url: "https://gabotics.com/",
          logo: "https://gabotics.com/android-chrome-512x512.png",
          description: "Agentes de IA, Automação Empresarial e WhatsApp Inteligente com n8n, Supabase e Evolution API.",
          sameAs: [
            "https://www.instagram.com/gabotics",
            "https://www.linkedin.com/company/gabotics",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Em quanto tempo a Gabotics implanta uma automação?", acceptedAnswer: { "@type": "Answer", text: "A maioria dos projetos vai do diagnóstico ao primeiro agente em produção em 2 a 4 semanas, usando metodologia Vibe Coding." } },
            { "@type": "Question", name: "A IA funciona dentro do WhatsApp da empresa?", acceptedAnswer: { "@type": "Answer", text: "Sim. Integramos via Evolution API ao WhatsApp oficial ou não-oficial, mantendo histórico, contatos e múltiplos atendentes." } },
            { "@type": "Question", name: "Posso integrar com meu CRM, ERP ou planilhas?", acceptedAnswer: { "@type": "Answer", text: "Sim. Com n8n e APIs REST integramos HubSpot, RD Station, Pipedrive, Bitrix, ERPs, Google Sheets, Notion e sistemas internos." } },
            { "@type": "Question", name: "Quais modelos de IA são usados?", acceptedAnswer: { "@type": "Answer", text: "Trabalhamos com OpenAI (GPT), Google Gemini e Anthropic Claude, escolhendo o modelo ideal para custo, latência e qualidade de cada caso." } },
            { "@type": "Question", name: "Meus dados ficam seguros?", acceptedAnswer: { "@type": "Answer", text: "Sim. Hospedamos em Supabase com RLS, criptografia em trânsito e em repouso, e seguimos boas práticas LGPD." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Casos de Uso", href: "#cases" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  const benefits = [
    { icon: Bot, title: "Atendimento 24/7 com IA", desc: "Responda clientes em segundos, sem fila e sem aumentar o time de suporte." },
    { icon: MessageSquare, title: "Vendas no WhatsApp", desc: "Qualifique, agende e feche reuniões com SDRs de IA no canal favorito do seu cliente." },
    { icon: Plug, title: "Integrações sem limite", desc: "CRM, ERP, planilhas, APIs e sistemas internos conversando em um único fluxo." },
    { icon: TrendingDown, title: "Reduza até 70% do custo operacional", desc: "Substitua tarefas manuais por agentes que trabalham todos os dias, sem pausa." },
    { icon: Layers, title: "Escale sem contratar", desc: "Atenda centenas de conversas simultâneas mantendo o tom da sua marca." },
    { icon: LineChart, title: "Resultados mensuráveis", desc: "Dashboards em tempo real com SLA, conversão, custo por lead e ROI." },
  ];

  const steps = [
    { icon: Search, title: "Diagnóstico", desc: "Entendemos seu negócio, dores e oportunidades de automação." },
    { icon: Workflow, title: "Arquitetura", desc: "Mapeamos processos e desenhamos a solução ideal de IA e automação." },
    { icon: Code2, title: "Vibe Coding", desc: "Construímos rápido com n8n, Supabase e APIs — sem perder qualidade." },
    { icon: Brain, title: "Treinamento de IA", desc: "Agentes treinados com seus dados, tom de voz e regras de negócio." },
    { icon: Rocket, title: "Operação contínua", desc: "Deploy, monitoramento, ajustes e evolução mês a mês." },
  ];

  const techGroups: { category: string; icon: typeof Brain; items: string[] }[] = [
    {
      category: "Inteligência Artificial",
      icon: Brain,
      items: ["OpenAI", "Gemini", "Claude"],
    },
    {
      category: "Automação & Orquestração",
      icon: Workflow,
      items: ["n8n", "Webhooks", "APIs REST"],
    },
    {
      category: "Backend & Dados",
      icon: Database,
      items: ["Supabase", "PostgreSQL", "Vector DB"],
    },
    {
      category: "Mensageria",
      icon: MessageSquare,
      items: ["Evolution API", "WhatsApp", "Telegram"],
    },
  ];

  const cases = [
    { icon: Users, title: "SDR de IA", desc: "Qualifica leads, faz follow-up e agenda reuniões 24/7 no WhatsApp.", tag: "Vendas" },
    { icon: Headphones, title: "Atendimento Inteligente", desc: "Resolve dúvidas com base na sua documentação, sem fila de espera.", tag: "Suporte" },
    { icon: Calendar, title: "Agendamento Automático", desc: "Marca reuniões integrando Google Calendar, Outlook e sua agenda interna.", tag: "Operação" },
    { icon: Database, title: "CRM Inteligente", desc: "Atualiza contatos, estágios e notas automaticamente após cada conversa.", tag: "CRM" },
    { icon: CreditCard, title: "Cobrança Automatizada", desc: "Notifica vencidos, envia boletos e concilia pagamentos sem intervenção.", tag: "Financeiro" },
    { icon: Cog, title: "Triagem de RH", desc: "Filtra candidatos, aplica testes e agenda entrevistas automaticamente.", tag: "RH" },
  ];

  const diferenciais = [
    "Especialistas em n8n e IA Generativa",
    "Integração nativa com WhatsApp via Evolution API",
    "Arquitetura escalável com Supabase e Postgres",
    "Vibe Coding: entrega em semanas, não meses",
    "Soluções sob medida (sem SaaS engessado)",
    "Suporte e evolução contínua mês a mês",
    "Dashboards de ROI e SLA em tempo real",
    "LGPD, RLS e boas práticas de segurança",
  ];

  const metrics = [
    { value: "24/7", label: "Operação contínua" },
    { value: "-70%", label: "Custo de atendimento" },
    { value: "<4s", label: "Tempo de resposta" },
    { value: "10x", label: "Capacidade de atendimento" },
  ];

  const segments = [
    "Imobiliárias",
    "Clínicas",
    "Escritórios",
    "E-commerce",
    "Startups",
    "Indústrias",
    "Educação",
    "Serviços B2B",
  ];

  const faqs = [
    { q: "Em quanto tempo vocês entregam a primeira automação?", a: "A maioria dos projetos vai do diagnóstico ao primeiro agente em produção em 2 a 4 semanas, usando nossa metodologia Vibe Coding." },
    { q: "A IA funciona dentro do WhatsApp da minha empresa?", a: "Sim. Integramos via Evolution API ao WhatsApp da sua empresa, mantendo histórico, contatos e múltiplos atendentes humanos no mesmo número." },
    { q: "Consigo integrar com meu CRM, ERP ou planilhas?", a: "Sim. Com n8n e APIs REST integramos HubSpot, RD Station, Pipedrive, Bitrix, ERPs próprios, Google Sheets, Notion, ClickUp e sistemas internos." },
    { q: "Quais modelos de IA vocês usam?", a: "Trabalhamos com OpenAI (GPT-4/5), Google Gemini e Anthropic Claude, escolhendo o modelo ideal por custo, latência e qualidade em cada etapa do fluxo." },
    { q: "Meus dados ficam seguros?", a: "Sim. Hospedamos em Supabase com Row Level Security, criptografia em trânsito e em repouso, segregação por cliente e boas práticas LGPD." },
    { q: "Vocês cobram por mensagem ou licença de SaaS?", a: "Não. Você é dono da automação. Cobramos projeto + mensalidade de operação, com custos previsíveis e sem lock-in." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-[#09DEDE]/15" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset} alt="Gabotics - IA e Automações" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-[#09DEDE] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="#contato">Falar com Especialista</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-20 hero-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,222,222,0.12),transparent_50%)] pointer-events-none" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#09DEDE]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B8B8]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#09DEDE]/30 bg-[#09DEDE]/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#09DEDE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#09DEDE]" />
              </span>
              <span className="text-xs text-[#09DEDE] font-medium tracking-wide uppercase">IA · Automação · WhatsApp</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] font-[Space_Grotesk]">
              Sua empresa atendendo, vendendo e operando com{" "}
              <span className="text-gradient">Agentes de IA 24/7</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Implantamos agentes de IA no WhatsApp e automações com n8n, Supabase e Evolution API. Reduza custo operacional, aumente conversão e escale sem contratar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Agendar diagnóstico gratuito <ArrowRight className="ml-1" /></a>
              </Button>
              <Button variant="cyan" size="lg" asChild>
                <a href="#cases">Ver casos de uso</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#09DEDE]" /> Go-live em 2 a 4 semanas</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#09DEDE]" /> LGPD &amp; RLS</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#09DEDE]" /> Sem lock-in de SaaS</div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroDashboard}
              alt="Dashboard Gabotics com fluxos n8n, conversas WhatsApp e agentes de IA"
              width={1280}
              height={960}
              className="relative rounded-2xl border border-[#09DEDE]/20 shadow-[0_30px_80px_-20px_rgba(9,222,222,0.4)]"
            />
          </div>
        </div>

        {/* Metrics strip */}
        <div className="relative max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient font-[Space_Grotesk]">{m.value}</div>
                <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Segments strip */}
      <section className="py-10 border-y border-[#09DEDE]/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Empresas que automatizamos</p>
          <div className="flex flex-wrap justify-center gap-2">
            {segments.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full text-xs font-medium bg-[#09DEDE]/5 border border-[#09DEDE]/20 text-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="solucoes" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">O que entregamos</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">
              Resultados concretos, não promessas <span className="text-gradient">de transformação digital</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada agente que entregamos tem KPI claro: mais leads, menos custo, mais reuniões marcadas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group relative p-6 rounded-2xl bg-card border border-[#09DEDE]/10 hover:border-[#09DEDE]/40 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(9,222,222,0.4)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <b.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Quero esses resultados <ArrowRight className="ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases (movido para cima de Como Funciona para impacto comercial) */}
      <section id="cases" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Casos de uso</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">
              Aplicações reais que <span className="text-gradient">geram receita</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Do primeiro lead à cobrança recebida — IA cuidando da operação.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="group p-6 rounded-2xl glass hover:border-[#09DEDE]/50 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#09DEDE]/10 border border-[#09DEDE]/30 text-[#09DEDE]">{c.tag}</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cyan" size="lg" asChild>
              <a href="#contato">Tenho um caso parecido <ArrowRight className="ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Metodologia</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Do diagnóstico ao agente em <span className="text-gradient">produção</span></h2>
            <p className="mt-4 text-muted-foreground">Do diagnóstico à operação inteligente em 5 passos.</p>
          </div>
          <div className="relative grid md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#09DEDE]/50 to-transparent" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto w-14 h-14 rounded-full bg-card border-2 border-[#09DEDE]/40 flex items-center justify-center glow">
                  <s.icon className="h-6 w-6 text-[#09DEDE]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-black text-xs font-bold flex items-center justify-center">{i + 1}</div>
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section id="tecnologias" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Stack</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Tecnologias de <span className="text-gradient">nível enterprise</span></h2>
            <p className="mt-4 text-muted-foreground">As mesmas ferramentas usadas por times de produto de classe mundial.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techGroups.map((g) => (
              <div
                key={g.category}
                className="group relative p-6 rounded-2xl glass hover:border-[#09DEDE]/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow">
                    <g.icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#09DEDE] uppercase tracking-wider">
                    {g.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#09DEDE]/5 border border-[#09DEDE]/20 text-foreground hover:bg-[#09DEDE]/15 hover:border-[#09DEDE]/50 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Diferenciais</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Por que escolher a <span className="text-gradient">Gabotics</span></h2>
            <p className="mt-4 text-muted-foreground">Especialistas em IA aplicada — não uma agência genérica de marketing.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {diferenciais.map((d) => (
              <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-[#09DEDE]/10">
                <CheckCircle2 className="h-5 w-5 text-[#09DEDE] shrink-0" />
                <span className="font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provas sociais / Resultados (placeholders) */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Resultados</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">O que nossos clientes <span className="text-gradient">colhem</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "+312%", desc: "Aumento em leads qualificados no WhatsApp após implantação do SDR de IA.", author: "Imobiliária — Grande São Paulo" },
              { metric: "-68%", desc: "Redução no custo de atendimento de primeiro nível com agente de suporte 24/7.", author: "SaaS B2B — Sul do Brasil" },
              { metric: "9x", desc: "Mais reuniões comerciais agendadas por mês com automação de follow-up.", author: "Consultoria — Nacional" },
            ].map((r) => (
              <div key={r.author} className="p-6 rounded-2xl glass">
                <BarChart3 className="h-5 w-5 text-[#09DEDE] mb-3" />
                <div className="text-4xl font-bold text-gradient font-[Space_Grotesk]">{r.metric}</div>
                <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/70">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Quem somos</p>
          <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Engenharia de IA para empresas que <span className="text-gradient">querem escalar</span></h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              A Gabotics nasceu para ajudar empresas a substituir tarefas manuais por agentes inteligentes — com foco em produtividade, conversão e custo previsível.
            </p>
            <p>
              Combinamos análise de requisitos, BPM, integração de sistemas e IA generativa para entregar soluções end-to-end no WhatsApp, no CRM e nos processos internos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#09DEDE] mb-3">Perguntas frequentes</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Tire suas dúvidas sobre <span className="text-gradient">IA aplicada</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl border border-[#09DEDE]/15 bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left p-5 hover:bg-[#09DEDE]/5 transition"
                    aria-expanded={open}
                  >
                    <span className="font-medium">{f.q}</span>
                    {open ? <Minus className="h-4 w-4 text-[#09DEDE] shrink-0" /> : <Plus className="h-4 w-4 text-[#09DEDE] shrink-0" />}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,222,222,0.3),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            Sua próxima reunião comercial pode ser <span className="text-gradient">marcada pela IA</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Diagnóstico gratuito de 30 minutos. Saia da call com um plano claro de automação e estimativa de ROI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Agendar diagnóstico gratuito <ArrowRight className="ml-1" /></a>
            </Button>
            <Button variant="cyan" size="lg" asChild>          
              <a href="https://wa.me/553191227968?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20agentes%20de%20IA%20da%20Gabotics." target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4 mr-1" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Solicite um contato</h2>
            <p className="mt-4 text-muted-foreground">Conte seu desafio. Um especialista responde em até 24h</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const cellPhone = "553191227968";      
              const msg = `Olá! Sou ${data.get("nome")} da ${data.get("empresa")}. ${data.get("desafio")}`;
              window.open(`https://wa.me/${cellPhone}?text=${encodeURIComponent(msg)}`, "_blank");
            }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input name="nome" required placeholder="Nome" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-[#09DEDE]/20 focus:border-[#09DEDE] focus:outline-none focus:ring-1 focus:ring-[#09DEDE] transition" />
              <input name="empresa" required placeholder="Empresa" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-[#09DEDE]/20 focus:border-[#09DEDE] focus:outline-none focus:ring-1 focus:ring-[#09DEDE] transition" />
              <input name="email" type="email" required placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-[#09DEDE]/20 focus:border-[#09DEDE] focus:outline-none focus:ring-1 focus:ring-[#09DEDE] transition" />
              <input name="whatsapp" required placeholder="WhatsApp" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-[#09DEDE]/20 focus:border-[#09DEDE] focus:outline-none focus:ring-1 focus:ring-[#09DEDE] transition" />
            </div>
            <textarea name="desafio" required rows={4} placeholder="Descreva seu desafio" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-[#09DEDE]/20 focus:border-[#09DEDE] focus:outline-none focus:ring-1 focus:ring-[#09DEDE] transition resize-none" />
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="h-4 w-4 mr-1" /> Solicitar Contato
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#09DEDE]/15 py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <img src={logoAsset} alt="Gabotics - IA e Automações" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Automação, IA e integrações inteligentes para empresas que querem escalar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solucoes" className="hover:text-[#09DEDE]">Soluções</a></li>
              <li><a href="#tecnologias" className="hover:text-[#09DEDE]">Tecnologias</a></li>
              <li><a href="#contato" className="hover:text-[#09DEDE]">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Redes</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/gabotics?igsh=bHdlbDVjNWdtbXRi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-[#09DEDE]/30 flex items-center justify-center hover:bg-[#09DEDE]/10 hover:border-[#09DEDE] transition"
              >
                <Instagram className="h-4 w-4 text-[#09DEDE]" />
              </a>
              <a href="#contato" aria-label="WhatsApp" className="w-10 h-10 rounded-lg border border-[#09DEDE]/30 flex items-center justify-center hover:bg-[#09DEDE]/10 hover:border-[#09DEDE] transition">
                <PhoneCall className="h-4 w-4 text-[#09DEDE]" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Gabotics. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
