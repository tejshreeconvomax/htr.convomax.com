import Image from "next/image";
import { contact } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-10 bg-footer text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        {/* Contact */}
        <div>
          <p className="font-serif text-2xl font-bold text-htr-blue">Contact Us</p>
          <ul className="mt-4 space-y-3">
            {contact.phones.map((p) => (
              <li key={p} className="border-b border-white/10 pb-2">
                <a href={contact.telHref} className="flex items-center gap-2 text-white/90 hover:text-white">
                  <span className="text-htr-blue">✆</span> {p}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-2xl font-bold text-htr-blue">Email us</p>
          <ul className="mt-4 space-y-3">
            {contact.emails.map((e) => (
              <li key={e.address} className="border-b border-white/10 pb-2">
                <a href={`mailto:${e.address}`} className="flex items-center gap-2 text-white/90 hover:text-white">
                  <span className="text-htr-blue">✉</span> {e.address} ({e.note})
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company + App */}
        <div>
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="HTR" width={64} height={64} />
            <div>
              <p className="font-serif text-xl font-bold text-htr-blue">Hi Tech Resistors Pvt. Ltd.</p>
              <p className="text-sm tracking-wide text-white/70">AN IATF 16949:2016 CERTIFIED COMPANY</p>
            </div>
          </div>

          <p className="mt-8 font-serif text-xl font-bold text-htr-blue">HTR Web App</p>
          <a href={contact.webApp} target="_blank" rel="noopener" className="mt-4 inline-block">
            <Image src="/images/app-logo.png" alt="HTR Web App" width={120} height={58} />
          </a>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={contact.appStore} target="_blank" rel="noopener">
              <Image src="/images/appstore.png" alt="Download on the App Store" width={135} height={46} />
            </a>
            <a href={contact.googlePlay} target="_blank" rel="noopener">
              <Image src="/images/googleplay.png" alt="Get it on Google Play" width={135} height={46} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-footer px-4 py-3 text-center text-xs text-white/60">
        <nav className="mb-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
          <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/shop" className="hover:text-white">Shop</a>
          <a href="/my-account" className="hover:text-white">My Account</a>
        </nav>
      </div>
      <div className="bg-htr-blue py-3 text-center text-sm text-white">
        Website Design &amp; Marketing Partner –{" "}
        <a href={contact.convomax} target="_blank" rel="noopener" className="font-semibold underline">
          Convomax
        </a>
      </div>
    </footer>
  );
}
