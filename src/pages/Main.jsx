import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import Card from '../components/Card'
import Gallery from '../components/Gallery'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>

        <Navbar />
        <Hero />
        <Card />
        <Gallery />
        <Form />
        <Footer />
    </div>
  )
}
