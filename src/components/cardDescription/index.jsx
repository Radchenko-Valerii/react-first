import React, { Component } from 'react';

class Description extends Component {
  render() {
    const {description='Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'} = this.props;

    return (
      <article className="cardDescription">
        {description}
      </article>
    );
  }
}

export default Description;
