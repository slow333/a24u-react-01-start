import styled from "styled-components";

const Button = styled.button`
   color: var(--color-grey-200);
   font-size: 2rem;
   border: 2px solid var(--color-grey-400);
   padding: 0.2rem 2rem;
   border-radius: 8px;
   background-color: var(--color-grey-600);
   &:hover{
      background-color: var(--color-grey-900);
      cursor: pointer;
   }
`;


export default Button;