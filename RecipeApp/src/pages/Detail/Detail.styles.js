import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flexDirection: 'column',
    flex: 1,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  name: {
    marginLeft: 5,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  from: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A52A2A',
    marginBottom: 5,
  },
  instructions: {
    borderTopColor: '#rgb(189,189,189)',
    borderTopWidth: 1,
    padding: 5,
  },
  touch: {
    margin: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  touchText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,

  }
});
