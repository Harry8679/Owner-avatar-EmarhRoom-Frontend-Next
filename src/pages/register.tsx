import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Register() {
  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Inscription</h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" type="text" placeholder="Prénom" />
          <input className="w-full p-3 border rounded" type="text" placeholder="Nom" />
          <input className="w-full p-3 border rounded" type="email" placeholder="Email" />
          <input className="w-full p-3 border rounded" type="password" placeholder="Mot de passe" />
          <button className="bg-blue-600 text-white w-full p-3 rounded">S'inscrire</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
