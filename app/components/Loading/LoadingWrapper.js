import styled, { keyframes } from 'styled-components';


const keyframe = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  } 
`;

const LoadingWrapper = styled.div`
  margin: 30px auto 0;
  width: 120px;
  text-align: center;
  position: relative;

  > div {
    width: 14px;
    height: 14px;
    background-color: #76cb64;
    margin: 0 3px;
    border-radius: 100%;
    display: inline-block;
    animation: ${keyframe} 1.4s infinite ease-in-out both;
  }
  .bounce1 {
    animation-delay: -0.32s;
  }  
  .bounce2 {
    animation-delay: -0.16s;
  }
  
`;

export default LoadingWrapper;
