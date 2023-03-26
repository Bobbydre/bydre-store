import React from 'react';
import { useState } from "react";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Desc, Title } from '../Slider/slider.styles';
import sliderItems from '../../data/slider-data';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
        <Arrow direction= 'left' onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg= {item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src= {item.img}/>
                    </ImgContainer> 
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button
                          buttonType={BUTTON_TYPE_CLASSES.inverted}>
                            SHOP NOW
                        </Button>
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
        <Arrow direction= 'right' onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
        
    </Container>
  );
};

export default Slider
