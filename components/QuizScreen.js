import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from '../assets/styles/styles';
import { getQuestions } from '../assets/utils/request';
import { useNetInfo } from '@react-native-community/netinfo';
import InternetConnectionLost from '../components/InternetConnectionLost';

export default function QuizScreen({ navigation }) {
  const [index, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const netInfo = useNetInfo();

  useEffect(() => {
    setLoading(true);
    getQuestions()
      .then((responseJson) => {
        setQuestions(responseJson.results);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);

  const verifyAnswer = (value) => {
    const correctAnswer = value === questions[index]?.correct_answer;
    answers.push({ question: questions[index]?.question, correct: correctAnswer });
    setAnswers(answers);
    if (index === 9) goToResultScreen();
    setCurrentIndex(index + 1);
  };

  const calculateScore = () => answers.filter((answer) => answer.correct === true).length;
  const goToResultScreen = () =>
    navigation.navigate('Result', { score: calculateScore(), answers: answers });

  return netInfo.isConnected ? (
    loading ? (
      <View></View>
    ) : (
      <View style={Styles.container}>
        <Text style={Styles.header}>{questions[index]?.category} </Text>
        <View>
          <View style={Styles.square}>
            <Text style={Styles.squareInstructions}>
              {questions[index]?.question.replace(/&quot;/g, '"')}
            </Text>
          </View>
          <Text style={Styles.counter}>{index + 1} of 10 </Text>
        </View>
        <View style={Styles.answer}>
          <TouchableOpacity onPress={() => verifyAnswer('True')}>
            <Text style={[Styles.buttonText, Styles.answerButton, Styles.green]}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => verifyAnswer('False')}>
            <Text style={[Styles.buttonText, Styles.answerButton, Styles.red]}>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  ) : (
    <InternetConnectionLost />
  );
}
