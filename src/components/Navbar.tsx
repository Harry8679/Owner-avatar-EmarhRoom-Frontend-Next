import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">EmarhRoom</h1>
      <div className="space-x-4">
        <Link href="/register">Inscription</Link>
        <Link href="/login">Connexion</Link>
      </div>
    </nav>
  );
}
