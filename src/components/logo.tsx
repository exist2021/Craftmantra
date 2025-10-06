import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" aria-label="Crafts Mantra Homepage">
      <Image
        src="https://i.postimg.cc/yYRb15CX/IMG-6980.jpg"
        alt="Crafts Mantra Logo"
        width={140}
        height={48}
        className="w-auto h-10 md:h-12"
        priority
      />
    </Link>
  );
}
