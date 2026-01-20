import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Inovacao com Inteligencia Artificial
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Transformamos{" "}
              <span className="text-primary">ideias</span> em{" "}
              <span className="text-accent">solucoes inteligentes</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Somos uma startup focada em desenvolver solucoes inovadoras
              utilizando Inteligencia Artificial para impulsionar o seu negocio
              ao proximo nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#servicos">
                  Conheca nossos servicos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="#contato">Fale conosco</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <Image
                src="/images/logo.png"
                alt="Ide'IA Logo"
                width={400}
                height={400}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
