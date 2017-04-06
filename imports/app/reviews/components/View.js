import React, { Component } from 'react';

import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

// const { } = PropTypes;
class View extends Component {
  // static props = {
  //
  // }

  render() {
    return (
      <div>
        <ReviewForm />
        <ReviewCard />
      </div>
    );
  }
}

export default View;
