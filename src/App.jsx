
import Footer from './componant/Footer'
import Mainpage from './pages/Mainpage'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './pages/Test'
import Navbar from './componant/nav'
import Connectus from './pages/Connectus';
import Aboutas from './pages/Aboutas';
import Header from './componant/Header';
import Privet from './pages/Privet'
import data from './data/data'


function App() {

  const [openlist, setopenlist] = useState(false);
  const [itemsSelect , setitemsSelect] = useState(data)
  const handelopen = () => {
    openlist ?
      setopenlist(false) : setopenlist(true)
  }
  const handelclose = () => {
    openlist ? null : setopenlist(false)
  }

 

  return (
    <>
      {/* <Header handelclose={handelclose} handelopen={handelopen} />
      <Hiddenlist openlist={openlist}/> */}
     <Routes>
      <Route path='/' element={<Header setitemsSelect={setitemsSelect}/>} />
      <Route path='/servicesc' element={<Navbar setitemsSelect={setitemsSelect}/>} />
      <Route path='/servicesp' element={<Navbar setitemsSelect={setitemsSelect}/>} />
      <Route path='/about' element={<Navbar setitemsSelect={setitemsSelect}/>} />
      <Route path='/connect' element={<Navbar setitemsSelect={setitemsSelect}/>} />
     </Routes>
     {/* <Header/>  */}
      <Routes>

          {/* <Route path="/" exact element={<Header />} /> */}
          <Route path="/" exact element={<Mainpage  />} />
          <Route path="/servicesp" element={<Privet setitemsSelect={setitemsSelect} />} />
          <Route path="/servicesc" element={<Test setitemsSelect={setitemsSelect}  />} />
          <Route path="/about" element={<Aboutas  />} />
          <Route path="/connect" element={<Connectus itemsSelect={itemsSelect} />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
