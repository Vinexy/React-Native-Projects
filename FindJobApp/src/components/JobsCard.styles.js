import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 18,
    height: Dimensions.get('window').height / 7,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    flex: 1,
    padding: 5,
  },
  nameText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 18,
  },
  companyText: {
    color: '#000000',
  },
  locationText: {
    backgroundColor: '#EF5350',
    alignSelf: 'flex-start',
    borderRadius: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 4,
  },
  levelText: {
    fontWeight: 'bold',
    color: '#EF5350',
    textAlign: 'right',
  },
});
