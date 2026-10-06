import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "HTR India | Precision Marking & Taping Solutions for Resistors",
};

const ammoRows = [
  ["HTA/VHIA/HAA/FRS/HFW/HFA", "H1BA/0.5MC/1MC/1AC/A1/A2/A2F/A2FS/HF2W/F1/F2/F3", "6", "10", "52", "64", "100", "1000"],
  ["HIA/HAA/RL", "D0.5/H0.5/H1/H2/RL0.5/A2.5/RL1/RL2", "6", "10", "52", "64", "100", "1000"],
  ["FRS/HFW", "A1F/A1FS/H1F/H1FS/H2F/H2FS/F1W/HF1W/F2W", "6", "10", "52", "64", "100", "1000"],
  ["HIA/HFA/FRS/HAA/HFW", "H3/H4/HF3W/H3F/H3FS/H4F/H4FS/D2F/D2FS/A5F/A5FS/D2/A5/DF2W/F3W/F5W/HF4W", "6", "10", "63", "75", "100", "600"],
  ["VHIA", "4C/3C/4AC", "6", "10", "63", "75", "100", "750"],
  ["FRS/HIA/HTA/HFW", "H3AF/H3AFS/H3A/H2BA", "6", "10", "63", "75", "100", "750"],
  ["VHIA/HAA", "3MC/4MC/2.5C1/2.5C/A3/A4", "6", "10", "63", "75", "100", "750"],
  ["RL", "RL3", "6", "10", "63", "75", "100", "600"],
  ["RL", "F3/RL4", "6", "10", "74", "86", "100", "750"],
  ["HIA/RL/FRS/HFW", "H5/D5/RL5/5ACF/5ACFS/HF5W", "6", "10", "74", "86", "100", "300"],
  ["VHIA/HFA/HFW", "5C1/5C/5AC/HF5W/F7", "6", "10", "74", "86", "100", "300"],
  ["HTA/VHIA", "H6A/4CL/7AC", "6", "10", "74", "86", "100", "300"],
  ["HIA", "H5A", "6", "10", "74", "86", "100", "600"],
  ["HFA", "F5", "6", "10", "74", "86", "100", "900"],
  ["HIA/VHIA", "H7A/7C1", "6", "15", "74", "86", "150", "175"],
  ["HIA/HTA/HFA", "H7/H9A/F7/9WAI6", "6", "10", "79", "91", "100", "300"],
  ["HIA/VHIA/RL", "H10A/H15/10C/10C1/RL10", "6", "15", "79", "91", "150", "175"],
  ["VHIA", "10AC", "6", "15", "79", "91", "150", "175"],
  ["HIA", "H10", "6", "15", "90", "102", "150", "175"],
  ["HTA", "H12A", "6", "10", "90", "102", "100", "300"],
  ["HFA", "F9/F10", "6", "10", "90", "102", "100", "600"],
  ["VHIA", "15AC/15AC1/13C1", "6", "15", "90", "102", "150", "175"],
  ["HCA", "C1 / C2", "6", "10", "63", "75", "100", "500"],
  ["HEA / HEAL", "C4 / LC4", "6", "10", "82", "94", "100", "500"],
  ["HEA / HEAL", "C5B / C6 / LC5", "6", "10", "89", "101", "100", "500"],
  ["HEA", "C7A", "6", "10", "79", "91", "100", "500"],
  ["HEA", "C7B/LC7", "6", "15", "89", "101", "150", "175"],
  ["HEA", "C9 / C10", "6", "15", "79", "91", "150", "175"],
  ["HEA", "C11", "6", "15", "90", "102", "150", "175"],
];

const reelRows = [
  ["HTA/VHIA/HAA/FRS/HFW", "H1BA/0.5MC/1MC/1AC/A1/A2/A2F/A2FS/HF2W", "6", "10", "52", "64", "100", "2500"],
  ["HIA/HAA/RL", "D0.5/H0.5/H1/H2/RL0.5/A2.5/RL1/ RL2", "6", "10", "52", "64", "100", "2000"],
  ["FRS/HFW", "A1F/A1FS/H1F/H1FS/H2F/H2FS/F1W/HF1W/F2W", "6", "10", "52", "64", "100", "2000"],
  ["HIA/HFA/FRS/HAA/HFW", "H3/H4/F1/H3F/ H3FS/H4F/H4FS/D2F/D2FS/A5F/A5FS/F2/D2/A5/ DF2W/F3W/F5W/HF4W", "6", "10", "63", "75", "100", "1250"],
  ["VHIA", "4C/3C/4AC", "6", "10", "63", "75", "100", "1250"],
  ["FRS/HIA/HTA/HFW", "H3AF/H3AFS/H3A/H2BA/HF3W", "6", "10", "63", "75", "100", "1250"],
  ["VHIA/HAA", "3MC/4MC/2.5C1/2.5C/A3/A4", "6", "10", "63", "75", "100", "1500"],
  ["RL", "RL3", "6", "10", "63", "75", "100", "1250"],
  ["RL/HFA", "F3/RL4", "6", "10", "74", "86", "100", "1250"],
  ["HIA/RL/FRS/HFW", "H5/D5/RL5/5ACF/5ACFS/HF5W", "6", "10", "74", "86", "100", "750"],
  ["VHIA", "5C1/5C/5AC", "6", "10", "74", "86", "100", "800"],
  ["HTA/VHIA", "H6A/4CL/7AC", "6", "10", "74", "86", "100", "800"],
  ["HIA", "H5A", "6", "10", "74", "86", "100", "1000"],
  ["HFA", "F5", "6", "10", "74", "86", "100", "1250"],
  ["HIA/VHIA", "H7A/7C1", "6", "15", "74", "86", "150", "450"],
  ["HIA/HTA/HFA", "H7/H9A/F7", "6", "10", "79", "91", "100", "800"],
  ["HIA/VHIA", "H10A/H15/10C/10C1", "6", "15", "79", "91", "150", "450"],
  ["VHIA", "10AC", "6", "15", "79", "91", "150", "450"],
  ["HTA", "H12A", "6", "10", "90", "102", "100", "800"],
  ["HFA", "F9/F10", "6", "10", "90", "102", "100", "1250"],
  ["HIA", "H10", "6", "15", "90", "102", "150", "450"],
  ["VHIA", "15AC/15AC1/13C1", "6", "15", "90", "102", "150", "450"],
  ["HCA", "C1/C2", "6", "10", "63", "75", "100", "1000"],
  ["HEA/HEAL", "C4/LC4", "6", "10", "82", "94", "100", "1000"],
  ["HEA/HEAL", "C5B/C6/LC5", "6", "10", "89", "101", "100", "1000"],
  ["HEA", "C7A", "6", "10", "79", "91", "100", "1000"],
  ["HEA", "C7B/LC7", "6", "15", "89", "101", "150", "450"],
  ["HEA/HEAL/RL", "C9/C10/RL10/LC9", "6", "15", "79", "91", "150", "450"],
  ["HEA", "C11", "6", "15", "90", "102", "150", "450"],
];

function SpecTable({ rows, lastCol }: { rows: string[][]; lastCol: string }) {
  return (
    <div className="htr-prose overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>HTR SERIES</th>
            <th>HTR TYPE</th>
            <th>a±1</th>
            <th>S±0.5</th>
            <th>b±2</th>
            <th>C±2</th>
            <th>10xS±2</th>
            <th>{lastCol}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MarkingTapingPage() {
  return (
    <PageShell>
      <section>
        <h1 className="htr-title-bar mb-5 !text-lg">
          TAPE &amp; AMMO PACK SPECIFICATIONS FOR HIA / HTA / VHIA / HAA / FRS / HFW / RL / HFA / HEA
          / HEAL / HCA / HCAL SERIES RESISTORS
        </h1>
        <p className="htr-prose">
          (These taping specifications have been formulated based on broad guidelines extracted from
          DIN-IEC-286-1 standards)
        </p>
        <Image
          src="/images/misc/tape-ammo.jpg"
          alt="Tape & Ammo Pack Specifications"
          width={900}
          height={400}
          className="my-5 h-auto w-full max-w-2xl rounded border border-gray-200"
        />
        <div className="htr-prose">
          <p className="font-semibold">Where</p>
          <ul className="list-disc pl-6">
            <li><em>a</em> stands for the width of the tape.</li>
            <li><em>b</em> stands for inner distance between two tapes.</li>
            <li><em>c</em> stands for outer distance between two tapes.</li>
            <li><em>s</em> stands for the pitch between resistors.</li>
          </ul>
          <p><strong>Note:</strong> The maximum difference between D1 &amp; D2 is 1.40mm.</p>
          <p>All dimensions stated below are in mm.</p>
        </div>
        <SpecTable rows={ammoRows} lastCol="NUMBER OF PIECES PER AMMO PACK" />
        <div className="htr-prose">
          <p>
            Approximate dimension of the carton containing the ammo pack is 275mm x 100mm x 110mm or
            275mm x 145mm x 115mm. Approximate dimension of the master carton: 450mm x 290mm x 330mm.
          </p>
          <p>Number of ammo pack carton packed in a master carton: 8 nos.</p>
          <p><strong>Marking:</strong> The resistors will be marked with suffix &apos;T&apos; after the type.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="htr-title-bar mb-5 !text-lg">
          TAPE &amp; REEL SPECIFICATIONS FOR HIA / HTA / VHIA / HAA / FRS / HFW / RL / HFA / HEA /
          HEAL / HCA / HCAL SERIES RESISTORS
        </h2>
        <p className="htr-prose">
          (These taping specifications have been formulated based on broad guidelines extracted from
          DIN-IEC-286-1 standards)
        </p>
        <Image
          src="/images/misc/tape-reel.jpg"
          alt="Tape & Reel Specifications"
          width={900}
          height={400}
          className="my-5 h-auto w-full max-w-2xl rounded border border-gray-200"
        />
        <div className="htr-prose">
          <p className="font-semibold">Where</p>
          <ul className="list-disc pl-6">
            <li><em>a</em> stands for the width of the tape.</li>
            <li><em>b</em> stands for inner distance between two tapes.</li>
            <li><em>c</em> stands for outer distance between two tapes.</li>
            <li><em>e</em> stands for the inner distance of the reel.</li>
            <li><em>f</em> stands for the total width of the reel.</li>
            <li><em>S</em> stands for the pitch between resistors.</li>
          </ul>
          <p className="font-semibold">Note</p>
          <ul className="list-disc pl-6">
            <li>The maximum difference between D1 &amp; D2 is 1.40 mm.</li>
            <li>All dimensions stated below are in mm.</li>
            <li>Dimensions &apos;e&apos; &amp; &apos;f&apos; are given as approximate guidelines only.</li>
          </ul>
        </div>
        <SpecTable rows={reelRows} lastCol="NUMBER OF PIECES PER REEL" />
        <div className="htr-prose">
          <p>
            Approximate dimension of the carton containing the reel is : 330mm x 125mm x 335mm.
            Approximate dimension of the master carton: 630mm x 330mm x 360mm.
          </p>
          <p>Number of cartons packed in a master carton : 4 nos.</p>
          <p><strong>Marking:</strong> The resistors will be marked with suffix &apos;TR&apos; after the type.</p>
        </div>
      </section>
    </PageShell>
  );
}
