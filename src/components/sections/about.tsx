import { CheckCircle } from "lucide-react";
import { STATS, FEATURES } from "@/src/lib/constants";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="text-primary">Ide{"'"}IA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheca nossa missao e visao para transformar o futuro atraves da
            tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nossa Missao</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Ide{"'"}IA nasceu da paixao por inovacao e da crenca de que a
              Inteligencia Artificial pode revolucionar a forma como empresas e
              pessoas interagem com a tecnologia.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nossa equipe e formada por especialistas em IA, desenvolvimento de
              software e estrategia de negocios, unidos pelo objetivo de criar
              solucoes que realmente fazem a diferenca.
            </p>

            <ul className="space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      index % 2 === 0 ? "text-primary" : "text-accent"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
