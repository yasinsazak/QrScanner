import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3ED',
    alignItems: 'center',
    marginTop: 50,
    width: width,
  },
  title: {
    color: 'gray',
    fontSize: 17,
    marginTop: 10,
  },
  info: {
    color: '#336CB3',
    fontSize: 20,
  },
  status: {
    color: '#336CB3',
    fontSize: 25,
  },
  innerContainer: {
    marginTop: 20,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#336CB3',
    width: 200,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  logo: {height: 220, position: 'absolute', bottom: 80, left: 0, right: 0},
});
