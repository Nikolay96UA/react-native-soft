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

  const [showPass, setShowPass] = useState(true);

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(null);

<<<<<<< HEAD
  const validateForm = () => {
    const { nickName, email, password } = state;
    const isValidName = nickName.trim().length >= 4;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword = password.trim().length >= 8;
    setIsValid(isValidName && isValidEmail && isValidPassword);
=======
  const [textInputVisible, setTextInputVisible] = useState(true);

  const onSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(login);
>>>>>>> parent of ee35bb2 (add firebase)
  };

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleKeyboardDidShow = () => {
    setTextInputVisible(false);
  };

  const handleKeyboardDidHide = () => {
    setTextInputVisible(true);
  };

  useEffect(() => {
<<<<<<< HEAD
    validateForm();
  }, [state.nickName, state.email, state.password]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    dispatch(authSignUpUser(state));
    setState(initialState);
  };
=======
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
>>>>>>> parent of ee35bb2 (add firebase)

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
<<<<<<< HEAD
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 120 : 45,
            }}
          >
            <View style={styles.acauntImgWrap}>
              <Image />
=======
          <View style={regStyles.formView}>
            <View style={regStyles.userPhoto}>
              <View style={regStyles.userPhotoPlus}>
                <Image style={regStyles.addIcon} source={addIcon} />
              </View>
>>>>>>> parent of ee35bb2 (add firebase)
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
<<<<<<< HEAD
                  placeholder="Логін"
                  onFocus={() => handleFocus("input1")}
                  onBlur={handleBlur}
                  value={state.nickName}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, nickName: value }))
                  }
                />
                {state.nickName.length > 0 && state.nickName.length < 4 && (
                  <Text style={{ color: `#ff0000` }}>
                    Логін має містити не менше 4 символів
                  </Text>
                )}
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={[
                    styles.input,
                    isFocusedInput === "input2" ? styles.focusedInput : null,
                  ]}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => handleFocus("input2")}
                  onBlur={handleBlur}
                  value={state.email}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, email: value }));
                  }}
                />
                {state.email.length > 0 && !validator.isEmail(state.email) && (
                  <Text style={{ color: `#ff0000` }}>
                    Поле Email заповнено не коректно
                  </Text>
                )}
              </View>
              <View style={{ marginTop: 16, position: "relative" }}>
                <TextInput
                  style={[
                    styles.input,
                    isFocusedInput === "input3" ? styles.focusedInput : null,
                  ]}
                  placeholder="Пароль"
                  secureTextEntry={secureText}
=======
                  secureTextEntry ={showPass}
                  onChangeText={setPassword}
>>>>>>> parent of ee35bb2 (add firebase)
                  onFocus={() => handleFocus("input3")}
                  onBlur={handleBlur}
                  placeholder="Пароль"
                />
                <Pressable
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onPressIn={showPassword}
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
<<<<<<< HEAD
                {state.password.length < 8 && state.password.length > 0 && (
                  <Text style={{ color: `#ff0000` }}>
                    Пароль має містити не менше 8 символів
                  </Text>
                )}
              </View>

              <TouchableOpacity
                style={[
                  styles.btn,
                  { backgroundColor: !isValid ? "#F6F6F6" : "#FF6C00" },
                ]}
                activeOpacity={0.8}
                disabled={!isValid}
                onPress={handleSubmit}
              >
                <Text
                  style={[
                    styles.btnTitle,
                    { color: !isValid ? "#BDBDBD" : "#FFFFFF" },
                  ]}
                >
                  Зареєструватися
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navLink}
                onPress={() => navigation.navigate("Login")}
                activeOpacity={0.5}
              >
                <Text style={styles.navLinkText}>
                  Вже є акаунт?
                  <Text style={{ color: `#0000cd` }}> Увійти</Text>
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
=======
              </>
            )}
>>>>>>> parent of ee35bb2 (add firebase)
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 93,
    borderTopRightRadius: 25,
=======
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
>>>>>>> parent of ee35bb2 (add firebase)
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
<<<<<<< HEAD
    fontFamily: "Roboto-Medium",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#f0f8ff",

    borderRadius: 5,
    height: 50,
=======
    textAlign: "center",
>>>>>>> parent of ee35bb2 (add firebase)
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
<<<<<<< HEAD
    padding: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
=======
    padding: 15,
    backgroundColor: "#FF6C00",
>>>>>>> parent of ee35bb2 (add firebase)
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
<<<<<<< HEAD
=======
    alignSelf: "center",
>>>>>>> parent of ee35bb2 (add firebase)
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
<<<<<<< HEAD
=======

export default RegistrationScreen;
>>>>>>> parent of ee35bb2 (add firebase)
