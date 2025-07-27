'use client'

import Image from 'next/image'

interface AgentProps {
  agent: {
    id: string
    name: string
    location: string
    phone: string
    email: string
    image: string
  }
}

const AgentCard = ({ agent }: AgentProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{agent.location}</p>
        <p className="text-sm text-gray-700">📞 {agent.phone}</p>
        <p className="text-sm text-gray-700">✉️ {agent.email}</p>
      </div>
    </div>
  )
}

export default AgentCard
