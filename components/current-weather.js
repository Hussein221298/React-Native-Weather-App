import { StyleSheet, Text, View } from 'react-native';

const weather = {
  city: 'Beirut',
  temp: 24,
  condition: 'Sunny',
  date: new Date()
};

export default function CurrentWeather() {
  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.title}>
          {weather.city}
        </Text>
        <Text style={styles.date}>
          {weather.date.toUTCString()}
        </Text>
      </View>

      <Text style={styles.temperature}>
        {weather.temp} C
      </Text>   
      <Text style={styles.condition}>
        {weather.condition}
      </Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454BB4',
    marginTop: 10,
    width: '95%',
    borderRadius: 10,
    padding: 10
  },
  title: {
    fontSize: 50,
    color: '#FFF',
  },
  date: {
    fontSize: 15,
    color: '#FA9B14',
  },
  temperature: {
    fontSize: 35,
    color: '#FA9B14',
    fontWeight: 500,
  },
  condition: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 500,
  }
});
 