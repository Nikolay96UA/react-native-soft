import React, { useEffect, useState } from "react";
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
  Button,
} from "react-native";
import validator from "validator";
import background from "../../../assets/images/background.jpg";
import add from "../../../assets/images/add.png";
import { useNavigation } from "@react-navigation/native";
import {
  authSignInUser,
  authSignUpUser,
  authSignOutUser,
} from "../../../Redux/Auth/authOperations";
import { useDispatch } from "react-redux";
import { GlobalStyles } from "../../../GlobalStyles";

const initialState = {
  nickName: "",
  email: "",
  password: "",
};

export default RegistrationScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState(true);
  const [isFocusedInput, setIsFocusedInput] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  const [textInputVisible, setTextInputVisible] = useState(true);

<<<<<<< Updated upstream
  const onSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(login);
=======
  const validateForm = () => {
    const { nickName, email, password } = state;
    const isValidName = nickName.trim().length >= 4;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword = password.trim().length >= 8;
    setIsValid(isValidName && isValidEmail && isValidPassword);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    validateForm();
  }, [state.nickName, state.email, state.password]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleKeyboardDidHide = () => {
    setTextInputVisible(true);
  };
>>>>>>> Stashed changes

  const handleFocus = (key) => {
    setIsShowKeyboard(true);
    setIsFocusedInput(key);
  };
  const handleBlur = () => {
    setIsFocusedInput(null);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={GlobalStyles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.backgroundImg}
        >
<<<<<<< Updated upstream
          <View style={regStyles.formView}>
            <View style={regStyles.userPhoto}>
              <View style={regStyles.userPhotoPlus}>
                <Image style={regStyles.addIcon} source={addIcon} />
              </View>
=======
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 120 : 45,
            }}
          >
            <View style={styles.acauntImgWrap}>
              <Image />
>>>>>>> Stashed changes
            </View>
            <Image style={styles.addImg} source={add} />
            <Text style={styles.formTitle}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <TextInput
                  style={[
                    styles.input,
                    isFocusedInput === "input1" ? styles.focusedInput : null,
                  ]}
<<<<<<< Updated upstream
                  secureTextEntry ={showPass}
                  onChangeText={setPassword}
=======
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
                    // validEmail(value);
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
                    regStyles.inputsAll,
                    isFocusedInput === "input3" ? regStyles.focusedInput : null,
                  ]}
                  placeholder="Пароль"
                  secureTextEntry={secureText}
>>>>>>> Stashed changes
                  onFocus={() => handleFocus("input3")}
                  onBlur={handleBlur}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity style={styles.showPasswordBtn}>
                  <Text
                    style={styles.passwordText}
                    onPress={() => setSecureText(!secureText)}
                  >
                    Показати
                  </Text>
                </TouchableOpacity>
<<<<<<< Updated upstream
              </>
            )}
=======
                {state.password.length < 8 && state.password.length > 0 && (
                  <Text style={{ color: `#ff0000` }}>
                    Пароль має містити не менше 8 символів
                  </Text>
                )}
              </View>
            </KeyboardAvoidingView>

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
                  <Text style={regStyles.btnTitle}>Зареєструватися</Text>
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
>>>>>>> Stashed changes
          </View>
          {/* </View> */}
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
  },
  acauntImgWrap: {
    position: "absolute",
    top: -60,
    left: 140,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addImg: {
    position: "absolute",
    top: 21,
    left: 248,
    width: 25,
    height: 25,
  },
  formTitle: {
    color: "#212121",
    textAlign: "center",

    justifyContent: "center",
    marginBottom: 32,
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
  passwordText: {},

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
    fontFamily: "Roboto-Regular",
<<<<<<< HEAD
=======
    alignSelf: "center",
>>>>>>> parent of ee35bb2 (add firebase)
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

    fontFamily: "Roboto-Regular",
  },
});
<<<<<<< Updated upstream

export default RegistrationScreen;
=======
>>>>>>> Stashed changes
