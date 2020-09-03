import styled from 'styled-components';

const LoadingWrapper = styled.div`
  top:0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0,0,0, 0.2);
`;


const Loading = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
`

export {
  LoadingWrapper,
  Loading
};