import React from 'react';
import lisaUrl from '../images/monalisa.png';
import still from '../images/still_life.png';



const Welcome = () => (
  <div class="container p-3 my-4">
    <div class="d-flex flex-row">
    <div class="p-4"><img src={lisaUrl} alt="Mona Lisa" class="img-fluid" class="rounded" width="350"/>
    </div>
    <div class="p-4">
    <p>Create your own masterpiece with figures from Hieronymus Bosch's painting "The Garden of Earthly Delights". Boschicize famous artworks in the public domain or use your own photos. You may search the museums for an image, choose one from the gallery, or upload your own.</p><br></br><br></br><br></br>
    <img src={still} alt="Still Life" class="img-fluid" class="rounded" width="500"/>
    </div>
  </div>
  </div>
  

)
export default Welcome;

