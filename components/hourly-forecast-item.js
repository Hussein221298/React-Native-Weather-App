import { StyleSheet, Text, View } from 'react-native';

export default function HourlyForecastList(props) {

  return (
    <View style={styles.container}>
      <Text>{props.forecast.hour}</Text>
      <Text>{props.forecast.temp}</Text>
      <Text>{props.forecast.condition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    paddingTop: 20,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 20,
    margin: 10,
  }
 });
 