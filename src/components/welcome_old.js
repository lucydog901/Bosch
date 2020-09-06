import React from 'react';
import welcomeUrl from '../images/monalisa.png';



const Welcome = () => (
  <div class="container">
    <div class="row">
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-horizontal">
            <img src={welcomeUrl} alt="Mona Lisa" class="img-fluid" class="rounded"/>
            <div class="card-body px-4">
              <p>Create your own masterpiece with figures from Hieronymus Bosch's painting "The Garden of Earthly Delights". Boschicize artworks from The Metropolitan Museum of Art and The Cleveland Museum of Art and download your creations. You may search the museums for an image, or choose one from the gallery.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)
export default Welcome;

