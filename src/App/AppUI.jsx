import { TodoCounter } from '../components/TodoCounter'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import {TodoSearch} from '../components/TodoSearch'
import { Container } from '../components/Container'
import {TodoContext} from '../TodoContext';

function AppUI(){
    return ( 
        <Container>
      <TodoCounter/>
       <TodoSearch/>
       
       <TodoContext.Consumer>
            { value =>(
                <TodoList>
                {value.error && <p>Desespérate, hubo un error...</p>}
                 {value.loading && <p>Estamos cargando, no desesperes...</p>}
                 {(!value.loading && !value.searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                 
                {value.searchedTodos.map(todo=>(
                     <TodoItem 
                         id={todo.id} 
                         text ={todo.text}
                         completed={todo.completed}
                         onComplete={()=> value.completeTodo(todo.text)}
                         unComplete={()=> value.unCompleteTodo(todo.text)}
                         onDelete={() => value.deleteTodo(todo.text)}
                     />
                ))}
                </TodoList>
            )
            
            }
       </TodoContext.Consumer>

       </Container>
     );
}

export { AppUI };