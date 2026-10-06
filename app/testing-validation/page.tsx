import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Testing & Validation" };

const items = [
  "Visual & Resistance Checking Test.",
  "Safety Fusing Test.",
  "Operating Voltage Test",
  "Insulation Test(Measurement range 1MΩ to 999GΩ)",
  "Voltage Resistance Test",
  "Thermal Cycle Test",
  "Resistance to Thermal Shocks",
  "Storage Test – High Temperature",
  "Storage Test – Low Temperature",
  "Humidity Resistance Test",
  "Water Dripping Test",
  "Salt Spray Test",
  "Durability Test",
  "Connector to Terminal Push Pull Strength Test",
  "Thermal Fuse Connection Test",
  "Drop Test",
  "Application of Contact Pins/Plug System Test",
  "Surrounding Temperature Test",
  "Standard Resistors for Calibration of Ohm meters (0.01% and 0.02% accuracy",
  "High Voltage Breakdown (flash) tester",
  "Short time overload tester(up to 10 times rated power for 5 seconds)",
  "Inductance tester (LCR Test Bridge)",
  "TCR tester – temperature accuracy +/- 1°C",
  "Life tester",
  "High Temperature chamber upto 250°C ( accuracy +/-1°C )",
  "Plating test unit / Solderability test unit .",
  "Pulse tester ( As per IEC-61000-4-5 )",
  "Insize ISM Pro Software",
];

export default function TestingValidationPage() {
  return (
    <PageShell>
      <TitleBar>Testing and Validation</TitleBar>
      <ul className="htr-prose list-disc space-y-1 pl-6">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </PageShell>
  );
}
