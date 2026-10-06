import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = { title: "My account" };

export default function MyAccountPage() {
  return (
    <PageShell>
      <TitleBar>Login</TitleBar>
      <div className="mx-auto max-w-md">
        <LoginForm />
      </div>
    </PageShell>
  );
}
