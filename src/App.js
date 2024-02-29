import React from 'react'
import Header from './components/Header'
import Category from './components/Category'
import Banners from './components/Banners'
import Eletronics from './components/Eletronics'
import Beauty from './components/Beauty'
import Travel from './components/Travel'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Category />
      <Banners />
      <Eletronics />
      <Beauty />
      <Travel />
      <Footer />
    </div>
  )
}

export default App