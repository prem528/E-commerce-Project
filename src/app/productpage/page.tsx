import Navbar from '@/customComponents/navbar'
import React from 'react'
import DetailsPage from './details-page'
import Footer from '@/customComponents/Footer'

const page = () => {
  return (
     <main>
        <Navbar/>
        <DetailsPage/>
        <Footer/>
     </main>
  )
}

export default page
