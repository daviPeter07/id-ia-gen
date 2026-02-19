import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, KeyRound, ShieldCheck, Video } from "lucide-react";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Secao Indicaí | Ide'IA",
  description: "Area com as paginas do Indicaí.",
};

export default function IndicaiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Secao Indicaí</h1>
          <p className="text-muted-foreground">Acesse as paginas do aplicativo.</p>
        </header>

        <section className="rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Paginas disponiveis</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/indicai/cadastro-usuario"
              className={cn(buttonVariants({ variant: "default" }), "w-full justify-start")}
            >
              <Video className="h-4 w-4" />
              Video de cadastro de usuario
            </Link>
            <Link
              href="/indicai/politica-de-privacidade"
              className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start")}
            >
              <ShieldCheck className="h-4 w-4" />
              Politica de privacidade
            </Link>
            <Link
              href="/indicai/recuperar-senha"
              className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start")}
            >
              <KeyRound className="h-4 w-4" />
              Recuperar senha
            </Link>
          </div>
        </section>

        <div>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
            <ArrowLeft className="h-4 w-4" />
            Voltar para o inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
