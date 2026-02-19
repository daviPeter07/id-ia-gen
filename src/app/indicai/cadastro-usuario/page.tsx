import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Cadastro de Usuario | Indicaí",
  description: "Video demonstrando o cadastro de usuario no Indicaí.",
};

const cadastroVideoUrl = process.env.NEXT_PUBLIC_INDICAI_CADASTRO_VIDEO_URL?.trim();

function extractGoogleDriveFileId(url: string) {
  const matchByPath = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchByPath?.[1]) return matchByPath[1];

  const matchByQuery = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchByQuery?.[1]) return matchByQuery[1];

  return null;
}

export default function IndicaiCadastroUsuarioPage() {
  const driveFileId = cadastroVideoUrl ? extractGoogleDriveFileId(cadastroVideoUrl) : null;
  const drivePreviewUrl = driveFileId
    ? `https://drive.google.com/file/d/${driveFileId}/preview`
    : null;

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Cadastro de usuario</h1>
          <p className="text-muted-foreground">
            Video demonstrando o passo a passo do cadastro no Indicaí.
          </p>
        </header>

        <section className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-4">
          {cadastroVideoUrl ? (
            drivePreviewUrl ? (
              <iframe
                src={drivePreviewUrl}
                className="w-full h-[240px] md:h-[420px] rounded-lg border border-border bg-black"
                allow="autoplay"
                allowFullScreen
                title="Video de cadastro no Indicaí"
              />
            ) : (
              <video
                controls
                preload="metadata"
                className="w-full rounded-lg border border-border bg-black"
              >
                <source src={cadastroVideoUrl} />
                Seu navegador nao suporta a reproducao de video.
              </video>
            )
          ) : (
            <p className="text-sm text-muted-foreground">
              Defina a variavel <code>NEXT_PUBLIC_INDICAI_CADASTRO_VIDEO_URL</code>{" "}
              para carregar o video de demonstracao.
            </p>
          )}
        </section>

        <div>
          <Link
            href="/indicai"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para secao Indicaí
          </Link>
        </div>
      </div>
    </main>
  );
}
