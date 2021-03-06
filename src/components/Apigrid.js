import React, { Component } from 'react';


class Apigrid extends Component {
  state = {
    paintings: []
  }

  componentDidMount() {
    fetch('https://api.creativecommons.engineering/v1/images?format=json&source=met,clevelandmuseum,smithsonian_portrait_gallery,smithsonian_cooper_hewitt_museum&creator=gogh ')
      .then(res => res.json())
      .then((data) => {
        this.setState({ paintings: data.results })
        console.log(this.state.paintings)
      })
      .catch(console.log)
  }
  render() {

    return (
      <div>
        <div className="mt-4 col-md-12">
          <div className="container">
            <div className="image-grid">
              {this.state.paintings.map((painting) => (
                <div className="card">
                  <div className="card-body px-2">
                    <h6 className="card-title">{painting.title}</h6>
                    <p className="card-subtitle mb-2">{painting.creator}</p>
                    <img className="a rounded" src={painting.url} alt="Artwork" width="250" /><br></br>
                    <h7 className="card-subtitle mb-2">source: {painting.source}</h7>
                  </div>
                </div>
              ))}
            </div>
    
          </div>
        </div>
      </div>
    );
  }
}


export default Apigrid;