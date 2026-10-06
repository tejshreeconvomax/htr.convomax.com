import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";
import { ProductCard } from "@/components/ProductCard";
import { featuredSlugs, productMap } from "@/lib/products";

const featuredNames: Record<string, string> = {
  "hbe-size-2726": "HBE – Size 2726",
  "heb-size-8518-8420-6315-6918-6018-5216-7036-5520": "HEB – Size 8518/8420",
  hah: "HAH",
  "hans-c": "HANS-C",
  hfo: "HFO",
  hcp: "HCP",
};

export default function Home() {
  const featured = featuredSlugs.map((s) => productMap[s]).filter(Boolean);

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          <Sidebar />
          <div className="min-w-0 flex-1">
            {/* About us — the page's single h1 for SEO */}
            <h1 className="htr-title-bar mb-5">About us</h1>
            <div className="htr-prose">
              <p>
                Located in Nagpur, India, Hi Tech Resistors Private Limited is an IATF 16949:2016
                Certified Manufacturing Company offering full spectrum of resistor technologies along
                with custom engineered solutions.
              </p>
              <p>
                Our product range includes Wire Wound Resistors, Current Sense Resistors, Surface
                Mount Resistors, Automotive and Custom-made Resistors. Our state-of-the-art
                manufacturing facility at Nagpur in India produces top quality power resistors for
                different industries that are crafted to meet the highest possible standards. Having
                strong presence in the automotive sector through our range of HVAC and ECS (Electronic
                Control Systems) resistive devices , we look into the future with a mission to
                establish a global presence by offering supreme power resistor solutions.
              </p>
            </div>

            {/* Featured products */}
            <h2 className="htr-title-bar mb-6 mt-10">Featured Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <ProductCard
                  key={p.slug}
                  name={featuredNames[p.slug] ?? p.name}
                  image={p.image}
                  href={`/product/${p.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
