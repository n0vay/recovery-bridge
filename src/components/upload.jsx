import React, { Component } from "react";

class Upload extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccessfully: false,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // axios.post("https://h85nx3nbxl.execute-api.us-east-1.amazonaws.com/dev2/file-upload",formData).then( () => {
    //   this.setState({selectedFile: null});
    //   this.setState({fileUploadedSuccessfully: true});
    // })

    console.log(formData);
    this.setState({ selectedFile: null });
    this.setState({ fileUploadedSuccessfully: true });
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2> File details:</h2>
          <p>File name: {this.state.selectedFile.name}</p>
          <p>File type: {this.state.selectedFile.type}</p>
          {/* <p>Last Modified:{" "}
           {this.state.selectedFile.lastModifiedDate.toDateString()}</p> */}
        </div>
      );
    } else if (this.state.fileUploadedSuccessfully) {
      return (
        <div>
          <br />
          <h4>file successfuly uploaded</h4>
        </div>
      );
    } else {
      return (
        <div>
          <h4>choose file and click upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h2> Recovery Bridge File Upload System</h2>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Upload;
