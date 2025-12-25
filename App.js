import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Home'
import WorkExperience from './src/screens/WorkExperience'
import Projects from './src/screens/Projects'
import ContactUs from './src/screens/ContactUs'
import FAQ from './src/screens/FAQ'
import { Image } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#fff' },
          headerTitle: () => (
            <Image source={require('./src/app/assets/images/WhatsApp Image 2025-11-04 at 10.07.50_c583cade.jpg')} style={{width:40, height:40, borderRadius:20}} />
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkExperience" component={WorkExperience} options={{title: 'Work Experience'}} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="ContactUs" component={ContactUs} options={{title: 'Contact Us'}} />
        <Stack.Screen name="FAQ" component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
