import React, { Component } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel';
import image1 from '../images/Layer1sm.png';
import image2 from '../images/Layer2sm.png';
import image16 from '../images/Layer16sm.png';
import image19 from '../images/Layer19sm.png';
import image20 from '../images/Layer20sm.png';
import image21 from '../images/Layer21sm.png';
import image22 from '../images/Layer22sm.png';
import image23 from '../images/Layer23sm.png';
import image24 from '../images/Layer24sm.png';
import image26 from '../images/Layer26sm.png';
import image3 from '../images/Layer3sm.png';
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
   <Carousel slidesPerPage={6} arrows infinite
    
>
        <img src={image22} alt="Bosch Character"/>
        <img src={image20} alt="Bosch Character"/>
        <img src={image16} alt="Bosch Character"/>
        <img src={image2} alt="Bosch Character"/>
        <img src={image7} alt="Bosch Character"/>
        <img src={image3} alt="Bosch Character"/>
        <img src={image26} alt="Bosch Character"/>
        <img src={image1} alt="Bosch Character"/>
        <img src={image23} alt="Bosch Character"/>
        <img src={image8} alt="Bosch Character"/>
        <img src={image9} alt="Bosch Character"/>
        <img src={image11} alt="Bosch Character"/>
        <img src={image19} alt="Bosch Character"/>
        <img src={image12} alt="Bosch Character"/>
        <img src={image14} alt="Bosch Character"/>
        <img src={image15} alt="Bosch Character"/>
        <img src={image24} alt="Bosch Character"/>
        <img src={image17} alt="Bosch Character"/>
        <img src={image10} alt="Bosch Character"/>
        <img src={image21} alt="Bosch Character"/>
      </Carousel>
    
    
    );
  }
}






