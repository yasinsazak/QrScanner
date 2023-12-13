import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3ED',
    alignItems: 'center',
    marginTop: 200,
  },
  button: {
    backgroundColor: '#336CB3',
    width: 200,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  logo: {height: 220, position: 'absolute', bottom: 80, left: 0, right: 0},
});
