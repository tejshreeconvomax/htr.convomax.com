import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Certifications" };

const certs = [
  { label: "IATF 16949:2016", href: "https://htr-india.com/wp-content/uploads/2023/05/IATF-16949-2016-23072021.pdf" },
  { label: "ISO 45001:2018", href: "https://htr-india.com/wp-content/uploads/2023/08/ISO-45001-2018.pdf" },
  { label: "ISO 14001:2015", href: "https://htr-india.com/wp-content/uploads/2023/08/ISO-14001-2015.pdf" },
  { label: "MSME Zed Gold Certificate", href: "https://www.htr-india.com/wp-content/uploads/2026/05/Gold.pdf" },
  { label: "T2 Certificate", href: "https://htr-india.com/wp-content/uploads/2023/05/T2-CERTIFCATE.pdf" },
  { label: "One Star Export Certificate", href: "https://htr-india.com/wp-content/uploads/2023/05/One-Star-Export-Certificate.pdf" },
  { label: "Dun & Bradstreet Certificate", href: "https://www.htr-india.com/wp-content/uploads/2026/05/DUNS-150526.pdf" },
  { label: "MSME – UDYAM Certificate", href: "https://www.htr-india.com/wp-content/uploads/2026/02/UDYAM-261125.pdf" },
  { label: "RCMC – ESC Certificate", href: "https://htr-india.com/wp-content/uploads/2024/02/RCMC-ESC-CERTIFICATE.pdf" },
  { label: "REACH Certificate", href: "https://www.htr-india.com/wp-content/uploads/2025/07/REACH-CER-GEN.pdf" },
  { label: "ROHS Declaration", href: "https://www.htr-india.com/wp-content/uploads/2025/07/ROHS-DEC-GEN.pdf" },
];

export default function CertificationsPage() {
  return (
    <PageShell>
      <TitleBar>Certifications</TitleBar>
      <ul className="htr-prose list-disc space-y-1 pl-6">
        {certs.map((c) => (
          <li key={c.label}>
            <a href={c.href} target="_blank" rel="noopener">
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
