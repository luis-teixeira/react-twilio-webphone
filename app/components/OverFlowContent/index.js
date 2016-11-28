import styled from 'styled-components';

const OverFlowContent = styled.div`
  height: 'auto';
  overflow: auto;
  ${(props) => props.height && `
    height: ${props.height};
  `};
`;
export default OverFlowContent;
