import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Craft Mantra Homepage">
      <Image
        src="https://i.postimg.cc/cJ3HX0pg/IMG-6981.png"
        alt="Craft Mantra Logo"
        width={200}
        height={50}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}
