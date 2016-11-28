import styled from 'styled-components';

const StyledCardBody = styled.div`
  height: 'auto';
  ${(props) => props.height && `
    height: ${props.height};
  `};
  
  .title {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    padding-bottom: 15px;
  }
`;

export default StyledCardBody;
