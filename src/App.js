import React, { Component } from 'react';

class App extends Component {
  state = {
    paintings: []
  }
  componentDidMount() {
    fetch('https://api.artic.edu/api/v1/artworks?fields=id,title')
    .then(res => res.json())
    .then((data) => {
      this.setState({ paintings: data.data})
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
              <h6 className="card-subtitle mb-2 text-muted">{painting.id}</h6>
              <img src='https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/765209-bosch-increases-vehicle-safety-using-map-matching-algorithms-and-azure-kubernetes-service/resources/baaba239-3ad3-4e5c-a59a-d399fc5bb71d/1168259536605464231_1168259536605464231' />
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;