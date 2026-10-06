import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Custom Products" };

const cards = [
  { img: "/images/misc/CRDFIA-1.jpg", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/CRDFWA.jpg", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/PWR.jpg", title: "For power window applications." },
  { img: "/images/misc/EBR.jpg", title: "For electronic braking and steering applications" },
  { img: "/images/misc/Resistor-fitted-with-cables-for-bimetallic-switch-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/1-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/2-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/3-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/4-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/5-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/6-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
  { img: "/images/misc/Fuel-guage-application-500x500_.png", title: "Customised Resistive Device for Fuel Gauge Applications" },
  { img: "/images/misc/Load-Bank-500x500-1.png", title: "Customised Resistive Devices for Industrial Applications." },
];

export default function CustomProductsPage() {
  return (
    <PageShell>
      <TitleBar>Custom Products</TitleBar>
      <p className="htr-prose mb-8">
        With a strong R&amp;D facility, HTR is continuously innovating on the technology front to
        provide world class techno-economic solutions. We can provide quick turnaround solutions by
        customising resistive devices suitable for customers&apos; applications and can ensure speedier
        deliveries. Please connect with <a href="mailto:info@htr-india.com">info@htr-india.com</a>
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Link
            key={i}
            href="/contact-us"
            className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square bg-white p-4">
              <Image src={c.img} alt={c.title} fill sizes="300px" className="object-contain p-2" />
            </div>
            <h3 className="border-t border-gray-100 px-3 py-4 text-center font-serif text-base font-bold text-htr-blue group-hover:text-htr-blue-dark">
              {c.title}
            </h3>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
