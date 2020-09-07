import React from 'react';
import lisaUrl from '../images/monalisa.png';
import stillUrl from '../images/still_life.png';



const Welcome = () => (
  <div class="container p-3 my-4">
    <div class="d-flex flex-row">
      <div class="col-sm-4">
        <div class="p-4">
        <img class="img-a" src={lisaUrl} alt="Mona Lisa" class="rounded" class="img-fluid" />
        </div>
        </div>
        <div class="p-4">
        <div class="card-transparent">
        <div class="card-body">
        <p class="card-text">Create your own masterpiece with figures from Hieronymus Bosch's painting <i>The Garden of Earthly Delights</i>. Boschicize famous artworks from the public domain or use your own photos. You may search art museum collections for an image, choose one from the gallery, or upload your own.</p><br></br>
        <img class="card-img-bottom" src={stillUrl} alt="Still Life" class="rounded" class="img-fluid" alt="Still Life"></img>
          </div>
          </div>
          </div>
        </div>
      </div>
    
 



)
export default Welcome;

