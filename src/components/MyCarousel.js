import React, { Component } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel';
import image3 from '../images/layer3sm.png';
import image7 from '../images/Layer7sm.png';
import image8 from '../images/layer8sm.png';
import image9 from '../images/layer9sm.png';
import image11 from '../images/layer11sm.png';
import image12 from '../images/Layer12sm.png';
import image14 from '../images/Layer14sm.png';
import image15 from '../images/Layer15sm.png';
import image17 from '../images/Layer17sm.png';
import image10 from '../images/Layer10sm.png';


export default class MyCarousel extends Component {
  render() {
    return (
     <Carousel slidesPerPage={5} arrows infinite
    
>
        <img src={image3} alt="Bosch Character"/>
        <img src={image7} alt="Bosch Character"/>
        <img src={image8} alt="Bosch Character"/>
        <img src={image9} alt="Bosch Character"/>
        <img src={image11} alt="Bosch Character"/>
        <img src={image12} alt="Bosch Character"/>
        <img src={image14} alt="Bosch Character"/>
        <img src={image15} alt="Bosch Character"/>
        <img src={image17} alt="Bosch Character"/>
        <img src={image10} alt="Bosch Character"/>
      </Carousel>
    
    );
  }
}






