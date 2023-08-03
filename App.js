import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Detail from "./src/pages/Detail";
import Products from "./src/pages/Products";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#A084E8"},
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "#A084E8" },
            headerTitleStyle: { color: "white" },
            headerTintColor:"white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
