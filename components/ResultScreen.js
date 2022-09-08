import { Text, TouchableOpacity, View } from 'react-native';
import FontStyles from '../assets/styles/font';

export default function ResultScreen({route, navigation}) {
  const { score, answers } = route.params
  return (
    <View style={FontStyles.container}>
      <Text style={FontStyles.header}>{`You scored ${score} / 10`} </Text>
      <View>
        {answers && answers.map(((item, index) => 
        <View style={FontStyles.resultItem} key={index}>
          <Text style={FontStyles.question}>{item.correct? '+' : '-'}</Text>
          <Text style={FontStyles.question}>{item.question.replace(/&quot;/g, '"')}</Text>
        </View>))}
      </View>
      <TouchableOpacity styles={FontStyles.button} onPress={()=> navigation.navigate('Home')}>
        <Text style={FontStyles.buttonText}>
          PLAY AGAIN?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
