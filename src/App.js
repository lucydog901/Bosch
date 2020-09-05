import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';



class App extends Component {
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
        <Header />
        <div className="container">
          <div className="image-grid">
            {this.state.paintings.map((painting) => (
              <div className="card">
                <div className="card-body px-2">
                  <h5 className="card-title">{painting.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{painting.creator}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">source: {painting.source}</h6>
                  <img src={painting.url} alt="Artwork" width="250" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;