import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'

 class App extends Component {
  render() {
    return (
     <Container>
      <Navi/>
      <Dashboard/>
     </Container> 
        
        
    
    )
  }
}

export default App