"use client";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';
import { useArtistContext } from "@/context/ArtistContext";

const categories = [
  'All',
  'Pop Singer',
  'Classical Singer',
  'Dancer',
  'Speaker',
  'Techno DJ',
  'Bollywood DJ',
];

const locations = ['All', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Goa'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Below 15,000', min: 0, max: 15000 },
  { label: '15,000 - 20,000', min: 15000, max: 20000 },
  { label: 'Above 20,000', min: 20001, max: Infinity },
];

type Artist = {
  id: number;
  name: string;
  category: string;
  price: string;
  location: string;
};

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-t-4 border-b-4 border-transparent hover:border-pink-400">
      <FaUserCircle className="h-16 w-16 text-blue-400 mb-3" />
      <div className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{artist.name}</div>
      <div className="text-gray-700 mb-1 font-medium">{artist.category}</div>
      <div className="text-gray-600 mb-1">{artist.location}</div>
      <div className="text-gray-800 mb-2 font-semibold">₹{artist.price}</div>
      <button className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-semibold shadow hover:from-pink-500 hover:to-blue-500 transition">Ask for Quote</button>
    </div>
  );
}

export default function ArtistsPage() {
  const { artists } = useArtistContext();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('All');
  const [price, setPrice] = useState('All');

  const filteredArtists = artists.filter((artist: Artist) => {
    const matchCategory = category === 'All' || artist.category === category;
    const matchLocation = location === 'All' || artist.location === location;
    const priceRange = priceRanges.find((p) => p.label === price) || priceRanges[0];
    const matchPrice = price === 'All' || artist.price === priceRange.label;
    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">Artist Listing</h1>
      <div className="mb-8 flex flex-wrap gap-4 items-center bg-white/90 p-4 rounded-xl shadow border border-gray-300">
        <select value={category} onChange={e => setCategory(e.target.value)} className="border border-gray-400 p-2 rounded focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-800 font-semibold">
          {categories.map(cat => <option key={cat} value={cat} className="text-gray-800 font-semibold">{cat}</option>)}
        </select>
        <select value={location} onChange={e => setLocation(e.target.value)} className="border border-gray-400 p-2 rounded focus:ring-2 focus:ring-purple-400 bg-gray-100 text-gray-800 font-semibold">
          {locations.map(loc => <option key={loc} value={loc} className="text-gray-800 font-semibold">{loc}</option>)}
        </select>
        <select value={price} onChange={e => setPrice(e.target.value)} className="border border-gray-400 p-2 rounded focus:ring-2 focus:ring-pink-400 bg-gray-100 text-gray-800 font-semibold">
          {priceRanges.map(pr => <option key={pr.label} value={pr.label} className="text-gray-800 font-semibold">{pr.label}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredArtists.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No artists found.</div>
        ) : (
          filteredArtists.map(artist => <ArtistCard key={artist.id} artist={artist} />)
        )}
      </div>
    </main>
  );
}
