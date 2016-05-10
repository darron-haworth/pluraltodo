import React, { Component } from 'react';
import {
  ListView,
} from 'react-native';


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
                 <ListView
                     dataSource={this.state.dataSource}
                     renderRow={this.renderRow}
                 />
        );
    }
}

TaskList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
