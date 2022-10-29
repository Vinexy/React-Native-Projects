import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 20,
    margin: 8,
    height: Dimensions.get('window').height / 10,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    resizeMode: 'contain',
    height: 60,
    flex: 1,
    right: 36,
    top: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'times',
    flex: 1,
    right: 70,
    top: 24,
    color: 'black',
  },
});
