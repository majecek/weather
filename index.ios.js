/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, MapView, StyleSheet, Text, View } from 'react-native'
import Api from './src/api'

export default class weather extends Component {

  constructor (props) {
    super(props)

    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temp: '',
      desc: ''
    }
  }

  render () {

    return (
      <View style={styles.map}>
        <Text/>
        <Text>{this.state.city}: {this.state.temp}</Text>
        <MapView
          annotations={[this.state.pin]}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}>
        </MapView>
      </View>
    )
  }

  onRegionChangeComplete = (region) => {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    })

    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log('api',data)
        this.setState({
          city: data.city,
          temp: data.tempetarute,
          desc: data.description
        })
      })
  console.log('after changes:', this.state.city, this.state.temp)
  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})

AppRegistry.registerComponent('weather', () => weather)
