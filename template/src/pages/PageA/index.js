import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class PageAScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>This is page A</Text>
        </View>
      </SafeAreaView>
    );
  }
}
