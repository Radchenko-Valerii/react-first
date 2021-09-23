import React, { Component } from 'react';


class CardFullName extends Component {
  render() {
    const {firstName, lastName} = this.props
    return (
      <h2 className = "cardName">
        {firstName} {lastName}
      </h2>
    );
  }
}

export default CardFullName;
