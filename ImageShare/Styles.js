import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 375,
    height: 350,
    marginBottom:10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  instructions: {
    color: '#0703aa',
    fontSize: 22,
    marginHorizontal: 5,
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: '#00bfff',
    color: 'white',
    padding: 10
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  baseText: {
    fontFamily: "Cochin"
  },
});

export default styles
