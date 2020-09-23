import React, { Component } from 'react';
import image1 from '../images/bosch_header.png';
import image2 from '../images/still_life.png';
import image3 from '../images/monalisa.png';
import image4 from '../images/oval.png';



class Gallery extends Component {
  
  render() {

    return (
      <div>
        <div className="mt-4 col-md-12">
          <div className="container">
            <div className="image-grid">
                <div className="card">
                  <div className="card-body px-2">
                    <img className="a rounded" src={image1} alt="Artwork" width="250" />  
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <img className="a rounded" src={image2} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <img className="a rounded" src={image3} alt="Artwork" width="250" />
                    </div>
                </div> 
                
                <div className="card">
                  <div className="card-body px-2">
                    <img className="a rounded" src={image4} alt="Artwork" width="250" />
                    </div>
                </div> 
                </div>
                </div>
              
              
            </div>
    
          </div>
        
      
    );
  }
}


export default Gallery;
