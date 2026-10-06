import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <TitleBar>HTR App Privacy Policy</TitleBar>
      <div className="htr-prose">
        <p>
          The HTR App does not request, collect, use, save/retain or have access to any personal
          data on the HTR App. The HTR App only updates product information related to HTR&apos;s
          own products/offerings from it&apos;s official website for the purpose of providing
          information requested by the user.
        </p>
        <p>
          As the HTR App does not collect any data, consequently there is no question of sharing
          data with any third party providers, analytics services etc.
        </p>
        <p>The HTR App is fully compliant with the privacy policies of all countries.</p>
      </div>
    </PageShell>
  );
}
