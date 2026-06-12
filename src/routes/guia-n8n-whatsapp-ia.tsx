import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Workflow, MessageSquare, Brain, Rocket } from "lucide-react";

const TITLE = "Guia: Como criar um agente de IA para WhatsApp com n8n (2026)";
const DESCRIPTION =
  "Tutorial passo a passo para construir um agente de IA (SDR ou suporte) no WhatsApp usando n8n, Evolution API, OpenAI e Supabase. Deploy em horas, não em meses.";
const URL = "https://gabotics.com/guia-n8n-whatsapp-ia";

export const Route = createFileRoute("/guia-n8n-whatsapp-ia")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "n8n whatsapp, como criar um agente de ia para whatsapp, agente de ia whatsapp, n8n evolution api, sdr ia whatsapp, automação whatsapp n8n, chatbot ia whatsapp, openai whatsapp",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://gabotics.com/og-image.png" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://gabotics.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: TITLE,
          description: DESCRIPTION,
          author: { "@type": "Organization", name: "Gabotics" },
          publisher: {
            "@type": "Organization",
            name: "Gabotics",
            logo: {
              "@type": "ImageObject",
              url: "https://gabotics.com/android-chrome-512x512.png",
            },
          },
          mainEntityOfPage: URL,
          inLanguage: "pt-BR",
          datePublished: "2026-06-12",
          dateModified: "2026-06-12",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como criar um agente de IA para WhatsApp com n8n",
          description: DESCRIPTION,
          totalTime: "PT2H",
          step: [
            { "@type": "HowToStep", name: "Provisionar Evolution API", text: "Suba uma instância da Evolution API em um VPS ou serviço gerenciado e conecte o número do WhatsApp via QR Code." },
            { "@type": "HowToStep", name: "Configurar webhook no n8n", text: "Crie um workflow no n8n com um nó Webhook que receba mensagens da Evolution API." },
            { "@type": "HowToStep", name: "Adicionar memória no Supabase", text: "Use Postgres no Supabase para guardar histórico de conversas por contato (lead_id, role, content, created_at)." },
            { "@type": "HowToStep", name: "Conectar OpenAI / LLM", text: "Use o nó AI Agent do n8n com modelo GPT-4o-mini, system prompt do seu SDR ou suporte e ferramentas (tools)." },
            { "@type": "HowToStep", name: "Responder no WhatsApp", text: "Encaminhe a resposta do agente para o endpoint sendText da Evolution API." },
            { "@type": "HowToStep", name: "Observabilidade e handoff", text: "Logue tudo no Supabase e crie regra de handoff humano por sentimento ou intenção." },
          ],
        }),
      },
    ],
  }),
  component: GuideN8nWhatsapp,
});

function GuideN8nWhatsapp() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/40 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-semibold tracking-tight">Gabotics</Link>
          <Button asChild size="sm" variant="cyan">
            <a href="https://wa.me/5511999999999?text=Quero%20um%20agente%20de%20IA%20no%20WhatsApp" target="_blank" rel="noopener noreferrer">
              Falar com especialista
            </a>
          </Button>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#09DEDE]">Guia técnico · 2026</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Como criar um agente de IA para WhatsApp com n8n, Evolution API e OpenAI
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Um passo a passo prático para colocar um agente de IA (SDR ou suporte) atendendo no
          WhatsApp da sua empresa em horas — usando a mesma stack que a Gabotics roda em produção
          para dezenas de operações: <strong>n8n</strong>, <strong>Evolution API</strong>,{" "}
          <strong>OpenAI</strong> e <strong>Supabase</strong>.
        </p>

        <div className="mt-8 rounded-xl border border-border/60 bg-card/40 p-6">
          <p className="text-sm font-semibold">O que você vai construir</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-[#09DEDE]" /> Um agente que responde leads 24/7 no WhatsApp.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-[#09DEDE]" /> Memória de conversa por contato no Supabase.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-[#09DEDE]" /> Qualificação automática e handoff para humano.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-[#09DEDE]" /> Workflow versionável e auditável no n8n.</li>
          </ul>
        </div>

        <Section icon={<Workflow className="size-5" />} step="Passo 1" title="Suba a Evolution API e conecte o WhatsApp">
          <p>
            A <strong>Evolution API</strong> é um gateway open-source para WhatsApp. Rode em um VPS
            (Hetzner, DigitalOcean) com Docker:
          </p>
          <CodeBlock>{`docker run -d \\
  --name evolution \\
  -p 8080:8080 \\
  -e AUTHENTICATION_API_KEY=sua-chave \\
  atendai/evolution-api:latest`}</CodeBlock>
          <p>
            Crie uma instância via <code>POST /instance/create</code> e leia o QR Code em{" "}
            <code>GET /instance/connect/&#123;name&#125;</code>. Escaneie no celular e o número
            está conectado.
          </p>
        </Section>

        <Section icon={<MessageSquare className="size-5" />} step="Passo 2" title="Receba mensagens no n8n com Webhook">
          <p>
            No n8n, crie um workflow com um nó <strong>Webhook</strong> (POST). Copie a URL e
            registre na Evolution API:
          </p>
          <CodeBlock>{`POST /webhook/set/{instance}
{
  "url": "https://seu-n8n.com/webhook/whatsapp",
  "events": ["MESSAGES_UPSERT"]
}`}</CodeBlock>
          <p>
            Toda mensagem recebida agora chega no n8n com <code>data.key.remoteJid</code>{" "}
            (contato) e <code>data.message.conversation</code> (texto).
          </p>
        </Section>

        <Section icon={<Brain className="size-5" />} step="Passo 3" title="Memória de conversa no Supabase">
          <p>Crie uma tabela simples para guardar o histórico por contato:</p>
          <CodeBlock>{`create table public.wa_messages (
  id bigserial primary key,
  contact text not null,
  role text not null check (role in ('user','assistant')),
  content text not null,
  created_at timestamptz default now()
);`}</CodeBlock>
          <p>
            No n8n, adicione um nó <strong>Supabase → Insert</strong> para gravar a mensagem do
            usuário e, em seguida, um <strong>Select</strong> trazendo as últimas 20 mensagens
            daquele contato. Esse será o contexto do agente.
          </p>
        </Section>

        <Section icon={<Brain className="size-5" />} step="Passo 4" title="Plugue o LLM (OpenAI) com system prompt de SDR">
          <p>
            Use o nó <strong>AI Agent</strong> do n8n (LangChain). Modelo recomendado:{" "}
            <code>gpt-4o-mini</code> (rápido e barato). Exemplo de system prompt para um SDR:
          </p>
          <CodeBlock>{`Você é a Gabi, SDR da {EMPRESA}.
Objetivo: qualificar o lead em até 6 mensagens (BANT) e
agendar uma reunião de 20 min.
Tom: humano, direto, sem emojis em excesso.
Quando o lead aceitar, chame a tool agendar_reuniao.`}</CodeBlock>
          <p>
            Configure <em>tools</em> como <code>agendar_reuniao</code> (Google Calendar),{" "}
            <code>consultar_estoque</code> ou <code>abrir_chamado</code> — o agente decide quando
            chamar.
          </p>
        </Section>

        <Section icon={<Rocket className="size-5" />} step="Passo 5" title="Responda no WhatsApp e logue tudo">
          <p>Devolva a resposta do agente para a Evolution API:</p>
          <CodeBlock>{`POST /message/sendText/{instance}
{
  "number": "5511999999999",
  "text": "{{ $json.output }}"
}`}</CodeBlock>
          <p>
            Grave a resposta no Supabase (<code>role='assistant'</code>) e adicione um nó de
            <strong> handoff humano</strong>: se o agente retornar uma flag (ex.{" "}
            <code>needs_human=true</code>), envie notificação para o time no Slack ou crie um
            ticket.
          </p>
        </Section>

        <div className="mt-16 rounded-2xl border border-[#09DEDE]/30 bg-[#09DEDE]/5 p-8">
          <h2 className="text-2xl font-bold">Quer pular as 40 horas de setup?</h2>
          <p className="mt-2 text-muted-foreground">
            A Gabotics implanta agentes de IA no WhatsApp em <strong>2 a 4 semanas</strong>, com
            n8n, Supabase e Evolution API rodando na sua infra — auditável, versionado e seu.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <a href="https://wa.me/5511999999999?text=Quero%20um%20agente%20de%20IA%20no%20WhatsApp" target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico gratuito <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Ver casos de uso</Link>
            </Button>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
          <div className="mt-6 space-y-5 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Preciso da API oficial do WhatsApp (Cloud API)?</p>
              <p>Não para começar. A Evolution API funciona com WhatsApp Web. Para volumes maiores ou compliance, migre para a Cloud API mantendo o mesmo workflow no n8n.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Quanto custa rodar isso por mês?</p>
              <p>Stack típica fica entre R$ 80 e R$ 300/mês de infra (VPS + Supabase + OpenAI por uso), excluindo licenças comerciais e atendimento humano.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">O agente alucina e responde besteira?</p>
              <p>Com system prompt bem escrito, RAG sobre sua base de conhecimento e tools tipadas, a taxa de erro cai para níveis aceitáveis. Sempre mantenha handoff humano.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

function Section({
  icon,
  step,
  title,
  children,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#09DEDE]">
        <span className="inline-flex size-7 items-center justify-center rounded-md border border-[#09DEDE]/40 bg-[#09DEDE]/10">
          {icon}
        </span>
        {step}
      </div>
      <h2 className="mt-3 text-2xl font-bold">{title}</h2>
      <div className="prose prose-invert mt-4 max-w-none space-y-4 text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:text-foreground [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border/60 bg-card/60 p-4 text-xs leading-relaxed text-foreground">
      <code>{children}</code>
    </pre>
  );
}