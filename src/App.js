import React, { Component } from 'react';

class App extends Component {
  state = {
    paintings: []
  }
  componentDidMount() {
    fetch('http://api.creativecommons.engineering/v1/images?format=json&q=sunflowers&source=met')
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
              <img src={painting.url} />
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;