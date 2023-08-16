import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import BgImage from "../image/background.jpg";
import addIcon from "../image/add.png";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(null);

  const [textInputVisible, setTextInputVisible] = useState(true);

  const onSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(login);
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
      <View style={regStyles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={regStyles.bgImg}
        >
          <View style={regStyles.formView}>
            <View style={regStyles.userPhoto}>
              <View style={regStyles.userPhotoPlus}>
                <Image style={regStyles.addIcon} source={addIcon} />
              </View>
            </View>
            <Text style={regStyles.mainTitle}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Логін"
                style={[
                  regStyles.inputsAll,
                  isFocusedInput === "input1" ? regStyles.focusedInput : null,
                ]}
                onChangeText={setLogin}
                onFocus={() => handleFocus("input1")}
                onBlur={handleBlur}
              />
              <TextInput
                style={[
                  regStyles.inputsAll,
                  isFocusedInput === "input2" ? regStyles.focusedInput : null,
                ]}
                onChangeText={setEmail}
                onFocus={() => handleFocus("input2")}
                onBlur={handleBlur}
                placeholder="Адреса електронної пошти"
              />
              <View style={{ position: "relative" }}>
                <TextInput
                  style={[
                    regStyles.inputsAll,
                    isFocusedInput === "input3" ? regStyles.focusedInput : null,
                  ]}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus("input3")}
                  onBlur={handleBlur}
                  placeholder="Пароль"
                />
                <Pressable
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onPressIn={() => {}}
                >
                  <Text style={regStyles.inputText}>Показати</Text>
                </Pressable>
              </View>
            </KeyboardAvoidingView>

            {textInputVisible && (
              <>
                <TouchableOpacity
                  style={regStyles.btn}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text style={regStyles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>

                <TouchableOpacity style={regStyles.navLink} activeOpacity={0.8}>
                  <Text style={regStyles.navLinkText}>
                    Вже є аккаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const regStyles = StyleSheet.create({
  container: { flex: 1 },
  bgImg: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  formView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 32,
    position: "relative",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPhoto: {
    width: 120,
    height: 120,
    position: "absolute",
    left: "50%",
    top: 0,
    backgroundColor: "#F6F6F6",

    borderRadius: 16,

    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  userPhotoPlus: {
    width: 25,
    height: 25,
    position: "absolute",
    left: "90%",
    bottom: 0,
    transform: [{ translateY: -15 }],
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF6C00",
    borderRadius: 50,
    borderWidth: 1,
  },
  addIcon: {
    width: 25,
    height: 25,
  },
  mainTitle: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
  inputsAll: {
    width: "100%",
    height: 50,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
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
  inputText: { position: "absolute", right: 16, top: 15, color: "#1B4371" },
  btn: {
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    padding: 15,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    alignSelf: "center",
  },
  navLink: {
    color: "#1B4371",
    marginTop: 16,
    alignItems: "center",
  },
  navLinkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    justifyContent: "center",

    fontFamily: "Roboto-Regular",
  },
});

export default RegistrationScreen;
