import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../GlobalStyle";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const [photoUrl, setPhotoUrl] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

<<<<<<< Updated upstream
<<<<<<< HEAD
=======

>>>>>>> Stashed changes
  const getPhotoFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const post = querySnapshot.docs.find((doc) => doc.id === postId);
    setPhotoUrl(post.data().photo);
  };

  useEffect(() => {
    getPhotoFromFirestore();
    getCommentsByPostId();
  }, []);

  const createPost = async () => {
    keyboardHide();
    setComment("");
    setIsShowKeyboard(false);
    try {
      const docRef = await addDoc(collection(db, "posts", postId, "comments"), {
        comment,
        nickName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };
  const getCommentsByPostId = async () => {
    const postsData = await onSnapshot(
      collection(db, "posts", postId, "comments"),
      (queryPosts) => {
        const comments = queryPosts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAllComments(comments);
      }
    );

    return postsData;
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);

    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          // ...GlobalStyles.container,
          // paddingHorizontal: 16,

          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 32,
        }}
      >
        <Image
          source={{ uri: photoUrl }}
          style={{
            width: "20%",
            height: "20%",
            borderRadius: 8,
            marginHorizontal: 16,
            marginBottom: 32,
          }}
        />
        <SafeAreaView style={styles.container}>
          <FlatList
            contentContainerStyle={{ alignItems: "flex-end" }}
            data={allComments}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 24,
                  marginRight: 16,
                }}
              >
                <Text>{item.nickName}</Text>

                <View
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: "#E8E8E8",
                    borderRadius: 6,
                    borderTopLeftRadius: 0,
                    marginLeft: 5,
                    // flexGrow: 1,
                    width: 299,
                    padding: 16,
                  }}
                >
                  <Text>{item.comment}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              // width: "100%",
              flexDirection: "row",
              // alignItems: "center",
              position: "relative",

              marginLeft: 16,
              marginRight: 16,
              marginTop: "auto",
              marginBottom: isShowKeyboard ? 60 : 16,
            }}
          >
            <TextInput
              value={comment}
              multiline={true}
              numberOfLines={10}
              style={{
                flex: 1,

                borderColor: "transparent",
                borderRadius: 100,
                paddingLeft: 15,
                paddingRight: 50,
                height: 50,
                // borderWidth: 1,
                backgroundColor: "#E8E8E8",

                fontFamily: "Roboto-Regular",
                color: "#212121",
              }}
              placeholder="Коментувати..."
              onChangeText={setComment}
              onFocus={() => setIsShowKeyboard(true)}
            />

            <TouchableOpacity
              style={{
                position: "absolute",
                top: 8,
                right: 10,
                height: 34,
                width: 34,
                borderRadius: 100,

                backgroundColor: "#FF6C00",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: !comment.length ? "#F6F6F6" : "#FF6C00",
              }}
              // style={[
              //   styles.onPublicBtn,
              //   { backgroundColor: !isPhotoTaken ? "#F6F6F6" : "#FF6C00" },
              // ]}
              disabled={!comment.length}
              activeOpacity={0.8}
              
            >
              <Ionicons
                style={{
                  color: "#FFFFFF",

                  alignSelf: "center",
                  fontSize: 20,
                  flexWrap: "wrap",
                }}
                name="arrow-up-outline"
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

<<<<<<< Updated upstream
<<<<<<< HEAD
styles = StyleSheet.create({});
=======

>>>>>>> parent of ee35bb2 (add firebase)
export default CommentsScreen;
