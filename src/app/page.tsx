import Link from 'next/link';
import { FaMicrophoneAlt, FaMusic, FaUserFriends, FaRegSmile, FaHeadphones, FaCompactDisc } from 'react-icons/fa';
import { ArtistProvider } from "@/context/ArtistContext";

const categories = [
  { name: 'Pop Singer', icon: <FaMicrophoneAlt className="h-10 w-10 text-pink-500" /> },
  { name: 'Classical Singer', icon: <FaMusic className="h-10 w-10 text-purple-600" /> },
  { name: 'Dancer', icon: <FaRegSmile className="h-10 w-10 text-yellow-500" /> },
  { name: 'Speaker', icon: <FaUserFriends className="h-10 w-10 text-blue-500" /> },
  { name: 'Techno DJ', icon: <FaHeadphones className="h-10 w-10 text-green-500" /> },
  { name: 'Bollywood DJ', icon: <FaCompactDisc className="h-10 w-10 text-red-500" /> },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <header className="p-4 bg-white/80 shadow flex justify-between items-center rounded-b-xl">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">Artistly.com</h1>
        <nav className="space-x-4">
          <Link href="/artists" className="text-blue-700 font-semibold hover:underline">Artists</Link>
          <Link href="/onboard" className="text-purple-700 font-semibold hover:underline">Onboard Artist</Link>
          <Link href="/dashboard" className="text-pink-700 font-semibold hover:underline">Dashboard</Link>
        </nav>
      </header>
      <section className="py-16 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white rounded-xl mx-2 mt-4 shadow-lg">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Connecting Event Planners & Artists</h2>
        <p className="mb-8 text-xl font-medium drop-shadow">Book top performers for your next event. Discover, shortlist, and connect with artists easily.</p>
        <Link href="/artists" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Explore Artists</Link>
      </section>
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/artists?category=${encodeURIComponent(cat.name)}`}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-t-4 border-b-4 border-transparent hover:border-blue-400 cursor-pointer"
          >
            {cat.icon}
            <span className="text-2xl font-bold mb-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{cat.name}</span>
            <span className="text-gray-500">Category</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
