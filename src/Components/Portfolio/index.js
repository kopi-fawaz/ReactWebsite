import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {ImgBox, Image, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span} from './style.js';

const Portfolio = () => {


  const [images, setImg] = useState([])

  useEffect( () => {
  
    axios.get("js/data.json").then(res => { setImg(res.data.portfolio) } )
  
  }, []);
  
  const PortfolioImg = images.map((img) => {
    return(
      <ImgBox key={img.id}>
        <Image src={img.image} />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImgBox>
    )
  })

  return (
    <PortfolioSection>
      <PortfolioTitle><Span>My</Span> Portofolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>ALL</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Bootstrap</PortfolioItem>
        <PortfolioItem>Css</PortfolioItem>
        <PortfolioItem>JavaScript</PortfolioItem>
      </PortfolioList>
      <div>{PortfolioImg}</div>
    </PortfolioSection>
  );
}

export default Portfolio;
