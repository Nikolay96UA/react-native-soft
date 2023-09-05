import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import user from "../image/User.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../GlobalStyles";

const DefaultPostsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { nickName } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    const postsData = await onSnapshot(
      collection(db, "posts"),
      (queryPosts) => {
        const comments = queryPosts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(comments);
      }
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View
      style={{
        ...GlobalStyles.container,
        paddingHorizontal: 16,

        paddingTop: 32,
      }}
    >
      <View
        style={{
          flexDirection: "row",

          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        <Image style={{ width: 60, marginRight: 10 }} source={user} />
        <View>
          <Text style={styles.userName}>{nickName}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 32,
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 360, height: 240, borderRadius: 8 }}
            />
            <Text syle={{ fontFamily: "Roboto-Medium", fontSize: 16 }}>
              {item.photoName}
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.navLink}
                onPress={() =>
                  navigation.navigate("Comments", { postId: item.id })
                }
                activeOpacity={0.5}
              >
                <Ionicons
                  name={"chatbubble-outline"}
                  style={{ fontSize: 24, color: "#BDBDBD" }} // Змінити розмір іконки на 30
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.navLink, marginLeft: 48 }}
                onPress={() =>
                  navigation.navigate("Map", {
                    location: item.location,
                  })
                }
                activeOpacity={0.5}
              >
                <Ionicons
                  name={"location-outline"}
                  style={{ fontSize: 24, color: "#BDBDBD" }} // Змінити розмір іконки на 30
                />
                <Text>{item.placeMarker}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostsScreen;

styles = StyleSheet.create({
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },

  navLink: {
    flexDirection: "row",
    marginTop: 16,
  },
});
