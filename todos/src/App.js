import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import './App.css';

const ALL_TODOS = gql`
  query allToDos {
    todos {
      id
      text
      complete
    }
  }
`;

const COMPLETE_TODO = gql`
  mutation completeToDo($id: uuid!, $complete: Boolean! = true) {
    update_todos(
      where: {
        id: {
          _eq: $id
        }
      },
      _set: {
        complete: $complete
      }) {
      returning {
        id
        text
        complete
      }
    }
  }
`;

const INSERT_TODO = gql`
  mutation insertToDos($text: String!) {
    insert_todos(objects: { text: $text}) {
      returning {
        id
        text
        complete
      }
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteToDos($id: uuid!) {
    delete_todos(where: { id: { _eq: $id }}) {
      returning {
        id
        text
        complete
      }
    }
  }
`;

const App = () => {
  const [todoText, setTodoText] = useState('');
  const { data, loading, error } = useQuery(ALL_TODOS);
  const [completeTodo] = useMutation(COMPLETE_TODO);
  const [insertTodo] = useMutation(INSERT_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleConcludeTodo = async ({ id, complete}) => {
    try {
      await completeTodo({
        variables: {
          id,
          complete: !complete,
        },
      });
    } catch (err) {
      console.log('Error', err);
    }
  };

  const handleInsertTodo = async (event) => {
    event.preventDefault();

    try {
      await insertTodo({
        variables: {
          text: todoText,
        },
        refetchQueries: [{ query: ALL_TODOS }],
      });
      setTodoText('');
    } catch (err) {
      console.log('Error', err);
    }
  };

  const handleDeleteTodo = async ({ id }) => {
    if (!window.confirm('Deseja apagar o To Do?')) return;
    try {
      await deleteTodo({
        variables: {
          id,
        },
        refetchQueries: [{ query: ALL_TODOS }],
      });
    } catch (err) {
      console.log('Error', err);
    }
  };

  if (loading) return <h1>Carregando...</h1>;
  if (error) return <h1>Não foi possível carregar...</h1>
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleInsertTodo}>
        <input
          type="text"
          placeholder="Digite nova tarefa..."
          value={todoText}
          onChange={({ target }) => setTodoText(target.value)}
        />
        <button type="submit">Salvar Tarefa</button>
      </form>
      <br />
      {data?.todos?.map((todo) => (
        <div
          key={todo.id}
          style={{
            
          }}
          className={`task ${todo.complete ? 'complete' : ''}`}
          onDoubleClick={() => handleConcludeTodo(todo)}
        >
          <span style={{ marginRight: '10px'}}>
            {todo?.text}
          </span>
          <button onClick={() => handleDeleteTodo(todo)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default App