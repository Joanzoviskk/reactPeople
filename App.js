import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './src/pages/PeoplePage';

const Stack = createStackNavigator();

function HomeStacknavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRoutName="Main" headerMode='nome'>
        <Stack.Screen name="Main" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const AppNavigator = createStackNavigator({
//   'Main':{
//     screen: PeoplePage 
//   }
// })

// const AppContainer = createAppContainer(StackNavigator);


export default HomeStacknavigation;

