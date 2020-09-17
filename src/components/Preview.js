import React, { Component } from 'react';
import MyCarousel from './MyCarousel';


class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
  }

  _handleRemove(e) {
    e.preventDefault();
    this.setState({
      imagePreviewUrl: null

    });
    this.showfields = false
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} class="img-b" alt="preview" />);
    }

    return (
      <div>
        <div className="carousel"> <MyCarousel /></div>
        <div className="container p-3 my-4">
          <div className="d-flex flex-row">
            <div className="p-4">
              <h4>Image Upload</h4>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="col">
              <div className="p-4">
                {$imagePreview}
                <div className="row">
                  <div className="p-4">
                    <form onSubmit={this._handleSubmit}>
                      <input type="file" onChange={this._handleImageChange} />
                      <button type="reset" onClick={this._handleRemove}>Remove</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Preview;
