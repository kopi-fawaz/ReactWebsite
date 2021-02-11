import React from 'react'
import './style.js';
import { HomeBtn, HomeDesc, HomeInfo, HomeSection, HomeTitle, HomeTitleInfo ,Span} from './style.js';

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInfo>
          <HomeTitle>Kopi Baik</HomeTitle>
          <HomeTitleInfo>Creative Director</HomeTitleInfo>
          <HomeDesc>I am a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.</HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInfo>
      </div>
    </HomeSection>
  );
}

export default Home;
