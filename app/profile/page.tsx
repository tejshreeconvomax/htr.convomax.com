import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <PageShell>
      {/* Visually hidden h1 so the page has exactly one top-level heading for SEO
          without changing the live-site visual layout (which starts with the video). */}
      <h1 className="sr-only">HTR Company Profile</h1>

      {/* Corporate show-reel video — matches the YouTube embed on the live site */}
      <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-black shadow-sm">
        <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
          <iframe
            title="Hi-Tech Resistors - Corporate Show Reel"
            src="https://www.youtube-nocookie.com/embed/UloY_00kOLo?rel=0&playsinline=1&cc_load_policy=0"
            frameBorder={0}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>

      <div className="htr-prose">
        <p>
          <a
            href="https://www.htr-india.com/wp-content/uploads/2025/09/HTR-Presentation_opt.pdf"
            target="_blank"
            rel="noopener"
            className="font-semibold"
          >
            Download HTR Company Presentation PDF Link
          </a>
        </p>
        <p>
          Since inception in 1988, Hi Tech Resistors Pvt Ltd, popularly known as HTR in the
          electronics industry worldwide, has grown to become one of the leading resistor
          manufacturer in the world with presence in 50 countries through a network of
          representatives and distributors, worldwide.
        </p>
        <p>
          HTR&apos;s state of the art manufacturing facility at Nagpur in India produces over a
          hundred thousand wire wound and low ohm current sense resistors everyday in a wide variety
          of mounting and housing configurations.
        </p>
        <p>
          Amongst the very few IATF 16949:2016 certified resistive device manufacturers in the world,
          HTR has a strong presence in the automotive sector through its range of HVAC and ECS
          (Electronic Control Systems) resistive devices.
        </p>
        <p>
          HTR&apos;s business philosophy has always been the supply of the right product at the right
          price. To further this endeavour, the R&amp;D facility works in tandem with the Application
          Engineering department to provide a value bundle of &quot;Product, Information and
          Service&quot; at the optimum price to meet customers&apos; JIT requirements.
        </p>
        <p>
          HTR is one for the first companies to use the automotive &apos;Product Part Approval
          Process&apos; methodology for industrial applications in which quality is always &apos;built
          in at source&apos;.
        </p>
        <p>
          HTR now has the ability to offer techno-economic customised resistive devices for a wide
          range of applications. Please get in touch:{" "}
          <a href="mailto:info@htr-india.com">info@htr-india.com</a>.
        </p>
      </div>
    </PageShell>
  );
}
