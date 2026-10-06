import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "HVAC Solutions" };

const cards = [
  { img: "/images/misc/CRD2.jpg", title: "Customised Resistive Devices for Engine Cooling Systems" },
  { img: "/images/misc/CRD1.jpg", title: "Customised Resistive Devices for Engine Cooling Systems" },
  { img: "/images/misc/PWR.jpg", title: "For power window applications." },
  { img: "/images/misc/CoilTR.jpg", title: "Coil type resistor for HVAC application." },
  { img: "/images/misc/EBR.jpg", title: "For electronic braking and steering applications." },
  { img: "/images/misc/CTR3.jpg", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/2-500x500_.png", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/CTR1.jpg", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/CTR2.jpg", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/5-500x500_.png", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/6-500x500_.png", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/7-500x500_.png", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/8-500x500_.png", title: "Ceramic type resistors for HVAC application." },
  { img: "/images/misc/9-500x500_.png", title: "Ceramic type resistors for HVAC application." },
];

export default function HvacSolutionsPage() {
  return (
    <PageShell>
      <TitleBar>HVAC Solutions</TitleBar>
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
