import { Suspense } from "react";
import type { Metadata } from "next";
import { PasswordRecoveryForm } from "./password-recovery-form";

export const metadata: Metadata = {
  title: "Recuperacao de Senha | Indicai",
  description: "Redefina a senha da sua conta Indicai.",
};

export default function PasswordRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <Suspense fallback={null}>
          <PasswordRecoveryForm />
        </Suspense>
      </div>
    </main>
  );
}
