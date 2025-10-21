import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Craft Mantra Homepage">
      <span className="font-headline text-2xl font-bold text-primary">Craft Mantra</span>
    </Link>
  );
}
