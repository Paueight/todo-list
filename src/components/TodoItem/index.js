import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {

  state = {
    completed: false
  }

  toggleTodo = () => {
    this.setState({ completed: !this.state.completed })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.toggleTodo}>
        <Text style={[styles.item, {
          backgroundColor: (this.state.completed ? 'gray' : 'transparent')
        }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10
  }
})
