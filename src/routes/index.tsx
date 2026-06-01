import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/gabotics-logo.png.asset.json";
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
  Sparkles,
  ArrowRight,
  Zap,
  Database,
  Webhook,
  PhoneCall,
  Calendar,
  Users,
  Headphones,
  CreditCard,
  Cog,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabotics — Agentes de IA e Automações 24/7 para Empresas" },
      { name: "description", content: "Agentes inteligentes de IA, automações com n8n, Supabase e Evolution API. Atendimento, vendas e processos automatizados no WhatsApp." },
      { property: "og:title", content: "Gabotics — Agentes de IA e Automações 24/7" },
      { property: "og:description", content: "Automatize atendimento, vendas e processos com IA, n8n, Supabase e Evolution API." },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  const benefits = [
    { icon: Bot, title: "Atendimento Inteligente", desc: "Agentes de IA treinados para responder clientes automaticamente, 24/7." },
    { icon: MessageSquare, title: "WhatsApp Automatizado", desc: "Atendimento, vendas e suporte direto no canal preferido dos seus clientes." },
    { icon: Plug, title: "Integrações Avançadas", desc: "Conecte ERP, CRM, APIs e sistemas internos em um único fluxo." },
    { icon: TrendingDown, title: "Redução de Custos", desc: "Menos tarefas manuais, mais produtividade e margem operacional." },
    { icon: Layers, title: "Escalabilidade", desc: "Atenda centenas de clientes simultaneamente sem perder qualidade." },
    { icon: LineChart, title: "Dashboards em Tempo Real", desc: "Visualização completa das suas operações e KPIs do negócio." },
  ];

  const steps = [
    { icon: Search, title: "Diagnóstico", desc: "Entendemos seu negócio, dores e oportunidades de automação." },
    { icon: Workflow, title: "Mapeamento", desc: "Modelamos processos e desenhamos a arquitetura ideal." },
    { icon: Code2, title: "Desenvolvimento", desc: "Construímos a automação com n8n, Supabase e APIs." },
    { icon: Brain, title: "Treinamento da IA", desc: "Treinamos agentes com seus dados, tom e regras de negócio." },
    { icon: Rocket, title: "Implantação", desc: "Deploy, monitoramento contínuo e evolução constante." },
  ];

  const techs = [
    "n8n", "Supabase", "OpenAI", "Evolution API",
    "WhatsApp", "PostgreSQL", "Webhooks", "APIs REST",
  ];

  const cases = [
    { icon: Users, title: "SDR IA", desc: "Qualificação automática de leads com agentes conversacionais." },
    { icon: Headphones, title: "Suporte Inteligente", desc: "Resolução automática de dúvidas com base no seu conhecimento." },
    { icon: Calendar, title: "Agendamento", desc: "Marcação automática de reuniões integrada à sua agenda." },
    { icon: Database, title: "CRM Automatizado", desc: "Atualização automática de dados e funil de vendas." },
    { icon: CreditCard, title: "Financeiro", desc: "Cobranças, notificações e conciliação automatizadas." },
    { icon: Cog, title: "Processos Internos", desc: "Automação operacional ponta-a-ponta dos seus fluxos." },
  ];

  const diferenciais = [
    "Desenvolvimento sob medida",
    "Integrações ilimitadas",
    "Especialização em n8n",
    "Especialização em IA Generativa",
    "Implantação rápida",
    "Suporte contínuo",
    "Soluções escaláveis",
    "Arquitetura moderna",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-[#09DEDE]/15" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Gabotics" className="h-8 w-auto" />
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
              <Sparkles className="h-3.5 w-3.5 text-[#09DEDE]" />
              <span className="text-xs text-[#09DEDE] font-medium">IA + Automação + Vibe Coding</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] font-[Space_Grotesk]">
              Agentes de IA e automações que trabalham por você{" "}
              <span className="text-gradient">24 horas por dia</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Desenvolvemos agentes inteligentes para WhatsApp, integrações avançadas e automações empresariais utilizando IA, n8n, Supabase e Evolution API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Falar com Especialista <ArrowRight className="ml-1" /></a>
              </Button>
              <Button variant="cyan" size="lg" asChild>
                <a href="#contato">Solicitar Demonstração</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#09DEDE]" /> Implantação rápida</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#09DEDE]" /> Sob medida</div>
              <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-[#09DEDE]" /> IA Generativa</div>
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
      </section>

      {/* Benefits */}
      <section id="solucoes" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">
              Automatize processos, vendas e atendimento <span className="text-gradient">com IA</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Soluções end-to-end para transformar operações manuais em fluxos inteligentes.
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
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Como funciona</h2>
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
      <section id="tecnologias" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Tecnologias que utilizamos</h2>
            <p className="mt-4 text-muted-foreground">Soluções robustas com ferramentas modernas e escaláveis.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techs.map((t) => (
              <div key={t} className="glass rounded-xl p-6 text-center hover:border-[#09DEDE]/40 transition-all hover:-translate-y-1">
                <Webhook className="h-6 w-6 text-[#09DEDE] mx-auto mb-3" />
                <div className="font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Casos de <span className="text-gradient">uso</span></h2>
            <p className="mt-4 text-muted-foreground">Aplicações reais que entregam resultado.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl glass hover:border-[#09DEDE]/50 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-[#09DEDE]/10 border border-[#09DEDE]/30 flex items-center justify-center mb-4">
                  <c.icon className="h-5 w-5 text-[#09DEDE]" />
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Por que escolher a <span className="text-gradient">Gabotics</span>?</h2>
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

      {/* Sobre */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Quem somos</h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              A Gabotics nasceu para ajudar empresas a transformar processos manuais em operações inteligentes utilizando Inteligência Artificial e automação.
            </p>
            <p>
              Com experiência em análise de requisitos, BPM, integração de sistemas e desenvolvimento de soluções corporativas, entregamos projetos focados em produtividade, escalabilidade e resultado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,222,222,0.3),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk]">
            Pronto para <span className="text-gradient">automatizar</span> seu negócio?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como a IA pode reduzir custos, aumentar produtividade e acelerar seu crescimento.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Falar com Especialista <ArrowRight className="ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk]">Solicite um contato</h2>
            <p className="mt-4 text-muted-foreground">Conte seu desafio. Um especialista responde em até 24h.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg = `Olá! Sou ${data.get("nome")} da ${data.get("empresa")}. ${data.get("desafio")}`;
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
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
            <img src={logoAsset.url} alt="Gabotics" className="h-8 w-auto mb-4" />
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
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg border border-[#09DEDE]/30 flex items-center justify-center hover:bg-[#09DEDE]/10 hover:border-[#09DEDE] transition">
                <Linkedin className="h-4 w-4 text-[#09DEDE]" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg border border-[#09DEDE]/30 flex items-center justify-center hover:bg-[#09DEDE]/10 hover:border-[#09DEDE] transition">
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
