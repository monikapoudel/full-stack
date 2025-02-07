import { BlogCard } from '@/components/BlogCard'
import { Faq } from '@/components/Faq'
import { Button } from '@/components/ui/button'
import { UserDialog } from '@/components/UserDialog'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>

      <div>
        <Link href={"/Contact"} >contact</Link>
        <Link href={"/About"}>About</Link>
      </div>



      <div className='grid grid-cols-6 gap-12'>
      <Button variant="outline">Button</Button>
      <Button variant="default">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="secondary">Button</Button>

      </div>
      <Faq/>
      <BlogCard/>
      <UserDialog/>
    </div>
  )
}
