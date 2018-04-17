import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MessageBubble extends Component {
  render() {
    // These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    const leftSpacer = this.props.direction === 'left' ? null : <View style={{ width: 70 }} />;
    const rightSpacer = this.props.direction === 'left' ? <View style={{ width: 70 }} /> : null;
  
    const bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];
  
    const bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;
  
    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        {leftSpacer}
        <View style={bubbleStyles}>
          <Text style={bubbleTextStyle}>
            {this.props.text}
          </Text>
        </View>
        {rightSpacer}
      </View>
    );
  }
}

// TODO: separate these out. This is what happens when you're in a hurry!
const styles = StyleSheet.create({ 
  messageBubble: {
    borderRadius: 10,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
    
  messageBubbleLeft: {
    backgroundColor: '#d5d8d4',
  },
    
  messageBubbleTextLeft: {
    color: 'black',
  },
    
  messageBubbleRight: {
    backgroundColor: '#9b59b6',
  },
    
  messageBubbleTextRight: {
    color: 'white',
  },
});
  
