import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Partners from './components/Partners'
import Quote from './components/Quote'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-full h-full bg-primary text-white overflow-x-hidden text-sm lg:text-base'>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Partners/>
      <Quote/>
      <Footer/>
    </div>
  )
}

export default App
