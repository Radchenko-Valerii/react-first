import { Component } from "react";


class Aloha extends Component {
  constructor (props){
    super(props)
    this.state = {
      isGreeting: true
    }
  }

  fu = () => {
    const {isGreeting} = this.state;
    const switchGreet = !isGreeting
    this.setState({
      isGreeting: switchGreet
    })
  }
  render() {
    const { name} = this.props;
    return (
      <div>
      <h1>
        {this.state.isGreeting ? "Hi" : "goodbye"}, dammit {name}
      </h1>
      <button onClick={this.fu}>PUSH ME</button>
      </div>
    );
  }
}

export default Aloha;
