import styled from 'styled-components';
import Container from 'components/Container';

const Card = styled(Container)`
  background-color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 5px;
  margin-bottom: 5px;    
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
  
  ${(props) => props.success && `
    color: #fff;
    background-color: #76cb64;
  `};
  
  ${(props) => props.fullHeight && `
    min-height: calc( 100vh - 10px); 
  `};
  
`;
export default Card;
