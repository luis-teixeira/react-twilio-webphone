import { css } from 'styled-components';

const cardHeaderStyles = css`
  color: #444
  background-color: #ccc;
  margin: -15px -15px 15px;
  padding: 15px;
  
  ${(props) => props.success && `
    color: #fff;
    background-color: #76cb64;
  `};
  
  ${(props) => props.text === 'center' && `
    text-align: center;
  `}

`;

export default cardHeaderStyles;
