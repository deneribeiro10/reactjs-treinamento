import { useState } from 'react'
import {Container, Main} from './mainStyle'
import './reset.css'
import Header from './components/Header'

function App() {
  return (
    <Container>
      <Header />
      <Main>
        Hello world
      </Main>
    </Container>
  )
}

export default App
