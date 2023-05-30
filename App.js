import { StyleSheet, View } from 'react-native';
import MainPage from './pages/main-page';
import { Provider } from 'react-redux';
import store from './store/configStore';

export default function App() {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        <MainPage />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
