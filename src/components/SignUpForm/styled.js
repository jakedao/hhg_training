import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--MainColor);
  line-height: 0.5rem;
`

const HeaderContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`
export {
  HeaderContent,
  Wrapper, 
  Title 
};