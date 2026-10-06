import Image from "next/image";
import Link from "next/link";

export function ProductCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-white p-4">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="border-t border-gray-100 px-3 py-4 text-center">
        <Link
          href={href}
          className="font-serif text-lg font-bold text-htr-blue hover:text-htr-blue-dark"
        >
          {name}
        </Link>
      </div>
    </div>
  );
}
