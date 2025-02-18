"use client"
import BlogCard from '@/components/Blogcard'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export interface IArticle{
  _id:string;
  title:string;
  thumbnail:string;
  content:string;
  author:string;

}

export default function Page() {
  const[articles,setArticles] = useState<IArticle[]>([]);
  const[loading,setLoading] = useState<boolean>(false);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://blogs-platform-backend-68ma.onrender.com/articles")
      console.log(response.data.articles, "this is a params");
      setArticles(response.data.articles);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

console.log(articles,"this is articles");

  return (
    <div className='p-4'>
      
      <Navbar />
      <HeroSection />
      <BlogCard article ={articles} />
      <Footer />
    </div>
  )
}
 