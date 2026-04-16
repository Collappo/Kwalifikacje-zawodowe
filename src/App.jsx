import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen h-screen bg-[#0e100e] flex-col items-center md:justify-center">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
