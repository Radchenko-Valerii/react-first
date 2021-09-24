import React, { Component } from 'react';

function stringToColour(str) {
  let mash = 0;
  for (let i = 0; i < str.length; i++) {
    mash = str.charCodeAt(i) + ((mash << 5) - mash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (mash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}


class Initials extends Component {
  render() {
    const {firstName, lastName} = this.props
    const symbName = document.createTextNode(
      (firstName + " " + lastName)
        .trim()
        .split(' ')
        .map((word) => word[0])
        .join('')
    )
    return (
      <div background-color={stringToColour(symbName)} className="initials">
        {symbName}
      </div>
    );
  }
}

export default Initials;
