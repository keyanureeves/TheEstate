'use client'

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhyChooseUs from "./sections/chooseus"
import FindHelpSection from "./sections/findhelp"
import Hero from "./sections/hero"
import PopularResidences from "./sections/popularresidences"


export default function Home (){
  return (
    <main className = "bg-[#FFF8F3] text-[#2B1B12] ">
      <Navbar/>
      <Hero/>
      <FindHelpSection/>
      <WhyChooseUs/>
      <PopularResidences/>
      <Footer/>
    </main>
  )
}