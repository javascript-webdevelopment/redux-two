import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getUser} from './redux/reducer';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
};

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getUser})(App);