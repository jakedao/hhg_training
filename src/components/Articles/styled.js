import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-top: 10rem;
`

const ArticleSection = styled.div`
  width: 100%;
  height: 30px;
  
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid var(--MainColor);
  margin-top: 1rem;
  width: 100%;
`

const UserInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 220px; 
`;

const PictureWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  margin: 2rem 2rem 0 2rem;
`
const ProfilePicture = styled.img`
  height: 100%;
  width: 100%;
`;

const UserBio = styled.div`
  word-wrap: break-word;
  max-height: 2rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${props => props.liked ? 'red' : 'lightgray'};
  cursor: pointer;
  margin-left: 1rem;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: var(--MainColor);
  margin-left: 0.5rem;
  cursor: pointer;
`;

const UserName = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const Description = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  line-height: 1.5rem;
  align-items: space-around;
  justify-content: center;
  margin-left: 1rem;
`;

export { 
  Wrapper, 
  ArticleSection,
  ArticleWrapper,
  UserInfo,
  PictureWrapper,
  ProfilePicture,
  UserBio,
  HeartIcon,
  UserName,
  LikeIcon,
  Description,
};