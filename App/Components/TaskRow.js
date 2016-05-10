import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

const styles = require('../Styles/taskrow');

class TaskRow extends Component {
    render() {
        return (
            <Text>{this.props.todo.task}</Text>
            );
    }
}

TaskRow.propTypes = {
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskRow;
