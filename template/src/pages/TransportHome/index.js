import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from '@uiw/react-native';
import { connect } from 'react-redux';

class MyScreen extends Component {
  componentDidMount() {
    this._getTestData();
  }
  _getTestData() {
    this.props.getTestData();
  }
  _gotoPageA = () => {
    this.props.navigation.navigate('PageA');
  };
  render() {
    const { testData } = this.props;
    console.log(testData);
    return (
      <SafeAreaView>
        <View>
          <Text>发货首页</Text>
          <Button
            style={[styles.button, styles.marginVerticalSmall]}
            color="#BFBFBF"
            onPress={this._gotoPageA}
          >
            <Text style={styles.buttonText}>跳转到 Page A</Text>
          </Button>
          <View style={styles.testData}>
            <Text style={styles.marginRightSmall}>
              姓名：{testData.name}
            </Text>
            <Text>
              年龄：{testData.age}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  testData: {
    flexDirection: 'row',
  },
  button: {
    width: 128,
    height: 32,
  },
  buttonText: {
    fontSize: 12,
  },
  // common
  marginRightSmall: {
    marginRight: 8,
  },
  marginVerticalSmall: {
    marginVertical: 8,
  }
});

export default connect(
  ({ users }) => ({
    testData: users.testData,
  }),
  ({ users }) => ({
    getTestData: users.getTestData,
  }),
)(MyScreen);
