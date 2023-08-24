import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useRoute } from "@react-navigation/native";
import RegistrationScreen from "./screen/RegistrationScreen";
import LoginScreen from "./screen/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
// import HomeScreen from "./src/screens/Main/HomeScreen";
import PostsScreen from "./screen/PostsScreen";
import CreatePostScreen from "./screen/CreatePostsScreen";
// import CommentsScreen from "./src/screens/RestedScreens/CommentsScreen";
// import MapScreen from "./src/screens/RestedScreens/MapScreen";
import ProfileScreen from "./screen/ProfileScreen";
// import TestingScreen from "./src/screens/TestingScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const chooseRoute = (isAuth) => {
  // const route = useRoute();
  // console.log("route", route);
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      // screenOptions={{ tabBarLabel: () => false }}
      screenOptions={({ route }) => ({
        // tabBarStyle: { alignItems: "stretch" },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
        // tabBarItemStyle: { justifyContent: "center" },
        tabBarLabel: () => false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Post") {
            iconName = focused ? "grid-sharp" : "grid-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "add-circle-sharp" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <MainTab.Screen
        name="Post"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        // options={{ title: "Створити публікацію" }}
        options={{
          title: "Створити публікацію",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "add-circle-sharp" : "add-circle-outline"}
              style={{ fontSize: 40, color: color }} // Змінити розмір іконки на 30
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainTab.Navigator>
  );
};
