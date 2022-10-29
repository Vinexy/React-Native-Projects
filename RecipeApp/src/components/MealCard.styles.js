import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 4 - 20,
    borderRadius: 12,
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: 'black',
    opacity: 0.7,
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'right',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
