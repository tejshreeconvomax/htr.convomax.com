import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Thank You" };

export default function ThankYouPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-htr-blue text-3xl font-bold text-white">
          ✓
        </div>
        <h1 className="font-serif text-3xl font-bold text-htr-blue">Thank You For Contacting Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Our representative will get back to you soon via email/call.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-htr-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark"
        >
          Return Home
        </Link>
      </div>
    </PageShell>
  );
}
