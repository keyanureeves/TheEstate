import AgentCard from '@/components/AgentsCards';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const agents = [
  {
    id: '1',
    name: 'Jane Wambui',
    location: 'Westlands, Nairobi',
    phone: '0712 345 678',
    email: 'jane@realestate.co.ke',
    image: '/bored_ape.png',
  },
  {
    id: '2',
    name: 'John Mwangi',
    location: 'Karen, Nairobi',
    phone: '0721 987 654',
    email: 'john@realestate.co.ke',
    image: '/bored_ape.png',
  },
];

export default function AgentsPage() {
  return (
    <main className="bg-[#FFF8F3] text-[#2B1B12] min-h-screen">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Meet Our Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}
