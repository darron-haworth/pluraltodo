import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const KeyboardSpacer = require('react-native-keyboard-spacer');

const styles = require('../Styles/taskform');

class TaskForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            task: '',
        };
    }
    render() {
        return (
            <View style={styles.container} >
                 <TextInput
                     style={styles.input}
                 />

                 <TouchableHighlight
                     style={styles.button}
                 >
                       <Text style={styles.buttonText}>
                            Add
                       </Text>
                </TouchableHighlight>

                 <TouchableHighlight
                     style={[styles.button, styles.cancelButton]}
                 >
                       <Text style={styles.buttonText}>
                            Cancel
                       </Text>
                </TouchableHighlight>
            <KeyboardSpacer/>
            </View>
            );
    }
}

export default TaskForm;
