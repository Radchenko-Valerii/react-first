import { Component } from "react";
import Initials from "../initials";



class ImgWrapper extends Component {
 constructor(props){
   super(props);
   this.state = {
     isError : false
   }
 }

 isError = () => {
   this.setState({
     isError: true
   })
 }
  
  render() {
    const { profilePicture,  firstName, lastName} = this.props;
    const {isError} = this.state
   
    return (
      <div className = "imgWrapper">
        <Initials name = {firstName+" " +lastName}/>
      <img onError={this.isError} className = {isError ? 'hidden' : 'img'} src={profilePicture} alt={firstName + ' ' + lastName}> 
      </img>
      </div>
    );
  }
}

export default ImgWrapper;
