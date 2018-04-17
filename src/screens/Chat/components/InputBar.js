import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

export default class InputBar extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.text === '') {
      this.clearText();
    }
  }
  
  clearText = () => {
    this._textInput.setNativeProps({ text: '' });
  }

  render() {
    return (
      <View style={styles.inputBar}>
        <TextInput
          style={styles.textBox}
          ref={(ref) => { this._textInput = ref; }} 
          multiline
          maxHeight={40}
          onChangeText={(text) => this.props.onChangeText(text)}
          onContentSizeChange={this.props.onSizeChange}
          value={this.props.text}
        />
        <TouchableHighlight style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
          <Text style={{ color: '#9b59b6', fontWeight: '700' }}>Send</Text>
        </TouchableHighlight>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  
  textBox: {
    borderRadius: 10,
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ecf0f1',
  },
  
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5,
    paddingRight: 15,
    borderRadius: 5,
  },
});
  
