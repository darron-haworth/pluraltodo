import React, { Component } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = require('../Styles/tasklist');

import TaskRow from './TaskRow';

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    renderRow(todo) {
        return (
            <TaskRow todo={todo} />
        );
    }

    render() {
        return (
                <View style={styles.container} >
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />

                  <TouchableHighlight
                      onPress={this.props.onAddStarted}
                      style={styles.button}
                  >
                        <Text style={styles.buttonText}>Add Task</Text>
                  </TouchableHighlight>

                 </View>
        );
    }
}

TaskList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
