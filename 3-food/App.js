import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritescontext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerStyle: { backgroundColor: 'darkblue' },
          headerTintColor: 'white',
        }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Tüm Kategoriler',
          drawerIcon: () => (
            <Feather name="list" size={24} color="black" />
          )
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoriler',
          drawerIcon: () => (
            <AntDesign name="staro" size={24} color="black" />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={
            {
              headerStyle: { backgroundColor: 'darkblue' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: 'lightblue' }
            }
          }
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="FoodOverview"
            component={FoodOverviewScreen}
          />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{
              title: 'İçerik'
            }}
          />
        </Stack.Navigator>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </NavigationContainer>
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
