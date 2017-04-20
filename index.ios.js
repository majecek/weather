/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, MapView, StyleSheet } from 'react-native'

export default class weather extends Component {

  constructor (props) {
    super(props)

    this.state={
      pin: {
        latitude: 0,
        longitude:0
      }
    }
  }

  render () {

    return (
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>

      </MapView>
    )
  }

  onRegionChangeComplete = (region) => {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    })
  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})

AppRegistry.registerComponent('weather', () => weather)
