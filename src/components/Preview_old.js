import React, { Component } from 'react';


class Preview extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      // this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    // _handleSubmit(e) {
    //   e.preventDefault();
    //   // TODO: do something with -> this.state.file
    // }
  
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
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} class="img-b" />);
      }
  
      return (
        <div>
         <div class="container p-3 my-4">
         <div class="d-flex flex-row">
         <div class="p-4">
        <h4>Image Upload</h4> 
        </div>
        </div>
        <div class="d-flex flex-row">
         <div class="col">
        <div class="p-4">
        {$imagePreview}
        <div class="row">
        <div class="p-4">
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
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
  