"use client";

import React from "react"

import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const name = formData.get("name") as string;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\n\n${message}`)}`;
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tem um projeto em mente? Vamos conversar sobre como podemos ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Vamos criar algo incrivel juntos
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Estamos prontos para ouvir suas ideias e transforma-las em
              solucoes inteligentes. Entre em contato e descubra como a Ide
              {"'"}IA pode impulsionar o seu negocio.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
              />
              <ContactInfo
                icon={MessageSquare}
                label="Atendimento"
                value="Segunda a Sexta, 9h - 18h"
              />
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
              <CardDescription>
                Preencha o formulario abaixo e entraremos em contato.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou duvida..."
                    rows={5}
                    required
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensagem
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

function ContactInfo({ icon: Icon, label, value, href }: ContactInfoProps) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className={href ? "hover:text-primary transition-colors" : ""}>
          {value}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}
