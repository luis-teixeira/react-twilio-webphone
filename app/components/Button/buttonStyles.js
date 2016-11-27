import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.3em 2em;
  text-decoration: none;
  border-radius: 3px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: '#333';
  background-color: '#fff';
  border: 2px solid '#adadad';
  text-transform uppercase;
  
  ${(props) => props.success && `
    color: #fff;
    background-color: #76cb64;
    border-color: #76cb64;
    
    &:hover {
      color: #fff;
      background-color: #61b74f;
    }
  `};
  
  ${(props) => props.error && `
    color: #fff;
    background-color: #e42e2e;
    border-color: #e42e2e;
    
    &:hover {
      color: #fff;
      background-color: #b32424;
    }
  `};
  
  ${(props) => props.block && `
    display: block;
  `}
  
  ${(props) => props.uppercase && `
    text-transform: uppercase;
  `}
  
  ${(props) => props.l && `
     padding: 0.5em 1.5em;
     font-size: 18px;
  `}
  
  ${(props) => props.xl && `
     padding: 0.74em 0em;
     font-size: 25px;
  `}
`;

export default buttonStyles;
