import React from "react";
import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./components/home/Menu";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListComponent from "./components/list/List";
import Icon from "react-native-vector-icons/FontAwesome";
import Users from "./components/Users/Users";
import ChatComponent from "./components/Users/Chat";

const Tab = createBottomTabNavigator()

const navigation = () => {
  return(
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Menu} options={{
              tabBarLabel: "Home",
              tabBarIcon: () => <Icon name="home"/>
          }}>
          </Tab.Screen>
          <Tab.Screen name="List" component={ListComponent} options={{
              tabBarLabel: "Listado",
              tabBarIcon: () => <Icon name="list"/>
          }}>
          </Tab.Screen>
          <Tab.Screen name="Users" component={Users} options={{
              tabBarLabel: "Usuarios",
              tabBarIcon: () => <Icon name="user"/>
          }}>
          </Tab.Screen>
          <Tab.Screen name="Chats" component={ChatComponent} options={{
              tabBarLabel: "Chat",
              tabBarIcon: () => <Icon name="whatsapp"/>
          }}>
          </Tab.Screen>
      </Tab.Navigator>
  )
}

export default navigation