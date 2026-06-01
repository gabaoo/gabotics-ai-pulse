# Gabotics — Agentes de IA e Automação para Empresas

Landing page premium e plataforma base para a Gabotics, especialista em agentes de IA, automações com n8n, integrações via Evolution API e arquitetura escalável com Supabase.

---

## 1. Visão Geral

A Gabotics desenvolve **agentes de IA**, **automações de processos** e **integrações empresariais** focadas em atendimento, vendas e operações internas via WhatsApp. Este repositório contém a landing page institucional, totalmente responsiva, com design dark premium, otimizada para conversão (CTAs para WhatsApp e formulário).

Principais objetivos:
- Captar leads qualificados via WhatsApp / formulário
- Comunicar autoridade em IA, n8n, Supabase, Evolution API e Vibe Coding
- Servir como base escalável para evolução em produto / portal de clientes

---

## 2. Stack Utilizada

| Camada | Tecnologia |
| --- | --- |
| Framework | **TanStack Start** (React 19 + Vite 7, SSR/SSG, Server Functions) |
| Linguagem | TypeScript |
| UI | Tailwind CSS v4 + shadcn/ui + Lucide Icons |
| Backend | **Supabase** (Postgres, Auth, Storage, RLS) via Lovable Cloud |
| Automação | **n8n** (workflows, webhooks) |
| IA | **OpenAI**, **Gemini**, **Claude** |
| WhatsApp | **Evolution API** |
| Deploy | Cloudflare Workers (default Lovable) ou **Vercel** |

> Observação: o template Lovable usa **TanStack Start**, equivalente moderno do Next.js. As convenções de roteamento ficam em `src/routes/` (file-based).

---

## 3. Como Rodar Localmente

Pré-requisitos: **Node 20+** e **Bun** (ou npm/pnpm).

```bash
# 1. Clonar o repositório
git clone <repo-url> gabotics
cd gabotics

# 2. Instalar dependências
bun install

# 3. Criar arquivo de variáveis
cp .env.example .env
# preencha as variáveis necessárias

# 4. Rodar em desenvolvimento
bun dev

# 5. Build de produção
bun run build
bun run start
```

Acesse: `http://localhost:8080`

---

## 4. Configuração do Supabase

1. **Criar projeto** em [supabase.com](https://supabase.com) (ou habilitar **Lovable Cloud** com 1 clique).
2. Em **Project Settings → API**, copie:
   - `Project URL` → `VITE_SUPABASE_URL` / `SUPABASE_URL`
   - `anon public key` → `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (somente backend!)
3. **Banco de dados**: crie tabelas via migrations em `supabase/migrations/`. Sempre habilite **RLS** e defina as policies.
4. **Auth**: configure providers desejados (Email/Google/Apple) em Authentication → Providers.

> ⚠️ Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no client. Use apenas em server functions / webhooks.

---

## 5. Integração com n8n

1. Suba uma instância n8n (cloud ou self-hosted via Docker).
2. Crie um workflow com gatilho **Webhook** e copie a URL para `N8N_WEBHOOK_URL`.
3. Fluxos recomendados:
   - **Lead Capture** — recebe submissão do formulário e dispara CRM + WhatsApp.
   - **Qualificação SDR IA** — orquestra OpenAI/Claude para responder leads.
   - **Follow-up Automatizado** — Supabase → n8n → Evolution API.
   - **Atendimento N1** — Evolution → n8n → IA → resposta.
4. Exemplo de chamada do app:

```ts
await fetch(process.env.N8N_WEBHOOK_URL!, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ lead, source: "landing" }),
});
```

---

## 6. Integração com Evolution API (WhatsApp)

1. Suba a Evolution API ([docs](https://doc.evolution-api.com)).
2. Crie uma instância e gere o `EVOLUTION_API_KEY`.
3. Variáveis: `EVOLUTION_API_URL`, `EVOLUTION_API_KEY`, `EVOLUTION_INSTANCE_NAME`.
4. Envio de mensagem:

```ts
await fetch(`${process.env.EVOLUTION_API_URL}/message/sendText/${instance}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: process.env.EVOLUTION_API_KEY!,
  },
  body: JSON.stringify({ number, text }),
});
```

---

## 7. Estrutura do Projeto

```
src/
├── routes/           # File-based routing (TanStack Start)
│   └── api/          # Server routes (webhooks, public APIs)
├── components/
│   ├── ui/           # shadcn primitives
│   ├── layout/       # Header, Footer, navegação
│   ├── sections/     # Seções da landing (Hero, Tech, Cases…)
│   └── shared/       # Componentes reutilizáveis
├── services/         # Regras de negócio (lead, IA, WhatsApp)
├── hooks/            # React hooks customizados
├── lib/              # Server functions + helpers
├── queries/          # TanStack Query options
├── integrations/
│   ├── supabase/     # Clients (browser/server/admin)
│   ├── n8n/          # Wrappers de webhook
│   └── whatsapp/     # Evolution API client
├── types/            # Tipagens compartilhadas
├── utils/            # Funções utilitárias puras
├── constants/        # Enums, listas estáticas
├── assets/           # Imagens, logos
└── styles/           # Tokens e estilos globais
```

Princípios:
- **UI** isolada de **regra de negócio** isolada de **integrações**.
- Server-only em `*.server.ts`; nunca importar no client.
- Server functions em `*.functions.ts`.

---

## 8. Decisões de Arquitetura

- **TanStack Start em vez de Next.js puro**: SSR/SSG + server functions tipadas, deploy em edge (Cloudflare) ou Vercel sem lock-in.
- **Supabase**: Postgres real + Auth + RLS, evita reinventar autenticação.
- **n8n como orquestrador**: workflows visuais permitem que o time não-dev evolua automações.
- **Evolution API** para WhatsApp: alternativa open-source robusta à Cloud API oficial, ideal para múltiplas instâncias.
- **Multi-provider IA (OpenAI + Gemini + Claude)**: cada modelo tem força distinta (raciocínio, contexto longo, custo).
- **Tailwind v4 + design tokens semânticos** em `src/styles.css` para tematização consistente.
- **Sem preços na landing**: foco em conversão por contato consultivo.

---

## 9. Deploy

### Vercel (recomendado para Next-like DX)

1. `vercel link` → conectar o projeto.
2. Configurar todas as variáveis de `.env.example` em **Project Settings → Environment Variables**.
3. Comando de build: `bun run build` · Output: `.output/public`.
4. `vercel --prod`.

### Cloudflare Workers (default Lovable)

Build automático via Lovable / Wrangler. Basta publicar via Lovable Cloud.

Checklist pós-deploy:
- [ ] Variáveis de ambiente preenchidas
- [ ] Supabase URL/Keys corretos
- [ ] Webhook n8n acessível publicamente
- [ ] Evolution API respondendo
- [ ] Formulário enviando WhatsApp
- [ ] Lighthouse > 90 (Performance/SEO/A11y)

---

## 10. Melhorias Futuras

- Portal do cliente autenticado (Supabase Auth + RLS)
- Dashboard de métricas das automações (Supabase Realtime)
- Blog/CMS para SEO (rotas dinâmicas com loaders)
- Multi-idioma (i18n) PT/EN/ES
- A/B testing de CTAs
- Integração com Stripe/Asaas para futuras ofertas SaaS
- Painel administrativo de leads
- Webhooks bidirecionais Evolution ↔ n8n ↔ Supabase

---

## 11. Vibe Coding Journal

Histórico vivo de como o projeto foi construído junto com IA (Lovable + Claude/GPT).

### Objetivo
Entregar uma landing de nível **Awwwards**, performática e pronta para gerar leads para a Gabotics, no menor tempo possível, mantendo arquitetura escalável.

### Prompts-chave utilizados
- "Crie uma landing premium dark inspirada na Umbler, com cyan #09DEDE como cor principal."
- "Adicione seções: Hero, Benefícios, Como Funciona, Tecnologias, Cases, Diferenciais, Sobre, CTA, Formulário."
- "Agrupe as tecnologias por categoria com cards visuais — IA, Automação, Backend, Mensageria."
- "Gere README profissional + .env.example para deploy na Vercel."

### Dificuldades encontradas
- Equilibrar densidade visual sem poluir a página.
- Padronizar tokens de design para evitar cores hardcoded.
- Mapear convenções TanStack Start (file-based routing) vs. expectativa Next.js.

### Como a IA ajudou
- Geração rápida de boilerplate, copy em português, ícones Lucide adequados.
- Sugestão de hierarquia de seções e CTAs orientados a conversão.
- Criação automática de gradientes, glow e animações premium.

### Ajustes manuais
- Refino de copy para tom Gabotics (autoridade + consultivo).
- Ajustes finos de espaçamento, animações e responsividade.
- Curadoria das categorias de tecnologia.

### Decisões arquiteturais importantes
- Server functions tipadas para qualquer integração sensível (n8n, Evolution).
- Service Role Key restrita a server-side.
- RLS habilitada em toda tabela pública futura.
- Separar `services/`, `integrations/`, `queries/` para manter SRP.

### Lições aprendidas
- Design tokens economizam refatorações futuras.
- Definir a arquitetura de pastas no dia 1 evita bagunça depois.
- Documentar a jornada (este Journal) acelera onboarding e auditoria.

---

## 12. Instruções Finais de Deploy

1. **Publicar na Vercel**: importar o repo → adicionar env vars → deploy.
2. **Variáveis**: copiar do `.env.example` e preencher no painel Vercel/Lovable.
3. **Supabase**: garantir Project URL + Keys + tabelas + RLS.
4. **n8n**: deixar `N8N_WEBHOOK_URL` apontando para o workflow de produção.
5. **Evolution API**: instância ativa + número conectado.
6. **Validação pós-deploy**:
   - Submeter o formulário e confirmar abertura do WhatsApp.
   - Verificar logs do webhook n8n.
   - Checar mensagens chegando via Evolution.
   - Auditar Lighthouse + SEO meta tags.

---

**Gabotics — Inteligência Artificial, Automação e Vibe Coding para empresas que querem escalar.**