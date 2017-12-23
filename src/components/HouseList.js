import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import House from './House'

class HouseList extends Component {

  render() {
    if (this.props.allHousesQuery && this.props.allHousesQuery.loading) {
      return <div>Loading</div>
    }
  
    if (this.props.allHousesQuery && this.props.allHousesQuery.error) {
      console.log('Error', this.props.allHousesQuery.error)
      return <div>Error</div>
    }
  
    const Houses = this.props.allHousesQuery.houses
  
    return (
      <div>
        {Houses.map(house => (
          <House key={house.id} house={house}/>
        ))}
      </div>
    )
  }
}

const ALL_HOUSES_QUERY = gql`
  query AllHouses {
    houses {
      id
      address
      country
      regionCode
      members {
        id
        name
        gender
        age
      }
    }
  }
`

export default graphql(ALL_HOUSES_QUERY, { name: 'allHousesQuery' }) (HouseList)
