import React, { Component } from 'react';
import image1 from '../images/starry.png';
import image2 from '../images/degas.png';
import image3 from '../images/gaug.png';
import image4 from '../images/klee.png';
import image5 from '../images/klimt.jpg';
import image6 from '../images/monalisa1.png';
import image7 from '../images/rembrant.png';


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
                    <img className="a rounded" src={image6} alt="Artwork" width="250" /><br></br>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">Syndics of the Drapers’ Guild</h6>
                    <p className="card-subtitle mb-2">Rembrandt</p>
                    <img className="a rounded" src={image7} alt="Artwork" width="250" /><br></br>
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
