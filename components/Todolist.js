import React from 'react'

const Todolist = ({todos,onDelete}) => {

  return (
        <ul>
            {todos.map( (todo,index) => (

                <li key={index}>{todo}
                
                <button onClick={ () => {onDelete(index)}} >Delete</button>
                </li>
            ))}
        </ul>
  );
};

export default Todolist