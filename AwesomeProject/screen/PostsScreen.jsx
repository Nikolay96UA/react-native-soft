import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";
import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../../Redux/Auth/authOperations";

const nestedStack = createStackNavigator();

const PostsScreen = () => {
  const dispatch = useDispatch();
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
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <nestedStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Карта" }}
      />
      <nestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Коментарі" }}
      />
    </nestedStack.Navigator>
  );
};
export default PostsScreen;