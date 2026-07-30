import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen px-4 pb-25">
      <Navbar />
      <Hero />
      <Profile />
    </div>
  )
}

export default App
