import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">EmarhRoom</h1>
        <div className="space-x-6">
          <Link href="/register" className="text-gray-600 hover:text-blue-600">
            Inscription
          </Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
}
