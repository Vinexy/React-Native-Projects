import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerContainer: {
    margin: 10,
    backgroundColor: '#F2F2F2',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#37474F',
  },
  locationFor: {
    color: '#EF6E6B',
    fontWeight: 'bold',
    fontSize: 15,
  },
  location: {
    marginTop: 5,
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 14,
  },
  levelFor: {
    color: '#EF6E6B',
    fontWeight: 'bold',
    fontSize: 15,
  },
  level: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  header: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#37474F',
    textAlign: 'center',
  },
  htmlArea: {
    paddingLeft: 4,
    fontSize: 12,
    color: '#rgb(3,3,3)',
    margin: -5,
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderWidth: 2,
    marginLeft: 2,
    marginRight: 1,
    borderColor: '#E0E0E0',
  },
  but: {
    margin: 14,
    flexDirection: 'row',
    backgroundColor: '#EF5350',
    borderRadius: 6,
    width: Dimensions.get('window').width / 2 - 30,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    justifyContent: 'center',
    textAlignVertical: 'middle',
  },
});
