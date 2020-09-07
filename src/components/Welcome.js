import React from 'react';
import lisaUrl from '../images/monalisa.png';
import still from '../images/still_life.png';



const Welcome = () => (
  <div class="container p-3 my-4">
    <div class="d-flex flex-row">
      <div class="col">
          <div class="p-4"><img src={lisaUrl} alt="Mona Lisa" class="rounded" width="350" class="img-fluid" />
          </div>
      </div>
      <div class="col">
        <div class="p-4">
            <p>Create your own masterpiece with figures from Hieronymus Bosch's painting <i>The Garden of Earthly Delights</i>. Boschicize famous artworks from the public domain or use your own photos. You may search art museum collections for an image, choose one from the gallery, or upload your own.</p><br></br>
            <img src={still} alt="Still Life" class="rounded" width="500" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



)
export default Welcome;

