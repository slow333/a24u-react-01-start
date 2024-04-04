import styled from "styled-components";
import {useState} from "react";
import {useFaraway} from "../../context/FarawayContext.jsx";

const StyledTodo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   background-color: white;
   //width: 18rem;
   height: 4rem;
   border-radius: 8px;
   box-shadow: #1f2937;
   padding: 1rem 4rem;
   font-size: 1.8rem;
`;

const Todo = ({item}) => {

  const{todos, dispatch} = useFaraway();

  const [checked, setChecked] = useState(
    todos.find(todo => todo.id === item.id).checked
  );

  const isChecked = item.id === todos.filter(todo => todo.id === item.id).id

  function handleCheck(id) {
    setChecked(checked => !checked);
    dispatch({type:'setCheck', payload: id })
  }

  return (
    <StyledTodo>
      <div className={`${isChecked ? 'italic line-through' : ''}`}>
      {item.num} : {item.item}
      </div>
      <input type='checkbox' checked={checked}
             onChange={() => handleCheck(item.id)}/>
    </StyledTodo>
  );
};

export default Todo;