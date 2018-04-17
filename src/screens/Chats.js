import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import renderImages from '../_mock_data/mockImage';
import { images, data } from '../_mock_data/mockChatList';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  // { id: 'chat', image: x.image, name: x.first_name }

  eachMessage(x) {
    const num = Math.floor(Math.random() * 3) + 1;

    if (num > 1) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatView')}> 
          <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
            {
              renderImages(x.image)
            }
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                <Text style={{ marginLeft: 15, fontWeight: '600' }}>{x.first_name} {x.last_name}</Text>
                <Text style={{ color: '#333', fontSize: 10 }}>{x.time}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '400', color: '#333', marginLeft: 15 }}>Can I come over to yours tonight?</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity>
        <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
          {
            renderImages(x.image)
          }
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
              <Text style={{ marginLeft: 15, fontWeight: '600' }}>{x.first_name} {x.last_name}</Text>
              <Text style={{ color: '#333', fontSize: 10 }}>{x.time}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="done-all" size={15} color="#7dd5df" style={{ marginLeft: 15, marginRight: 5 }} />
              <Text style={{ fontWeight: '400', color: '#333' }}>{x.message}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
