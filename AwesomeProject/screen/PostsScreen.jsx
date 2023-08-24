import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import DefaultPostsScreen from "./DefaultPostsScreen";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../Redux/Auth/authOperations";
// import CreatePostScreen from "./CreatePostScreen";

const nestedStack = createStackNavigator();

const PostsScreen = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <nestedStack.Navigator>
      <nestedStack.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          title: "Публікації",
          headerStyle: { borderBottomColor: "#BDBDBD", borderWidth: 1 },
          headerRight: () => (
            <View>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                activeOpacity={0.8}
                onPress={signOut}
              >
                <Ionicons
                  name={"log-out-outline"}
                  style={{ fontSize: 30, color: "#BDBDBD" }} // Змінити розмір іконки на 30
                />
                {/* <Text style={styles.btnTitle}>Увійти</Text> */}
              </TouchableOpacity>
            </View>
          ),
        }}
        // options={{ headerShown: false }}
      />
      <nestedStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Карта" }}
        // options={{ tabBarVisible: false }}
      />
      <nestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Коментарі" }}
        // options={{ headerShown: false }}
        // options={{ tabBarVisible: false }}
      />
    </nestedStack.Navigator>
  );
};
export default PostsScreen;
