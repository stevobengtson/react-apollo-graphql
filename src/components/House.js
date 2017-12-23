import React, { Component } from 'react'

class House extends Component {
  render() {
    return (
      <div>
        <div>{this.props.house.id}, {this.props.house.address}, {this.props.house.country}, {this.props.house.regionCode}</div>
      </div>
    )
  }
}

export default House
