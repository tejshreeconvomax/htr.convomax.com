import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <PageShell>
      <TitleBar>Disclaimer</TitleBar>
      <div className="htr-prose">
        <p>
          The information contained in this website is for general information purposes only. The
          information provided by HTR is correct and we endeavor to keep the information up to date
          and correct, we make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, suitability or availability with respect to the website
          or the information, products, services or related graphics contained on the website for
          any purpose.
        </p>
        <p>
          In no event shall we be held liable for any loss or damage including without limitation,
          indirect or consequential loss or damage, or any loss or damage whatsoever arising from
          improper or incorrect use of products or information mentioned on this website.
        </p>
        <p>
          Although all representation made about the products on this website is true, we insist
          that you should test our products in actuality to ascertain the data and the suitability
          of the product for your purpose. In no case shall HTR be liable for any occurrence due to
          use/improper use of our products.
        </p>
        <p>
          Every effort, however, is made to keep the website and it&apos;s content updated with
          correct information form time to time.
        </p>
      </div>
    </PageShell>
  );
}
