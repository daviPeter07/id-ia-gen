"use client";

import { type FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "@/src/hooks/use-toast";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

type FormErrors = {
  token?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
};

function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function maskCpf(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function isValidCpf(cpf: string): boolean {
  const digits = onlyDigits(cpf);
  if (digits.length !== 11) return false;
  if (/^(\d)\1+$/.test(digits)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i += 1) sum += Number(digits[i]) * (10 - i);
  let first = (sum * 10) % 11;
  if (first === 10) first = 0;
  if (first !== Number(digits[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i += 1) sum += Number(digits[i]) * (11 - i);
  let second = (sum * 10) % 11;
  if (second === 10) second = 0;
  return second === Number(digits[10]);
}

function getApiBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  return envUrl && envUrl.length > 0 ? envUrl.replace(/\/$/, "") : "";
}

export function PasswordRecoveryForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [debugMessage, setDebugMessage] = useState("");

  const hasToken = useMemo(() => token.trim().length > 0, [token]);

  const validate = (): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!hasToken) validationErrors.token = "Link invalido ou expirado.";
    if (!isValidCpf(cpf)) validationErrors.cpf = "Informe um CPF valido.";
    if (password.length < 6)
      validationErrors.password = "A senha deve ter no minimo 6 caracteres.";
    if (confirmPassword !== password)
      validationErrors.confirmPassword = "As senhas nao coincidem.";

    return validationErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setDebugMessage("");
    try {
      const baseUrl = getApiBaseUrl();
      const endpoint = `${baseUrl}/api/auth/reset-password`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          cpf: onlyDigits(cpf),
          senha: password,
          confirmSenha: confirmPassword,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.error || data.message || `Falha ao redefinir senha (HTTP ${response.status}).`
        );
      }

      toast.success(data.message || "Senha redefinida com sucesso.");
      router.push("/");
    } catch (error) {
      const baseUrl = getApiBaseUrl();
      const endpoint = `${baseUrl}/api/auth/reset-password`;
      const message = error instanceof Error ? error.message : "Erro ao redefinir senha.";

      if (message.toLowerCase().includes("failed to fetch")) {
        setDebugMessage(
          `Falha de rede ao chamar ${endpoint}. Verifique se o backend está online e se o CORS permite esta origem.`
        );
      } else {
        setDebugMessage(`Erro da API: ${message}`);
      }

      console.error("Password reset error", {
        endpoint,
        message,
      });
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="border-border">
      <CardHeader className="space-y-2">
        <CardTitle>Recuperacao de senha</CardTitle>
        <CardDescription>
          Informe seu CPF, defina uma nova senha e confirme para concluir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!hasToken ? (
            <p className="text-sm text-destructive">
              Link de recuperacao invalido. Solicite um novo email.
            </p>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(maskCpf(e.target.value))}
              placeholder="000.000.000-00"
              inputMode="numeric"
              maxLength={14}
              autoComplete="off"
              required
            />
            {errors.cpf ? <p className="text-xs text-destructive">{errors.cpf}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Nova senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimo 6 caracteres"
              minLength={6}
              autoComplete="new-password"
              required
            />
            {errors.password ? (
              <p className="text-xs text-destructive">{errors.password}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita a senha"
              minLength={6}
              autoComplete="new-password"
              required
            />
            {errors.confirmPassword ? (
              <p className="text-xs text-destructive">{errors.confirmPassword}</p>
            ) : null}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" disabled={submitting || !hasToken}>
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando
                </>
              ) : (
                <>
                  Redefinir senha
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="bg-transparent"
              onClick={() => router.push("/")}
            >
              Voltar para inicio
            </Button>
          </div>

          {debugMessage ? (
            <p className="text-xs text-destructive break-all">{debugMessage}</p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
