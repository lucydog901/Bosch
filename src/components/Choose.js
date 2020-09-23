import React, { Component } from 'react';
import image1 from '../images/starry.png';
import image2 from '../images/degas.png';
import image3 from '../images/gaug.png';
import image4 from '../images/klee.png';
import image5 from '../images/klimt.jpg';
import image6 from '../images/monalisa1.png';
import image7 from '../images/rembrant.png';
import image8 from '../images/pearl.jpg';
import image9 from '../images/ophelia.jpg';
import image10 from '../images/judith.jpg';
import image11 from '../images/scream.jpg';
import image12 from '../images/wash.jpg';
import image13 from '../images/monet.jpg';
import image14 from '../images/lincoln.jpg';
import image15 from '../images/sunday.jpg';
import image16 from '../images/treachery.jpg';
import image17 from '../images/virgin.jpg';
import image18 from '../images/whistle.jpg';
import image19 from '../images/guitar.jpg';
import image20 from '../images/foot.jpg';


class Choose extends Component {
  
  render() {

    return (
      <div>
        <div className="mt-4 col-md-12">
          <div className="container">
            <div className="image-grid">
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">The Starry Night</h6>
                    <p className="card-subtitle mb-2">Vincent Van Gogh</p>
                    <img className="a rounded" src={image1} alt="Artwork" width="250" /><br></br>
                    
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Dancers in the Classroom</h6>
                    <p className="card-subtitle mb-2">Edgar Degas</p>
                    <img className="a rounded" src={image2} alt="Artwork" width="250" /><br></br>
                    
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">No Te Aha Oe Riri (Why Are You Angry?)</h6>
                    <p className="card-subtitle mb-2">Paul Gauguin</p>
                    <img className="a rounded" src={image3} alt="Artwork" width="250" /><br></br>
                    </div>
                </div>
                    <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Red Balloon</h6>
                    <p className="card-subtitle mb-2">Paul Klee</p>
                    <img className="a rounded" src={image4} alt="Artwork" width="250" /><br></br>
                    </div>
                </div>
                    <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Portrait of Adele Bloch-Bauer</h6>
                    <p className="card-subtitle mb-2">Gustav Klimt</p>
                    <img className="a rounded" src={image5} alt="Artwork" width="250" /><br></br>
                    </div>
                </div>
                    <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Mona Lisa</h6>
                    <p className="card-subtitle mb-2">Leonardo da Vinci</p>
                    <img className="a rounded" src={image6} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Syndics of the Drapers’ Guild</h6>
                    <p className="card-subtitle mb-2">Rembrandt</p>
                    <img className="a rounded" src={image7} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Girl with a Pearl Earring</h6>
                    <p className="card-subtitle mb-2">Johannes Vermeer</p>
                    <img className="a rounded" src={image8} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Judith Beheading Holofernes</h6>
                    <p className="card-subtitle mb-2">Michelangelo Merisi da Caravaggio </p>
                    <img className="a rounded" src={image10} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Ophelia</h6>
                    <p className="card-subtitle mb-2">John Everett Millais</p>
                    <img className="a rounded" src={image9} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">The Scream of Nature</h6>
                    <p className="card-subtitle mb-2">Edvard Munch</p>
                    <img className="a rounded" src={image11} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Washington Crossing the Delaware</h6>
                    <p className="card-subtitle mb-2">Emanuel Leutze</p>
                    <img className="a rounded" src={image12} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">The Water-Lily Pond </h6>
                    <p className="card-subtitle mb-2">Claude Monet</p>
                    <img className="a rounded" src={image13} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">A Sunday on La Grande Jatte</h6>
                    <p className="card-subtitle mb-2">Georges Seurat</p>
                    <img className="a rounded" src={image15} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Abraham Lincoln</h6>
                    <p className="card-subtitle mb-2">Daniel Chester French</p>
                    <img className="a rounded" src={image14} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Arrangement in Grey and Black No. 1</h6>
                    <p className="card-subtitle mb-2">James Abbott McNeill Whistler</p>
                    <img className="a rounded" src={image18} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">The Treachery of Images</h6>
                    <p className="card-subtitle mb-2">René Magritte</p>
                    <img className="a rounded" src={image16} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Virgin and Child</h6>
                    <p className="card-subtitle mb-2">Sandro Botticelli</p>
                    <img className="a rounded" src={image17} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">The Old Guitarist</h6>
                    <p className="card-subtitle mb-2">Pablo Picasso</p>
                    <img className="a rounded" src={image19} alt="Artwork" width="250" />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">At the Foot of the Cliff</h6>
                    <p className="card-subtitle mb-2">William-Adolphe Bouguereau</p>
                    <img className="a rounded" src={image20} alt="Artwork" width="250" />
                  </div>
                </div>
              
              
            </div>
    
          </div>
        </div>
      </div>
    );
  }
}


export default Choose;
