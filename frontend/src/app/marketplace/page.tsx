"use client";

import { useState } from "react";
import {Card} from "@/app/components/card";
import { CardContent } from "@/app/components/card";
import { Button } from "@/app/components/button";



interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  seller: string;
  available: number;
}

export default function MarketplacePage() {
  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: "Luxury Apartment in Nairobi",
      description: "3-bedroom, fully furnished, near CBD.",
      price: "0.5 ETH",
      image: "/placeholder.svg", // replace with IPFS/NFT metadata later
      seller: "0x1234...abcd",
      available: 10,
    },
    {
      id: 2,
      title: "Beachfront Villa in Mombasa",
      description: "5-bedroom, ocean view, private pool.",
      price: "1.2 ETH",
      image: "/placeholder.svg",
      seller: "0xabcd...5678",
      available: 5,
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🏠 Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <CardContent className="p-4">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600 mb-2">{property.description}</p>
              <p className="text-sm text-gray-500">
                Seller: {property.seller}
              </p>
              <p className="text-lg font-bold mt-2">{property.price}</p>
              <p className="text-sm text-gray-600">
                Available: {property.available}
              </p>
              <Button className="w-full mt-4">Buy</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
