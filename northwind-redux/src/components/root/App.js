import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import CartDetail from '../cart/CartDetail'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'

 class App extends Component {
  render() {
    return (
     <Container>
      <Navi/>
      <Routes>
        <Route path="/" exact element={<Dashboard/>}></Route>
        <Route path="/product" exact element={<Dashboard/>}></Route>
        <Route path="/cart" exact element={<CartDetail/>}></Route>
      </Routes>
      
      
     </Container> 
        
        
    
    )
  }
}

export default App