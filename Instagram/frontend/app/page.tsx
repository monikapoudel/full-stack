"use client"
import React from 'react';
import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import FeedSection from "@/components/FeedSection";


export default function Page() {
  return (
    <div className="w-4/12 mx-auto bg-gray-100 min-h-screen p-4 space-y-6">
<Navbar/>
<StorySection/>
<FeedSection/>
    </div>
  );
}
