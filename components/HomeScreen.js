import { Text, TouchableOpacity, View } from 'react-native';
import FontStyles from '../assets/styles/font';

export default function HomeScreen({navigation}) {
  return (
    <View style={FontStyles.container}>
      <Text style={FontStyles.header}>{`Welcome to the\nTrivia Challenge!`} </Text>
      <Text style={FontStyles.instructions}>{`You will be presented\nwith 10 True or False\nquestions.`}</Text>
      <Text style={FontStyles.instructions}>Can you score 100%? </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')}>
        <Text style={{color: 'grey', fontSize: 24, fontWeight: '500'}}>
          BEGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
