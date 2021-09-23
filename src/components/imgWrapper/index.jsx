import { Component } from "react";


class ImgWrapper extends Component {
  
  
  render() {
    const { profilePicture,  firstName, lastName} = this.props;
    return (
      <div className = "imgWrapper">
      <img src={profilePicture} alt={firstName + ' ' + lastName}> 
      </img>
      </div>
    );
  }
}

export default ImgWrapper;
