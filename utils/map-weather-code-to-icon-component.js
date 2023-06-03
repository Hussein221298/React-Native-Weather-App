import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import wmoMap from './wmo-codes-to-description'

export default mapWeatherCodeToIconComponent = ({ weatherCode, isDay }) => {
  let weatherCondition = wmoMap(weatherCode);
  let iconName = '';
  let component;

  if (isDay) {
    iconName = weatherCondition.dayIcon;
    component = mapIconSourceToSourceComponent(weatherCondition.daySource);
  } else {
    iconName = weatherCondition.nightIcon;
    component = mapIconSourceToSourceComponent(weatherCondition.nightSource);
  }
  return {
    iconName,
    component,
    description: weatherCondition.description
  }
};

const mapIconSourceToSourceComponent = (source) => {
  if (source === 'Fontisto') {
    return Fontisto;
  } else if (source === 'Feather') {
    return Feather;
  } else if (source === 'FontAwesome5') {
    return FontAwesome5;
  } else if (source === 'MaterialCommunityIcons') {
    return MaterialCommunityIcons;
  }
}