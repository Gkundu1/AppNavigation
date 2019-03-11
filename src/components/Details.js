import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Detail screen!</Text>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => this.props.navigation.push('Details')}>
          <Text>Go to Details... again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#5aa4f4',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  }
});