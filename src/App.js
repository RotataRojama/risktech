import logo from './logo.svg';
import './App.css';
import Headers from './header';
import Bodypage1 from './bodypage1';
import Bodypage3 from './bodypage3';
import { Route, Routes } from 'react-router-dom';



import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Routes>
          <Route  path='/' element={<Bodypage1/>}/>
          <Route  path='/what-we-do' element={<Bodypage3/>}/>
        </Routes>
      </div>
    )
  }
}


export default App;
