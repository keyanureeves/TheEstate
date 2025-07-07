'use clients'
import Navbar from './components/navbar'

export default function page() {
  return (
    <div className="bg-[DDC7BB]">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Find Your dream Home </h1>
        <p className="text-lg mb-8">Explore the best properties in your area</p>
        <button className="bg-[DDC7BB]/90 text-white px-6 py-3 rounded hover:bg-[DDC7BB]/90 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}