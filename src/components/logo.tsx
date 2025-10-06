import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" aria-label="Crafts Mantra Homepage">
      <Image
        src="https://i.postimg.cc/cJ3HX0pg/IMG-6981.png"
        alt="Crafts Mantra Logo"
        width={140}
        height={48}
        className="w-auto h-10 md:h-12"
        priority
      />
    </Link>
  );
}
