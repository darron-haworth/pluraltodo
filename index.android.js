import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';


import TaskList from './App/Components/TaskList';


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
          <TaskList todos={this.state.todos} />
    );
  }
}

AppRegistry.registerComponent('pluraltodo', () => pluraltodo);
