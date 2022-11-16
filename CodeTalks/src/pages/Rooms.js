import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import Modals from '../components/Modals';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const RoomList = ({navigation}) => {
  const [roomList, setRoomList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        if (snapshot.val() !== null) {
          const parsedData = Object.keys(snapshot.val())
            .map(key => {
              return {
                id: key,
                ...snapshot.val()[key],
              };
            })
            .sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
          setRoomList(parsedData);
        }
      });
  }, []);
  const handleContent = content => {
    const userMail = auth().currentUser.email;

    const contentObject = {
      roomName: content,
      roomCreator: auth().currentUser.email.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref('/rooms').push(contentObject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.roomList}>
        <FlatList
          numColumns={2}
          data={roomList}
          renderItem={one => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MessageList', {
                  id: one.item.id,
                  roomName: one.item.roomName,
                })
              }
              style={styles.room}>
              <Text style={styles.roomText}>{one.item.roomName}</Text>
            </TouchableOpacity>
          )}
        />
        <Modals
          onSend={handleContent}
          onClose={handleOpenModal}
          visible={modalVisible}
          placeholderTexty={'Room Name...'}
        />
      </View>
      <TouchableOpacity onPress={handleOpenModal} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  roomList: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFA040',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  room: {
    margin: 12,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width / 2 - 40,
    height: Dimensions.get('window').height / 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ECEFF1',
  },
  roomText: {
    color: '#FFA040',
    fontSize: 32,
  },
});
