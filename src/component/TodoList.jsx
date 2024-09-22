import React from 'react'

export default function TodoList() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from school'

  ]
  return (
    <ul>
      {todos.map((todo, todoIndex) =>{
        return (
          <li key={todoIndex}>{todo}</li>
        )
      })}
    </ul>
  )
}
