import styled from 'styled-components';

const StyledCallLogsEntries = styled.div`
  width: 100%;
  clear: both;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  height: 80px;
  
  .avatar {
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    i {
      font-size: 30px;
      line-height: 45px;
      padding: 0 12px;
    }
  } 
  
  .log {
    padding: 8px 0;
    float: left;
    display: block;
  }
`;

export default StyledCallLogsEntries;
