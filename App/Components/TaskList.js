import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
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
                 <Text>This is a task list item</Text>
            </View>
        );
    }
}

export default TaskList;
