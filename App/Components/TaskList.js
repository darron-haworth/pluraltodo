import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <Text>This is a task list</Text>
            </View>
        );
    }
}

export default TaskList;
