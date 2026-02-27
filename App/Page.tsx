"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search } from "lucide-react";
import Logo from "../components/Logo";

export default function ChezaKamaWeweApp() {
  const [amount, setAmount] = useState(100);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const predefinedAmounts = [50, 100, 250, 500];

  const creators = [
    { id: 1, name: "Tohu Tarus Podcast", followers: "12.5K", category: "Podcast" },
    { id: 2, name: "Nairobi Street Stories", followers: "8.2K", category: "Storytelling" },
    { id: 3, name: "Kenyan Tech Weekly", followers: "5.9K", category: "Technology" },
    { id: 4, name: "Mombasa Music Sessions", followers: "14.1K", category: "Music" }
  ];

  const filteredCreators = creators.filter((creator) =>
    creator.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSupport = () => {
    alert(`Asante ${name || "Supporter"}! You supported KES ${amount}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-orange-900 text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
        <Logo />
        <button className="bg-white text-black px-4 py-2 rounded-2xl">
          Login
        </button>
      </div>

      {/* CREATORS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Discover Creators</h1>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            placeholder="Search creators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 rounded-2xl text-black w-full py-2"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <motion.div
              key={creator.id}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/10 p-6 rounded-3xl">
                <div className="h-20 w-20 bg-white/20 rounded-full mx-auto mb-4" />
                <h2 className="text-xl text-center">{creator.name}</h2>
                <p className="text-gray-400 text-center text-sm">
                  {creator.category}
                </p>
                <div className="flex justify-center gap-2 text-gray-300 mt-2">
                  <Users size={16} /> {creator.followers}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="px-6 pb-20 max-w-xl mx-auto">
        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl text-center mb-6">Quick Support ☕</h2>

          <div className="flex gap-3 flex-wrap justify-center mb-6">
            {predefinedAmounts.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className="border px-4 py-2 rounded-2xl"
              >
                KES {value}
              </button>
            ))}
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mb-4 py-2 px-3 rounded-2xl text-black"
          />

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 py-2 px-3 rounded-2xl text-black"
          />

          <textarea
            placeholder="Leave a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-4 py-2 px-3 rounded-2xl text-black"
          />

          <button
            onClick={handleSupport}
            className="w-full bg-orange-600 py-3 rounded-2xl"
          >
            Support Now ☕
          </button>
        </div>
      </section>

      <div className="text-center text-gray-400 text-sm pb-10">
        © {new Date().getFullYear()} Cheza Kama Wewe 🇰🇪
      </div>
    </div>
  );
      }
