# Vicente Transportes — Landing Page

Landing page institucional construída em **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, a partir do design gerado no Google Stitch.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/
    layout.tsx      # fontes (Be Vietnam Pro, self-hosted via @fontsource) e metadata
    page.tsx         # monta todas as seções na ordem
    globals.css      # tokens de cor/espaçamento do design system (DESIGN.md)
  components/
    Header.tsx        # nav fixo + menu mobile
    Hero.tsx           # imagem + overlay gradiente azul + headline
    About.tsx
    Services.tsx
    Coverage.tsx
    Differentiators.tsx
    Team.tsx
    Clients.tsx        # marquee de logos
    Testimonials.tsx    # carrossel funcional (useState)
    Contact.tsx         # formulário conectado ao Formspree
    Footer.tsx
public/
  images/hero.jpg     # imagem enviada por você
```

## Formulário de contato (Formspree)

O formulário em `src/components/Contact.tsx` envia para:

```
https://formspree.io/f/xojgvnro
```

Isso já está funcional — ao testar em produção, a primeira submissão de cada formulário novo no Formspree pede uma confirmação por e-mail (comportamento padrão da plataforma, não é bug). Depois disso os envios seguintes caem direto na sua caixa de entrada/dashboard.

Se quiser trocar de conta/endpoint no futuro, é só atualizar a constante `FORMSPREE_ENDPOINT` no topo do arquivo.

## Imagens que ainda são placeholders do Stitch

Só a imagem da Hero é sua (a foto da frota/van). As demais seções (Sobre, Cobertura/mapa, Equipe, Clientes) ainda usam as imagens de exemplo geradas pelo Stitch (hospedadas no domínio `lh3.googleusercontent.com`, já liberado no `next.config.ts`). Troque por fotos reais quando tiver — é só substituir a `src` de cada `<Image>` em `About.tsx`, `Coverage.tsx`, `Team.tsx` e `Clients.tsx` (ou colocar os arquivos em `public/images/` e apontar para `/images/arquivo.jpg`).

## Deploy

O jeito mais rápido é a Vercel (mesma empresa do Next.js):

```bash
npx vercel
```

Ou conectando o repositório GitHub direto em vercel.com/new.
