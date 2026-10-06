import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import { EnquireProvider } from "@/components/EnquireProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingEnquire } from "@/components/EnquireButton";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.htr-india.com"),
  title: {
    default:
      "Resistor Manufacturers in India | Battery Management Shunts, EBW Shunts, Resistive Load banks",
    template: "%s | HTR-India",
  },
  description:
    "Hi Tech Resistors Pvt. Ltd. (HTR), Nagpur, India — an IATF 16949:2016 certified manufacturer of wire wound, current sense, surface mount, automotive and custom-engineered power resistors.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} ${merriweather.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white">
        <EnquireProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingEnquire />
        </EnquireProvider>
      </body>
    </html>
  );
}
