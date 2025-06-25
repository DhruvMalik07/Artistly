"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type Artist = {
  id: number;
  name: string;
  category: string;
  price: string;
  location: string;
};

const mockArtists: Artist[] = [
  { id: 1, name: 'Asha Singh', category: 'Pop Singer', price: '15,000 - 20,000', location: 'Delhi' },
  { id: 2, name: 'Ravi Sharma', category: 'Classical Singer', price: 'Below 15,000', location: 'Mumbai' },
  { id: 3, name: 'Priya Patel', category: 'Dancer', price: '15,000 - 20,000', location: 'Bangalore' },
  { id: 4, name: 'Vikram Rao', category: 'Speaker', price: 'Below 15,000', location: 'Chennai' },
  { id: 5, name: 'DJ Aryan', category: 'Techno DJ', price: 'Above 20,000', location: 'Goa' },
  { id: 6, name: 'DJ Meera', category: 'Bollywood DJ', price: 'Above 20,000', location: 'Delhi' },
  { id: 7, name: 'Sunita Joshi', category: 'Dancer', price: '15,000 - 20,000', location: 'Mumbai' },
  { id: 8, name: 'Rahul Verma', category: 'Pop Singer', price: 'Above 20,000', location: 'Bangalore' },
];

interface ArtistContextType {
  artists: Artist[];
  addArtist: (artist: Omit<Artist, 'id'>) => void;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider = ({ children }: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<Artist[]>([]);

  // Load from localStorage or use mock data
  useEffect(() => {
    const stored = localStorage.getItem('artists');
    if (stored) {
      setArtists(JSON.parse(stored));
    } else {
      setArtists(mockArtists);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('artists', JSON.stringify(artists));
  }, [artists]);

  const addArtist = (artist: Omit<Artist, 'id'>) => {
    setArtists(prev => [
      { ...artist, id: Date.now() },
      ...prev,
    ]);
  };

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error('useArtistContext must be used within ArtistProvider');
  return ctx;
}; 