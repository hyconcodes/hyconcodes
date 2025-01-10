import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import About from '../components/About'
import WorkWithMe from '../components/WorkWithMe'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Portfolio />
            <Skills />
            <About />
            <WorkWithMe />
            <Footer />
        </div>
    )
}

export default Home
