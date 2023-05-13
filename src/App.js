import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from './Components/RowPost/RowPost';
import {actions,originals} from './Constants/url'

const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title="Actions Movies" isSmall/>
    </div>
  )
}

export default App

