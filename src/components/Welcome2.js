import React from 'react';
import lisaUrl from '../images/monalisa.png';
// import stillUrl from '../images/still_life.png';
import daveUrl from '../images/dave.png';
import MyCarousel from './MyCarousel';


const Welcome = () => (

  <div className="container p-3 my-4">
    <div className="d-flex flex-row">
      <div className="col-sm-5">
        <div className="p-4">
        <img className="rounded img-fluid" src={lisaUrl} alt="Mona Lisa" />
        </div>
        </div>
        <div className="col-sm-7">
        <div className="p-4">
        <div className="card-transparent">
        <div className="card-body">
        <h6 className="card-text">Create your own masterpiece with figures from Hieronymus Bosch's painting <i>The Garden of Earthly Delights</i>. Boschicize famous artworks from the public domain or use your own photos. You may search art museum collections for an image, choose one from the gallery, or upload your own.</h6><br></br>
        <img className="card-img-bottom rounded img-fluid" src={daveUrl} alt="Still Life"></img>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    


)
export default Welcome;

