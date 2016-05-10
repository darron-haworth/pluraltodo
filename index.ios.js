import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
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

  onAddStarted() {
      this.nav.push({
          name: 'taskform',
      });
  }

  renderScene(route, nav) {
      switch (route.name) {
      case 'taskform':
          return (
              <View style={styles.container}>
                    <Text>Add form comes here</Text>
              </View>
          );
      default:
          return (
              <View style={styles.container}>
              <TaskList
                  onAddStarted={this.onAddStarted.bind(this)}
                  todos={this.state.todos}
              />
              </View>
          );
      }
  }

  configureScene() {
      return Navigator.SceneConfigs.FloatFromBottom;
  }


  render() {
      return (
         <Navigator
             configureScene={this.configureScene}
             initialRoute={{ name: 'tasklist', index: 0 }}
             ref={((nav) => {
                 this.nav = nav;
             })}
             renderScene={this.renderScene.bind(this)}
         />
    );
  }
}

AppRegistry.registerComponent('pluraltodo', () => pluraltodo);
