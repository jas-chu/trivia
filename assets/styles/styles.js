import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 20
  },
  instructions: {
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    height: '70%',
  },
  square: {
    borderColor: 'black',
    borderWidth: 1,
    minWidth: '90%',
    minHeight: '45%',
    marginTop: '20%',
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
    padding: 20
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
});

export default Styles