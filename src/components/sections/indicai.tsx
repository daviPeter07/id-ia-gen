import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function IndicaiSection() {
  return (
    <section id="indicai" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Indicaí</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seção oficial do <span className="text-primary">Indicaí</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Acesse a página dedicada do aplicativo para consultar a Política de
            Privacidade completa.
          </p>

          <Button asChild size="lg">
            <Link href="/indicai">
              Abrir seção do Indicaí
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
