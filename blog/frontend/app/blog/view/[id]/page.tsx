"use client"
import BlogReadSection from '@/components/BlogReadSection';
import React from 'react'
interface PageProps {
  params: Promise<{ id: string }>;
  id: string;
};


export default async function page({ params }:PageProps) {
  const { id } = await params;
  console.log(id);
  // console.log(params, "this is params") this method says promise pending

  return (
    <div>
      <BlogReadSection id={id} />
    </div>
  )
}