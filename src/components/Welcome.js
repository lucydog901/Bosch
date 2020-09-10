import React from 'react';
import lisaUrl from '../images/monalisa.png';
// import stillUrl from '../images/still_life.png';
import daveUrl from '../images/dave.png';



const Welcome = () => (
  <div class="container p-3 my-4">
    <div class="d-flex flex-row">
      <div class="col-sm-5">
        <div class="p-4">
        <img class="rounded img-fluid" src={lisaUrl} alt="Mona Lisa" />
        </div>
        </div>
        <div class="col-sm-7">
        <div class="p-4">
        <div class="card-transparent">
        <div class="card-body">
        <h6 class="card-text">Create your own masterpiece with figures from Hieronymus Bosch's painting <i>The Garden of Earthly Delights</i>. Boschicize famous artworks from the public domain or use your own photos. You may search art museum collections for an image, choose one from the gallery, or upload your own.</h6><br></br>
        <img class="card-img-bottom rounded img-fluid" src={daveUrl} alt="Still Life"></img>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    
 



)
export default Welcome;

