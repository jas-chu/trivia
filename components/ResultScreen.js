import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../assets/styles/styles';

export default function ResultScreen({ route, navigation }) {
  const { score, answers } = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>{`You scored ${score} / 10`} </Text>
      <ScrollView>
        {answers &&
          answers.map((item, index) => (
            <View style={Styles.resultItem} key={index}>
              <Text style={Styles.question}>{item.correct ? '+' : '-'}</Text>
              <Text style={Styles.question}>{item.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Text>
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity styles={Styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={Styles.buttonText}>PLAY AGAIN?</Text>
      </TouchableOpacity>
    </View>
  );
}
