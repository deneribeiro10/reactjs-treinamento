import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Container, Main} from './mainStyle'

import './reset.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Main>
        Hello world
      </Main>
    </Container>
  )
}

export default App
