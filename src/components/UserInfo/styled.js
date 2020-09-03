import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

const UpdateForm = styled.div`
  display: flex;
  height: inherit;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const UpdateButton= styled.button`
  border: none;
  margin-top: 2rem;
  padding: 1rem;
  align-self: flex-end;
  background-color: var(--MainColor);
  color: white;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export { 
  Wrapper, 
  UpdateForm, 
  Info,
  UpdateButton
};