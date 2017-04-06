import React, { Component } from 'react';

// const { } = PropTypes;
class ReviewCard extends Component {
  // static props = {
  //
  // }
  state = {
    titleValue: '',
    descriptionValue: '',
    rating: 0,
    locationValue: '',
  }

  render() {
    return (
      <div>
        I am a Review Card. I have some
        Title
        Location
        Rating
        Description
      </div>
    );
  }
}

export default ReviewCard;
