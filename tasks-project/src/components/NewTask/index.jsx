import { useState } from "react";
import { Container, Input, Button } from "./style";
import { IoAddCircleOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

export default function NewTask(props) {
  const [newTask, setNewTask] = useState("");

  function add() {
    const tasksClone = props.tasks.map((task) => task);

    if (newTask) {
      tasksClone.push({
        id: uuidv4(),
        isComplete: false,
        title: newTask,
      });
    } else {
      alert("Primeiro escreva uma tarefa.");
    }

    props.setTasks(tasksClone);
    setNewTask("");
  }

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <Button onClick={() => add()}>
        Criar <IoAddCircleOutline />
      </Button>
    </Container>
  );
}