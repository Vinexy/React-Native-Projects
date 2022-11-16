import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import database from '@react-native-firebase/database';
import Modals from '../components/Modals';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {parseISO, formatDistance} from 'date-fns';
import {height} from '@fortawesome/free-solid-svg-icons/faSignOut';

const MessageList = ({route}) => {
  const [messageList, setMessageList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getHeader = () => {
    return (
      <View style={styles.foundContainer}>
        <Text style={styles.foundText}>
          {route.params.roomName} room is created !
        </Text>
      </View>
    );
  };

  useEffect(() => {
    database()
      .ref(`/rooms/${route.params.id}/messages`)
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
          setMessageList(parsedData);
        }
      });
  }, []);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleContent = content => {
    const userMail = auth().currentUser.email;

    const contentObject = {
      messages: content,
      writer: auth().currentUser.email.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref(`/rooms/${route.params.id}/messages`).push(contentObject);
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={getHeader}
        data={messageList}
        renderItem={one => (
          <View style={styles.messageContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.writer}>{one.item.writer}</Text>
              <Text style={styles.date}>
                {formatDistance(parseISO(one.item.date), new Date(), {
                  addSuffix: true,
                })}
              </Text>
            </View>
            <Text style={styles.message}>{one.item.messages}</Text>
          </View>
        )}
      />
      <Modals
        onSend={handleContent}
        onClose={handleOpenModal}
        visible={modalVisible}
        placeholderTexty={'Your message...'}
      />
      <TouchableOpacity onPress={handleOpenModal} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB74D',
    flex: 1,
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
    borderWidth: 1,
    borderColor: '#ED943B',
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  buttonText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  messageContainer: {
    margin: 10,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
  },
  writer: {
    color: '#4C5A61',
    fontSize: 14,
    fontWeight: '400',
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#37474F',
    fontSize: 18,
  },
  date: {
    fontStyle: 'italic',
    color: '#4C5A61',
  },
  foundContainer: {
    borderStyle: 'dotted',
    borderColor: '#FFFFFF',
    borderWidth: 1.5,
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  foundText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
