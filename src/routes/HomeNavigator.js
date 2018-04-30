import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calls from '../screens/Calls';
import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import ChatView from '../screens/Chat/ChatView';

const HomeNavigator = StackNavigator({
  Home: { 
    screen: TabNavigator(
      {
        CALLS: { screen: Calls },
        CHATS: { screen: Chats },
        CONTACTS: { screen: Contacts },
      },
      {
        tabBarOptions: {
          activeTintColor: 'black',
          showLabel: true,
          indicatorStyle: {
            backgroundColor: 'gray',
            borderBottomWidth: 0, 
          },
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
            fontWeight: '700',
          },
          style: {
            backgroundColor: 'white',
          },
        },
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
      }
    ),
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0, 
        backgroundColor: 'white',
      },
      headerTitle: <Text>glitch&lt;CHAT&gt;</Text>,
      // headerLeft: <MaterialIcons name="keyboard-backspace" size={25} color="gray" style={{ paddingLeft: 10 }} />,
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="search" size={25} color="gray" style={{ padding: 5 }} />
          <MaterialIcons name="chat" size={25} color="gray" style={{ padding: 5 }} />
          <MaterialIcons name="more-vert" size={25} color="gray" style={{ padding: 5 }} />
        </View>
      ),
    },
  },   
  ChatView: {
    screen: ChatView,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MaterialIcons 
        name="keyboard-backspace" 
        size={25} 
        color="gray" 
        style={{ paddingLeft: 20 }} 
        onPress={() => navigation.goBack()}
      />,
    }),
  },    
}, {
  mode: 'modal',
});

export default HomeNavigator;
