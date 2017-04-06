import React, { Component } from 'react';
import Rating from 'react-rating';

// const { } = PropTypes;
class ReviewForm extends Component {
  // static props = {
  //
  // }
  state = {
    titleValue: '',
    descriptionValue: '',
    rating: 0,
    locationValue: '',
  }

  handleClickValue = (value) => {
    console.debug(value);
    this.setState({
      rating: value,
    });
  }

  render() {
    return (
      <div>
        I am a Review Form
        Needs an Input for title
        Needs an Input for description
        something for location?

        <div>
          <div>Something for star rating?</div>
          <Rating
            start={0}
            stop={10}
            onClick={this.handleClickValue}
            // TODO needs different icons
          />
        </div>
      </div>
    );
  }
}

export default ReviewForm;
