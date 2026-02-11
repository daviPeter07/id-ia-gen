"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function BackToHomeButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")}>
      Voltar para o inicio
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
}
