import React, { Component } from 'react';
const stc = require('string-to-color');


class Initials extends Component {
  render() {
    const {name} = this.props

    const symbName =(name
    .trim()
    .split(' ')
    .map((word) => word[0])
    .join('')
    )
   
    const initialsStyle = {
      background: stc(symbName)
    }
    return (
      <div style={initialsStyle} classNames="initials"  className="initials">
          {symbName}
      </div>
    );
  }
}

export default Initials;
