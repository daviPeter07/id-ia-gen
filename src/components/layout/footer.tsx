import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/src/lib/constants";
import logo from "@/public/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="#inicio" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Ide'IA Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold">
              Ide{"'"}IA<span className="text-accent">.gen</span>
            </span>
          </Link>

          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Ide{"'"}IA. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2">
            <Link
              href="/indicai"
              className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-secondary"
            >
              Secao Indicaí
            </Link>

            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
              aria-label="Enviar email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

