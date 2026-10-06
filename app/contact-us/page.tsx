import type { Metadata } from "next";
import { TitleBar } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <TitleBar>Contact Us</TitleBar>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 font-serif text-xl font-bold text-htr-blue">Send us a message</h2>
          <ContactForm />
        </div>
        <div className="htr-prose">
          <h3 className="!text-gray-800">Address</h3>
          <p>{contact.address}</p>

          <h3 className="!text-gray-800">Telephone</h3>
          <p>{contact.telephoneFull}</p>

          <h3 className="!text-gray-800">WhatsApp</h3>
          <p>
            <a href={contact.whatsappHref} target="_blank" rel="noopener">
              {contact.whatsapp}
            </a>
          </p>

          <h3 className="!text-gray-800">Email ID</h3>
          <p>
            <a href="mailto:info@htr-india.com">info@htr-india.com</a>,{" "}
            <a href="mailto:sales@htr-india.com">sales@htr-india.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
