import React from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';

class DonateContainer extends React.Component {
  render() {
    return (
      <WebView
        source={ { uri: 'https://www.patreon.com/sdjs' } }
        style={ { marginTop: 20 } }
      />
    );
  }
}

// eslint-disable-next-line no-unused-vars
function mapStoreToProps(store) {
  return {};
}

export default connect(mapStoreToProps)(DonateContainer);
