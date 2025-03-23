import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Login() {
  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Connexion</h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" type="email" placeholder="Email" />
          <input className="w-full p-3 border rounded" type="password" placeholder="Mot de passe" />
          <button className="bg-blue-600 text-white w-full p-3 rounded">Se connecter</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}