import React from 'react';
import lisaUrl from '../images/monalisa.png';
import stillUrl from '../images/still_life.png';



const Welcome = () => (
  <div class="container p-3 my-4">
    <div class="d-flex flex-row">
    <div class="p-2"><img src={lisaUrl} alt="Mona Lisa" class="img-fluid" class="rounded" width="300"/>
    </div>
    <div class="p-2">
    <p>Create your own masterpiece with figures from Hieronymus Bosch's painting "The Garden of Earthly Delights". Boschicize artworks from The Metropolitan Museum of Art and The Cleveland Museum of Art and download your creations. You may search the museums for an image, or choose one from the gallery.</p>
    <img src={stillUrl} alt="Still Life" class="img-fluid" class="rounded" width="300"/>
    </div>
  </div>
  </div>

)
export default Welcome;

