import styled from 'styled-components';

const DialInputWrapper = styled.div`
   width: 100%;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   margin-bottom: 30px;
   display: flex;
   height: 70px;
   &:focus {
      outline: 0;
   }
   button,
   a {
      color: #B3AFAF;
      font-size: 1.6em;
      padding: 20px 0 0;
   }
   input {
      width: 100%;
      padding: 15px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #99B4B4;
      letter-spacing: 1px;
      
      &.smaller {
        font-size: 20px;
      }
  }
`;

export default DialInputWrapper;
