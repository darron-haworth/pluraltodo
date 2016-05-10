import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

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
        return (<Text>{todo.task}</Text>);
    }

    render() {
        return (
                 <ListView
                     dataSource={this.state.dataSource}
                     renderRow={this.renderRow}
                     style={styles.container}
                 />
        );
    }
}

TaskList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
