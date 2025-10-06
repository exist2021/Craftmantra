import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Crafts Mantra Homepage">
      <Image
        src="https://i.postimg.cc/vTgS621k/IMG-6983.jpg"
        alt="Crafts Mantra Icon"
        width={48}
        height={48}
        className="h-10 w-10 md:h-12 md:w-12 rounded-full"
        priority
      />
      <div className="flex flex-col">
        <span className="font-headline text-2xl font-bold leading-none text-primary">
          Crafts Mantra
        </span>
        <span className="font-body text-xs leading-tight text-accent">
          touching lives while going green
        </span>
      </div>
    </Link>
  );
}
