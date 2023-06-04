import MainPage from './pages/main';
import SettingsPage from './pages/settings';
import { Provider } from 'react-redux';
import store from './store/configStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThemeProvider from './theme-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={ store }>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
