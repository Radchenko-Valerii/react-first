import React, { Component } from 'react';



class Initials extends Component {
  render() {
    const {firstName, lastName} = this.props
    const symbName =((firstName + " " + lastName)
        .trim()
        .split(' ')
        .map((word) => word[0])
        .join('')
    )
   console.log(symbName)
    return (
      <div classNames="initials"  className="initials">
          {symbName}
      </div>
    );
  }
}

export default Initials;
