import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#822f82'
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white',
        }

      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'Kullanıcı Girişi'
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: 'Kullanıcı Kayıt'
        }}
      />
    </Stack.Navigator>
  );
}
function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#822f82'
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white',
        }

      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Anasayfa',
          headerRight: ({ tintColor }) => (
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={authContext.logout}
            >
              <Ionicons name="exit" size={30} color={tintColor} />
            </Pressable>
          )
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* giris yapilmadiysa */}
      {!authContext.isAuthenticated && <NormalStack />}
      {/* giris yapildiysa */}
      {authContext.isAuthenticated && <AfterAuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  }
});
