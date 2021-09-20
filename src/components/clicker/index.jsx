import {Component} from "react";

class Clicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  count=()=>{
    let {counter} = this.state
    this.setState({
      counter : counter+1
    })
  }

  render(){
    let {counter} = this.state
    const but = <button onClick={this.count}>click</button>;
   return <div>
     <h2> {this.state.counter}</h2>
      {counter <3 ? but : false}
    </div>
  }
}

export default Clicker