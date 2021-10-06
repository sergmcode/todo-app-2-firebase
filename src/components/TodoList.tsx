import React from 'react'
import { useTypedSelector } from '../store'

interface Props {
  
}

const TodoList = (props: Props) => {

  const todoList = useTypedSelector(state => state.todoReducer.todoList);

  return (
    <div>
      {todoList.map(todo => <div
        key={todo.id}
      >
        {todo.title} {todo.momentFrom.toLocaleString()} 
      </div>)}
    </div>
  )
}

export default TodoList
