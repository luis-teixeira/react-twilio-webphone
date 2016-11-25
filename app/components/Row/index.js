import styled from 'styled-components';

const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  &:before,
  &:after {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
  }
`;

export default Row;
