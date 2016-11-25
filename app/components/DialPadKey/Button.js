import styled from 'styled-components';

const Button = styled.button`
  padding: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #b3afaf;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  position: relative;
  animation: all 250ms;
  &:hover {
    color: #7a7979;
  }
  
  &:focus {
    outline: 0;
    background-color: #f4f4f4;
  }
`;

export default Button;
