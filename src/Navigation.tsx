import React from "react";
import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./components/home/Menu";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const navigation = () => {
  return(
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Menu} options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => {
                  <MaterialCommunityIcons name="home" size={size} color={color} />
              }
          }}>
          </Tab.Screen>
      </Tab.Navigator>
  )
}

export default navigation