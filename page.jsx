import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">TechGearHub</h1>
        <p className="text-gray-400">Your Ultimate Source for Tech Gear Reviews & Deals</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <h2 className="text-xl font-semibold">Logitech MX Master 3S</h2>
          <p className="text-gray-400 text-sm mb-2">Advanced wireless mouse for productivity</p>
          <div className="mb-4">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/8NfkgjD7zG0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-green-400 font-bold">$99.99</p>
          <p className="text-sm text-gray-500 mb-2">(Tracks price over time – coming soon!)</p>
          <Link href="https://www.amazon.com/dp/B0B9RL6ZLF" target="_blank">
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded mt-2">Buy on Amazon</button>
          </Link>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-10">
        &copy; 2025 TechGearHub. Affiliate links may earn us a commission.
      </footer>
    </div>
  );
}
