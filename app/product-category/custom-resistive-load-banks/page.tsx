import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { productMap } from "@/lib/products";

export const metadata: Metadata = {
  title: "Custom Resistive Load Banks Archives - HTR-India.com",
};

const stats = [
  { value: "500 W – 500 kW", label: "Power Range" },
  { value: "Manual / PLC / HMI", label: "Control Options" },
  { value: "12 V – 440 VAC", label: "AC Voltage" },
  { value: "12 – 700 VDC", label: "DC Voltage" },
];

const elements = [
  "U-type SS 304 Heating Elements",
  "Ceramic Tube Wire-Wound",
  "Wire Grid",
  "Punch Grid",
];

const applications: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Generator & Genset Commissioning",
    body: "Verify rated capacity, voltage stability, frequency response, and fuel consumption under real load, not a bank of light bulbs or a shorted output.",
  },
  {
    num: "02",
    title: "UPS, Inverter, SMPS & Stabiliser Testing",
    body: "Validate output voltage, current, thermal behaviour, and transfer performance under step-wise or sustained load conditions.",
  },
  {
    num: "03",
    title: "Battery & Energy Storage Validation",
    body: "Measure actual vs. rated discharge capacity, characterise charge-discharge cycles, and confirm real backup runtime.",
  },
  {
    num: "04",
    title: "EV Charging & Battery Pack Testing",
    body: "Simulate real charging demand to validate metering accuracy, safety interlocks, and thermal performance of EV infrastructure.",
  },
  {
    num: "05",
    title: "Meter, CT, Relay & Switchgear Calibration",
    body: "Apply precise, known loads to calibrate and type-test energy meters, current transformers, relays, and switchgear.",
  },
  {
    num: "06",
    title: "Full-System Load Testing",
    body: "Exercise the complete generator → ATS → UPS → distribution chain as a connected system, not as isolated components.",
  },
  {
    num: "07",
    title: "Solar Inverter & Renewable Energy Testing",
    body: "Validate grid-tie inverters, hybrid solar systems, and off-grid power converters under controlled load profiles that replicate real-world demand.",
  },
  {
    num: "08",
    title: "Data Centre & Mission-Critical Commissioning",
    body: "Prove full-facility power capacity, redundancy, and cooling behaviour before live IT load arrives — dark testing on gensets, UPS strings, PDUs, and busways.",
  },
];

export default function CustomResistiveLoadBanksPage() {
  const product = productMap["custom-resistive-load-banks-1kw-500kw"];

  return (
    <PageShell>
      <TitleBar>Custom Resistive Load Banks</TitleBar>

      <h2 className="mb-5 font-serif text-xl font-semibold text-gray-800">
        Custom Resistive Load Banks, Built Around Your Test Requirement
      </h2>

      <div className="htr-prose">
        <p>
          A resistive load bank converts electrical energy directly into heat through resistive
          elements, creating a purely resistive load at unity power factor. That makes it the most
          accurate way to prove out real-power (kW) performance of a generator, UPS, inverter,
          transformer, or battery system the way it will actually behave once it&apos;s in service,
          not just on the nameplate.
        </p>
        <p>
          At HTR, no two load banks are the same. Every unit is engineered to the customer&apos;s
          voltage, power rating, step configuration, cooling method, and form factor.
        </p>
      </div>

      {/* Stat tiles */}
      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-htr-blue/30 bg-gradient-to-br from-[#eef4fc] to-white p-5 text-center shadow-sm"
          >
            <p className="font-serif text-xl font-bold text-htr-blue">{s.value}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Resistive element options */}
      <h3 className="mb-3 font-serif text-lg font-bold text-htr-blue">Resistive Element Options</h3>
      <div className="mb-8 flex flex-wrap gap-2">
        {elements.map((e) => (
          <span
            key={e}
            className="rounded-full border border-htr-blue bg-white px-4 py-1.5 text-sm font-medium text-htr-blue"
          >
            {e}
          </span>
        ))}
      </div>

      <p className="htr-prose mb-10">
        The control architecture — manual selector, multifunction metering, or PLC/HMI-based
        automatic step control — is chosen to match how you actually run the test, not the other way
        around.
      </p>

      {/* Applications */}
      <h2 className="mb-2 font-serif text-2xl font-bold text-htr-blue">
        Applications Across Every Power Testing Environment
      </h2>
      <p className="htr-prose mb-6">
        Our custom resistive load banks are deployed across power generation, energy storage,
        industrial systems, transportation, and data-centre infrastructure. Typical use cases
        include:
      </p>

      <ol className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {applications.map((a) => (
          <li
            key={a.num}
            className="relative rounded-lg border border-gray-200 bg-white p-5 pl-16 shadow-sm transition-shadow hover:shadow-md"
          >
            <span
              aria-hidden
              className="absolute left-4 top-5 font-serif text-2xl font-bold text-htr-blue"
            >
              {a.num}
            </span>
            <h4 className="mb-1 font-serif text-base font-bold text-gray-800">{a.title}</h4>
            <p className="text-sm text-gray-700">{a.body}</p>
          </li>
        ))}
      </ol>

      {/* Download link */}
      <div className="mb-10">
        <a
          href="https://www.htr-india.com/wp-content/uploads/2026/08/HTR_Load_Bank_PPT.pdf"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-md bg-htr-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark"
        >
          ↓ Download PPT PDF
        </a>
      </div>

      {/* Product card */}
      {product && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name={product.name}
            image={product.image}
            href={`/product/${product.slug}`}
          />
        </div>
      )}
    </PageShell>
  );
}
