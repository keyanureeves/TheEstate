"use client";

import { useState } from "react";
import {Card} from "@/app/components/card";
import { CardContent } from "@/app/components/card";
import { Button } from "@/app/components/button";
import { middleEllipsis } from "../../lib/utils";

interface Property {
  id: number;
  title: string;
  type: string;
  yearBuilt: number;
  condition: string;
  tokensOwned: number;
  imageUrl: string;
}

export default function ProfilePage() {
  const [walletAddress] = useState(
    "0x1234567890abcdef1234567890abcdef12345678"
  );

  // Mock data for owned properties
  const ownedProperties: Property[] = [
    {
      id: 1,
      title: "Luxury Apartment in Nairobi",
      type: "Apartment",
      yearBuilt: 2018,
      condition: "Excellent",
      tokensOwned: 150,
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: 2,
      title: "Beachfront Villa",
      type: "Villa",
      yearBuilt: 2015,
      condition: "Good",
      tokensOwned: 50,
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* User Info */}
      <div className="flex items-center gap-6 mb-12">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
          U
        </div>
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-gray-600">
            Wallet: {middleEllipsis(walletAddress, 6)}
          </p>
          <Button className="mt-2">Edit Profile</Button>
        </div>
      </div>

      {/* Owned Properties */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Owned Properties</h3>
        {ownedProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownedProperties.map((property) => (
              <Card key={property.id}>
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-40 w-full object-cover rounded-t-2xl"
                />
                <CardContent>
                  <h4 className="text-lg font-semibold">{property.title}</h4>
                  <p className="text-sm text-gray-500">
                    {property.type} • Built {property.yearBuilt}
                  </p>
                  <p className="text-sm text-gray-500">
                    Condition: {property.condition}
                  </p>
                  <p className="mt-2 font-medium">
                    Tokens Owned: {property.tokensOwned}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No properties owned yet.</p>
        )}
      </section>
    </div>
  );
}
