import { StyleSheet, View } from 'react-native';
import MainPage from './pages/main';
import SettingsPage from './pages/settings';
import { Provider } from 'react-redux';
import store from './store/configStore';
        {/* <MainPage /> */}

export default function App() {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        <MainPage />
        <SettingsPage />
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
    width: '100%',
    height: '100%'
  },
});
