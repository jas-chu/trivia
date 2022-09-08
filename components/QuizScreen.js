import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontStyles from '../assets/styles/font';
import { getQuestions } from '../assets/utils/request';
import {useNetInfo} from "@react-native-community/netinfo";
import InternetConnectionLost from '../components/InternetConnectionLost'

export default function QuizScreen({navigation}) {
  const [ index, setCurrentIndex ] = useState(0)
  const [ questions, setQuestions] = useState([])
  const [ answers, setAnswers ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const netInfo = useNetInfo();

  useEffect(() => {
    setLoading(true)
    getQuestions().then((responseJson) => {
      setQuestions(responseJson.results)
      setLoading(false)
    }).catch((error) => {
      throw new Error(error.message);
    });
  }, []);

  const verifyAnswer = (value) => {
    const correctAnswer = value === questions[index]?.correct_answer
    answers.push({question: questions[index]?.question, correct: correctAnswer})
    setAnswers(answers)
    if (index === 9) goToResultScreen()
    setCurrentIndex(index + 1)
  }

  const calculateScore =  () => answers.filter((answer) => answer.correct === true).length
  const goToResultScreen = () => navigation.navigate('Result', {score: calculateScore(), answers: answers})

  return (
    netInfo.isConnected? (
    loading? <View></View>:
    <View style={FontStyles.container}>
      <Text style={FontStyles.header}>{questions[index]?.category} </Text>
      <View style={FontStyles.square}>
        <Text style={FontStyles.squareInstructions}>{ questions[index]?.question.replace(/&quot;/g, '"') }</Text>
      </View>
      <Text style={FontStyles.counter}>{index + 1} of 10 </Text>
      <View style={FontStyles.answer}>
        <TouchableOpacity style={FontStyles.answerButton} onPress={() => verifyAnswer("True")}>
          <Text style={[FontStyles.buttonText, FontStyles.green]}>
            True
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={FontStyles.answerButton} onPress={() => verifyAnswer("False")}>
          <Text style={[FontStyles.buttonText, FontStyles.red]}>
            False
          </Text>
        </TouchableOpacity>
      </View>
    </View>)
    :
    <InternetConnectionLost />

  );
}
 