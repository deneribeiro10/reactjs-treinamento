import { useState } from 'react'
import {Container, Main} from './mainStyle'
import './reset.css'
import Header from './components/Header'

import { v4 as uuidv4 } from "uuid"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      isComplete: false,
      title: "texto...",
    },
    {
      id: uuidv4(),
      isComplete: true,
      title: "texto2...",
    },
  ]);

  return (
    <Container>
      <Header />
      <Main>
        {
          tasks && 
          tasks.length > 0 &&
          tasks.map((task) => (
            <div style={{color: "white"}}>{task.title}</div>
          ))
        }
      </Main>
    </Container>
  )
}

export default App
