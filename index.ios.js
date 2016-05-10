import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';


import TaskList from './App/Components/TaskList';

const styles = require('./App/Styles/main');

class pluraltodo extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
          todos: [
              {
                  task: 'Learn React Native 1',
              },
              {
                  task: 'Learn React Native 2',
              },
          ],
      };
  }
  render() {
      return (
          <View style={styles.container}>
              <TaskList todos={this.state.todos} />
          </View>
    );
  }
}

AppRegistry.registerComponent('pluraltodo', () => pluraltodo);
