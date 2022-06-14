import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';
// const defaultTodos =[{id: 0,text: "cortar cebolla",completed: false},{  id: 1,  text: "cortar pepino",  completed: true},{id:2,  text: "cortar papa",  completed: false},{  id:3,  text: 'amar a mi pipina',  completed: true},{   id:4,  text: 'irse a la B',  completed: true}]




function App() {
 
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
