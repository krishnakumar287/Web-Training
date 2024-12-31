

import NavBar from './Compoment/NavBar'
import Home from './Compoment/Home'
import Contact from './Compoment/Conatct'
import About from './Compoment/About'
import Gallery from './Compoment/Gallery'
import Footer from './Compoment/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About clg1="Kongu Engineering college" clg2="Kongu Arts college"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
       </ Routes>
    </BrowserRouter>
    <Footer/>
    
    </div>
  )
}

export default App
