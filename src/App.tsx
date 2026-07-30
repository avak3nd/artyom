import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen px-4 pb-25">
      <Navbar />
      <Hero />
      <Profile />
      <div className='mt-3'>
        <Experience />
      </div>
    </div>
  )
}

export default App
