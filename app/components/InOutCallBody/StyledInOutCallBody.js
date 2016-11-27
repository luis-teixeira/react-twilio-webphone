import styled from 'styled-components';

const StyledInOutCallBody = styled.div`
  text-align: center;
  .avatar {
    width: 100px;
    height: 100px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    margin: -60px auto 20px;
    overflow: hidden;
    text-align: center;
    
    i {
      font-size: 60px;
      line-height: 90px;
      color: #d4d4d4 !important;
    }
  }   
  
  strong {
    display: block;
    margin-bottom: 20px;
  }
  
  .buttons-wrapper {
    display: flex;
    justify-content: center;
    height: 30vh;
    align-items: flex-end;
  }
`;

export default StyledInOutCallBody;
