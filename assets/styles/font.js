import { StyleSheet } from "react-native";

const FontStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  header: {
    // flex: 1,
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 20
  },
  instructions: {
    // flex: 1,
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    height: '70%',
  },
  square: {
    // flex: 2,
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: '40%',
    justifyContent: 'center'
  },
  squareInstructions: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
  question: {
    fontSize: 18,
    color: 'grey',
    padding: 5
  },
  counter: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center'
  },
  buttonText: {
    color: 'grey', 
    fontSize: 24, 
    fontWeight: '500'
  },
  resultItem: {
    flexDirection: 'row'
  },
  answer: {
    flexDirection: "row",
  },
  answerButton: {
    flex: 1,
    alignContent: "center"
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
});

export default FontStyles