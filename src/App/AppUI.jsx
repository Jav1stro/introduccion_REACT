import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Container } from "../components/Container";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from '../components/TodoForm';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    unCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <Container>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            unComplete={() => unCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
    </Container>
  );
}

export { AppUI };
