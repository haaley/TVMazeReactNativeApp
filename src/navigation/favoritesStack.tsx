import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";
import { Favorites } from "../pages/favorites";
import Home from "../pages/home";

export type FavoriteStackParamList = {
  Favorites: undefined;
  Search: undefined;
  Details: { sort: 'latest' | 'top' } | undefined;
};
    
const Stack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorites" 
  screenOptions={
    {
      header: Header
    }
  }>
    <Stack.Screen name="Favorites" component={Favorites} />
  </Stack.Navigator>
);

export default FavoriteStack;