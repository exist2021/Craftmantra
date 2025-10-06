import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" aria-label="Crafts Mantra Homepage">
      <span className="text-2xl sm:text-3xl font-bold font-headline text-primary">
        Crafts Mantra
      </span>
    </Link>
  );
}
