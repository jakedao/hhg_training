import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: var(--MainColor);
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`
const MenuItem = styled(Link)`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-left: 2rem;
  padding: 12px;
  &:hover {
    font-weight: bold;
    background-color: rgb(221,75,60);
  }
`

export { 
  Wrapper,
  MenuItem,
  Menu,
};