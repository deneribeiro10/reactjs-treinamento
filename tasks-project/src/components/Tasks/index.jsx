import {
    Container,
    Informations,
    Information,
    List,
    ListItem,
    IsComplete,
    Content,
    Trash,
  } from "./style";
  import { IoCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
  
  export default function Header(props) {
    function setIsComplete(id) {
      const newTasks = props.tasks.map((task) => {
        if (task.id === id) task.isComplete = !task.isComplete;
        return task;
      });
  
      props.setTasks(newTasks);
    }
  
    function removeItem(id) {
      const newTasks = props.tasks.filter((task) => task.id !== id);
  
      props.setTasks(newTasks);
    }
  
    return (
      <Container>
        <Informations>
          <Information>Tarefas criadas ({props.tasks.length})</Information>
          <Information>
            Concluídas (
            {props.tasks.filter((task) => task.isComplete !== false).length} de {" "}
            {props.tasks.length})
          </Information>
        </Informations>
  
        <List>
          {props.tasks.map((task) => (
            <ListItem key={task.id}>
              <IsComplete
                isComplete={task.isComplete}
                onClick={() => setIsComplete(task.id)}
              >
                {task.isComplete ? <IoCheckmarkOutline /> : ""}
              </IsComplete>
              <Content
                isComplete={task.isComplete}
                onClick={() => setIsComplete(task.id)}
              >
                {task.title}
              </Content>
              <Trash onClick={() => removeItem(task.id)}><IoTrashOutline /></Trash>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }