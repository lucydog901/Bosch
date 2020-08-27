import React, { Component } from 'react';

class App extends Component {
  state = {
    paintings: []
  }
  componentDidMount() {
    fetch('https://api.creativecommons.engineering/v1/images?format=json&q=sun&source=met,clevelandmuseum,smithsonian_portrait_gallery,smithsonian_cooper_hewitt_museum&page=3')
    .then(res => res.json())
    .then((data) => {
      this.setState({ paintings: data.results})
      console.log(this.state.paintings)
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>Bosch Bash</h1>
        {this.state.paintings.map((painting) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{painting.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{painting.creator}</h6>
              <h6 className="card-subtitle mb-2 text-muted">source: {painting.source}</h6>
              <img src={painting.url} alt="Artwork" width="500" />
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;