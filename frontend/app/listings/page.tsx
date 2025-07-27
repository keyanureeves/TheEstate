'use client'

import Navbar from "@/components/navbar"
import ListingCard from "@/components/ListingCard"
import Footer from "@/components/footer"

export default function ListingsPage (){
  const listings = [
    {
      id: '1',
      title: 'Modern Apartment in Nairobi',
      location: 'Kilimani, Nairobi',
      price: 'KES 8,000,000',
      image: '/images/apartment1.jpg',
    },
    {
      id: '2',
      title: 'Luxurious Villa',
      location: 'Runda, Nairobi',
      price: 'KES 40,000,000',
      image: '/images/villa1.jpg',
    },
  ]

  return (
    <main className="bg-[#FFF8F3] text-[#2B1B12] min-h-screen">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Available Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
