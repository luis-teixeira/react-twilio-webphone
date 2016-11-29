/**
*
* NavBar
*
*/

import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  flex: 1 1 auto;
  background-color: rgb(245, 245, 245);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(60deg, #66bb6a, #4baa4f);
  margin: 5px 5px 30px;
  border-radius: 3px;
  padding: 15px 0;
  position: relative;
  color: #fff;
  i {
    font-size: 1.4em;
    margin-bottom: 5px;
  }
`;

export default NavBar;
