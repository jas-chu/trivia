import { Text, TouchableOpacity, View } from 'react-native';
import Styles from '../assets/styles/styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>{`Welcome to the\nTrivia Challenge!`} </Text>
      <Text style={Styles.instructions}>{`You will be presented\nwith 10 True or False\nquestions.`}</Text>
      <Text style={Styles.instructions}>Can you score 100%? </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')}>
        <Text style={Styles.buttonText}>
          BEGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
