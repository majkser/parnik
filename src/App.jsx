import { useState } from 'react'
import Header from "./components/Header.jsx"
import GoogleMap from './components/GoogleMap.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/main.jsx';
import './App.css'
import "./index.css"


function App() {


  return (
    <>
        <Header hrefMap={"#Map"} />
        <Main />
        <GoogleMap />
        <Footer />
    </>
  )
}

export default App
