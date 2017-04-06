import React, { Component, PropTypes } from 'react';
// import { IonBody } from 'reactionic';
// import getPlatform from '../utilities/getPlatform';
import View from '/imports/app/reviews/components/View';

const { node, object } = PropTypes;

export default class App extends Component {
  static propTypes = {
    children: node,
    location: object,
  }

  render() {
    // const { children, location } = this.props;
    //
    // const platform = getPlatform();

    return (
      <View />
      // <IonBody location={location} platform={platform}>
      //   {React.cloneElement(children, {})}
      // </IonBody>
    );
  }
}
