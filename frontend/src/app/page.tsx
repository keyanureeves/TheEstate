'use client'

import Navbar from "./components/navbar"
import Hero from "./pages/hero"


export default function home (){
  return (
    <main className = "bg-[#FFF8F3] text-[#2B1B12] ">
      <Navbar/>
      <Hero/>

    </main>
  )
}