import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../ui/Button.jsx";
import {useFaraway} from "../../context/FarawayContext.jsx";
import Input from "../../ui/Input.jsx";
import UlRow from "../../ui/UlRow.jsx";

const StyledFormItems = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
   color: #4f46e5;
`;
const SelectedNum = styled.select`
   border: 1px solid #aaa;
   padding: 4px 0 4px 8px;
   border-radius: var(--border-radius-md);
`;

function FormItems () {

  const {todo, todos, dispatch} = useFaraway();

  useEffect(() => {
    if(todos.length < 1) return;
    localStorage.setItem('travel', JSON.stringify(todos));
  },[todos])

  useEffect(() => {
    const lcItems = localStorage.getItem('travel');
    if(!lcItems) return;
    const items = JSON.parse(lcItems)
    dispatch({type:'setTodos', payload: items})
  },[])

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:'addTodos', payload: todo })
  }

  return (
    <UlRow>
      <div className='text-3xl text-stone-100'>여행 준비물을 챙기세요</div>
      <StyledFormItems onSubmit={handleSubmit}>
        <SelectedNum name='num' onChange={(e) =>
             dispatch({type: 'setNum', payload:e.target.value})} value={todo.num}>
          <option value=''>개수 선택</option>
          {Array.from({length:10},(_, idx) =>
            <option key={idx} value={idx+1}>{idx+1}</option>)}
        </SelectedNum>
        <Input name='todo' onChange={(e) =>
             dispatch({type:'setItem', payload: e.target.value})} value={todo.todo}/>
        <Button> ADD </Button>
      </StyledFormItems>
    </UlRow>
  );
};

export default FormItems;