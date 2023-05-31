import { StyleSheet, Text, View } from 'react-native';

export default function HourlyForecastList(props) {

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{props.forecast.hour}</Text>
      <Text style={ styles.text }>{props.forecast.temp}</Text>
      <Text style={ styles.text }>{props.forecast.condition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#89AFFF',
    opacity: 0.8,
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    margin: 10,
    borderWidth: 4,
    borderColor: '#4e75b2',

  },
  text: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 600,
  }
 });
 