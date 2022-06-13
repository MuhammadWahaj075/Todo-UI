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
    marginTop: "20%"
  },

  name: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
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

  input: {
    borderRadius: 20,
    paddingLeft: 15,
    elevation: 15,
    backgroundColor: '#fff',
    margin: 10,
    height: 45,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    fontWeight: 'bold',
    fontSize: 20, 
  },
});
