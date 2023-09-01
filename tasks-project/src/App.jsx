import { useState } from 'react'
import {Container, Main} from './mainStyle'
import './reset.css'
import Header from './components/Header'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'

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

  const deleteAllTasks = () => {
    setTasks([])
  }

  const completeAllTasks = () => {
    setTasks(
      tasks => tasks.map(t => ({
        ...t,
        isComplete: true
      }))
    )
  }

  return (
    <Container>
      <Header />
      <Main>
        <NewTask tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
        {
          tasks &&
          tasks.length > 0 &&
          <>
            <button onClick={deleteAllTasks}>Deletar Tudo</button>
            <button onClick={completeAllTasks}>Completar tudo</button>
          </>
        }
      </Main>
    </Container>
  )
}

export default App
