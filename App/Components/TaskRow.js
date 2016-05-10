import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

const styles = require('../Styles/taskrow');

class TaskRow extends Component {
    render() {
        return (
            <View style={styles.container} >
                 <Text style={styles.label}>{this.props.todo.task}</Text>
            </View>
            );
    }
}

TaskRow.propTypes = {
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskRow;
