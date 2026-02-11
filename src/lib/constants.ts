import { Brain, Code, Rocket, Sparkles } from "lucide-react";

export const NAV_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Servicos", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
] as const;

export const SERVICES = [
  {
    icon: Brain,
    title: "Consultoria em IA",
    description:
      "Analise e implementacao de solucoes de inteligencia artificial personalizadas para o seu negocio.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description:
      "Criacao de aplicacoes e sistemas inteligentes utilizando as mais recentes tecnologias.",
  },
  {
    icon: Rocket,
    title: "Automacao",
    description:
      "Automatize processos repetitivos e aumente a produtividade da sua empresa com IA.",
  },
  {
    icon: Sparkles,
    title: "Inovacao",
    description:
      "Transformamos suas ideias em produtos inovadores prontos para o mercado.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Indicai",
    description:
      "Plataforma digital para divulgacao de profissionais e conexao com contratantes, com politica de privacidade dedicada.",
    tags: ["App", "Marketplace", "LGPD"],
    href: "/indicai/politica-de-privacidade",
    image: "/indicai-logo.jpeg",
  },
  {
    title: "Sistema de Analise Preditiva",
    description:
      "Plataforma de analise de dados com previsoes baseadas em IA para tomada de decisoes.",
    tags: ["Data Science", "Analytics", "IA"],
  },
  {
    title: "Automacao de Processos",
    description:
      "Solucao de RPA integrada com IA para automatizar fluxos de trabalho complexos.",
    tags: ["RPA", "Automacao", "Workflow"],
  },
] as const;

export const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "30+", label: "Clientes satisfeitos" },
  { value: "98%", label: "Taxa de satisfacao" },
  { value: "24/7", label: "Suporte disponivel" },
] as const;

export const FEATURES = [
  "Solucoes personalizadas",
  "Tecnologia de ponta",
  "Suporte dedicado",
  "Resultados comprovados",
] as const;

export const CONTACT_EMAIL = "ideiagenstartup@gmail.com";

