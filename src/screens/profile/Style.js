import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profImg: {
    borderRadius: 70,
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: '#CFCCF6',
  },

  name: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },

  icon: {
    justifyContent: 'flex-end',
    padding: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
    borderWidth: 4,
    borderColor: '#E6E5FA',
    borderRadius: 50,
    backgroundColor: '#E5E4F9',
  },

  fbIcon: {
    borderRadius: 40,
    width: 50,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fname: {
    borderRadius: 20,
    elevation: 15,
    backgroundColor: '#fff',
    margin: 10,
    height: 45,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  gender: {
    borderRadius: 20,
    elevation: 15,
    backgroundColor: '#fff',
    margin: 10,
    height: 45,
    width: '90%',
   justifyContent: 'center',
   alignSelf: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
