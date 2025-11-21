import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Craft Mantra Homepage">
      <Image
        src="https://i.postimg.cc/ZRfxfXJH/46e799a9-3699-405d-98bf-cb2bd81daa5d.jpg"
        alt="Craft Mantra Logo"
        width={56}
        height={56}
        className="h-14 w-14"
        priority
      />
    </Link>
  );
}
