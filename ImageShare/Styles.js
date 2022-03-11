import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 375,
    height: 350,
    marginBottom:10,
  },
  instructions: {
    color: 'blue',
    fontSize: 18,
    marginHorizontal:5
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
  }
});

export default styles
