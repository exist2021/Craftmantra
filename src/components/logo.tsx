import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Craft Mantra Homepage">
      <Image
        src="https://i.postimg.cc/fbKdHVcV/IMG-7530.png"
        alt="Craft Mantra Logo"
        width={200}
        height={55}
        className="h-14 w-auto"
        priority
      />
    </Link>
  );
}
