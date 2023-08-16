import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { GlobalStyles } from "../GlobalStyle";
import BgImage from "../image/background.jpg";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(null);
  const [textInputVisible, setTextInputVisible] = useState(true);

  const onSubmit = () => {
    console.log(email);
    console.log(password);
  };

  const handleKeyboardDidShow = () => {
    setTextInputVisible(false);
  };

  const handleKeyboardDidHide = () => {
    setTextInputVisible(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      handleKeyboardDidShow
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleFocus = (key) => {
    setIsFocusedInput(key);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={GlobalStyles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.backgroundImg}
        >
          <View style={styles.form}>
            <Text style={styles.formTitle}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "android" ? "padding" : "height"}
            >
              <View>
                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  style={[
                    styles.input,
                    isFocusedInput === "input1" ? styles.focusedInput : null,
                  ]}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => handleFocus("input1")}
                  onBlur={handleBlur}
                />

                {/* <Text style={{ color: `#ff0000` }}>
                  Поле Email заповнено не коректно
                </Text> */}
              </View>

              <View style={{ marginTop: 16, position: "relative" }}>
                <TextInput
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                  style={[
                    styles.input,
                    isFocusedInput === "input2" ? styles.focusedInput : null,
                  ]}
                  onFocus={() => handleFocus("input2")}
                  onBlur={handleBlur}
                />
                <TouchableOpacity style={styles.showPasswordBtn}>
                  <Text style={styles.passwordText}>Показати</Text>
                </TouchableOpacity>
              </View>

              {textInputVisible && (
                <>
                  <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onSubmit}>
                    <Text style={styles.btnTitle}>Увійти</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.navLink} activeOpacity={0.8}>
                    <Text style={styles.navLinkText}>
                      Немає акаунту? Зареєструватися
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingBottom: 10 },

  backgroundImg: {
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    position: "relative",
  },
  form: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // marginBottom: 150,
    // paddingBottom: 150,
  },

  formTitle: {
    color: "#212121",
    textAlign: "center",

    justifyContent: "center",
    marginBottom: 32,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#f0f8ff",

    borderRadius: 5,
    height: 50,

    color: "#212121",
    backgroundColor: "#E8E8E8",
  },
  focusedInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#f0f8ff",

    borderRadius: 5,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },

  showPasswordBtn: {
    position: "absolute",
    top: 15,
    right: 16,
  },

  btn: {
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    padding: 15,
    backgroundColor: "#FF6C00",
    // alignItems: "center",
    // justifyContent: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    alignSelf: "center",
  },
  navLink: {
    marginTop: 16,
    alignItems: "center",
  },
  navLinkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    justifyContent: "center",
    marginBottom: 32,

    fontFamily: "Roboto-Regular",
  },
});

export default LoginScreen;
