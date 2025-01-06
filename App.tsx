import ExploreScreen from './src/screens/ExploreScreen.tsx'
import ChatScreen from './src/screens/ChatScreen.tsx'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import "./global.css"
import { View } from 'react-native';
export default function App() {
  

  return (
    <View style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExploreScreen"   >
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}