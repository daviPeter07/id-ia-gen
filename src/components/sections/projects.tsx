import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { PROJECTS } from "@/src/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheca alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="bg-secondary/30 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group"
            >
              <CardHeader>
                <div className="w-full h-40 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Logo ${project.title}`}
                      fill
                      className="object-contain p-3"
                    />
                  ) : (
                    <Sparkles className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />
                  )}
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      href={project.href}
                      className="inline-flex text-sm text-primary hover:underline"
                    >
                      Ver politica de privacidade
                    </Link>
                    {project.title === "Indicai" ? (
                      <Link
                        href="/indicai/cadastro-usuario"
                        className="inline-flex text-sm text-primary hover:underline"
                      >
                        Ver cadastro de usuario
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
