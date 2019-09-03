import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getUser} from './redux/reducer';

class App extends Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {
          !this.props.loading && this.props.user.name ?
          (
            <div>
              <h1>{this.props.user.name.first} {this.props.user.name.last}</h1>
              <img src={this.props.user.picture.large} />
            </div>
          )
          :
          (
            <div>Loading...</div>
          )
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getUser})(App);