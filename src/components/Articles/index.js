import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import UserSerivce from '../../services/user-service';

import LoadingScreen from '../common/LoadingScreen';
import {
  Wrapper, 
  ArticleWrapper,
  ArticleSection,
  UserInfo,
  PictureWrapper,
  ProfilePicture,
  UserBio,
  HeartIcon,
  UserName,
  LikeIcon,
  Description,
} from './styled';

const Articles = (props) => {
  let articles = props.data && props.data.slice(0,5);
  let renderArticle = articles.map(article => {
    return (
      <ArticleWrapper key={article.slug}>
        {article.author &&
          <UserInfo>
            <PictureWrapper>
              <ProfilePicture src={article.author.image} alt={article.author.username}/>
            </PictureWrapper>
            <UserName>
              <h3>{article.author.username}</h3>
              <HeartIcon icon={faHeart} liked={article.author.following}/>
            </UserName>
            <UserBio><em>{article.author.bio}</em></UserBio>
          </UserInfo>
        }
        <Description>
          <h2 style={{color:'var(--MainColor)'}}>{article.title}</h2>
          <div>Description: {article.description}</div>
          <div>
            <div>
              <div>
                {article.favoritesCount}
                <LikeIcon
                  onClick={() => UserSerivce.likeArticle(article.slug)} 
                  icon={faThumbsUp}
                  /> 
              </div>
            </div>
            <div style={{alignSelf: 'flex-start'}}>Created on: {article.createdAt}</div>
          </div>
        </Description>
      </ArticleWrapper>
    )
  })
  return(
    <Wrapper>
      <ArticleSection> ARTICLES</ArticleSection>
      {props.fetchingData ? <LoadingScreen /> : renderArticle}
    </Wrapper>
  )
};

export default Articles;