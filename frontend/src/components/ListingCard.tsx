// src/components/ListingCard.tsx
import Image from 'next/image'

interface ListingProps {
  listing: {
    id: string
    title: string
    location: string
    price: string
    image: string
  }
}

const ListingCard = ({ listing }: ListingProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{listing.title}</h3>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <p className="text-lg font-bold mt-2">{listing.price}</p>
      </div>
    </div>
  )
}

export default ListingCard
