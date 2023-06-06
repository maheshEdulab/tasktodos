import React from 'react'
import { Link } from 'react-router-dom'

export default function Nomatch() {
  return (
    <div>
      <h1 className='font-serif text-red-600 text-5xl'><span>Click hear to go <Link to='/' className='underline text-gray-600 text-2xl'>Register Page..</Link></span></h1>
    </div>
  )
}
