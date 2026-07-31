import './App.css'

import Navbar from './layouts/Navbar'

import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Pricing from './components/Pricing'
import Feedbacks from './components/Feedbacks'
import Contact from './components/Contact'

import Footer from './layouts/Footer'

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen px-4 pb-15">
      <Navbar />
      <Hero />
      <Profile />
      <div className='mt-3 flex flex-col gap-3'>
        <Experience />
        <Education />
        <Skills />
        <Pricing />
        <Feedbacks />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
