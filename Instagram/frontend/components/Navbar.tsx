import React from 'react'
import { Heart, MessageCircleMore } from 'lucide-react';
// import { Button } from './ui/button';
import { RegisterDialog } from './RegisterDialog';
import { FeedCreation } from './Feedcreation';


export default function Navbar() {
  return (
    <div className=' flex items-center justify-between'>
      <p>INSTRAGRAM</p>
      <div className='flex items-center gap-4'>
        {/* <Button size="sm">Register</Button> */}
        <FeedCreation/>
        <RegisterDialog/>
      <Heart />
      <MessageCircleMore />
      </div>
    </div>
  )
}