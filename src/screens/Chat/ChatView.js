import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import InputBar from './components/InputBar';
import MessageBubble from './components/MessageBubble';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default class ChatView extends Component {
  constructor(props) {
    super(props);

    const userText = 'message test text';

    const numberOfMessages = 20;

    const messages = [];

    for (let i = 0; i < numberOfMessages; i++) {
      const messageLength = getRandomInt(10, 120);

      const direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      const message = userText.substring(0, messageLength);

      messages.push({
        direction,
        text: message,
      });
    }

    this.state = {
      messages,
      inputBarText: '',
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    });
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    this.scrollView.scrollToEnd();
  }

  keyboardDidHide(e) {
    this.scrollView.scrollToEnd();
  }

  _sendMessage() {
    this.state.messages.push({ direction: 'right', text: this.state.inputBarText });

    this.setState({
      messages: this.state.messages,
      inputBarText: '',
    });
  }

  _onChangeInputBarText(text) {
    this.setState({
      inputBarText: text,
    });
  }

  _onInputSizeChange() {
    setTimeout(() => {
      this.scrollView.scrollToEnd({ animated: false });
    });
  }

  render() {
    const messages = [];

    this.state.messages.forEach((message, index) => {
      messages.push(
        <MessageBubble key={`index${index + 1}`} direction={message.direction} text={message.text} />
      );
    });

    return (
      <View style={styles.outer}>
        <ScrollView ref={(ref) => { this.scrollView = ref; }} style={styles.messages}>
          {messages}
        </ScrollView>
        <InputBar
          onSendPressed={() => this._sendMessage()} 
          onSizeChange={() => this._onInputSizeChange()}
          onChangeText={(text) => this._onChangeInputBarText(text)}
          text={this.state.inputBarText}
        />
        <KeyboardSpacer />             
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
    
  messages: {
    flex: 1,
  },
});
  
