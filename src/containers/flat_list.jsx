import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
    // TODO: dispatch an action to update the refux state tree (flats)
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
