import BlogCard from '@/components/Blogcard'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='p-4'>
      <Navbar/>
      <HeroSection/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}