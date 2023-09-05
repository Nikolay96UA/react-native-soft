// import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";
// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAY68vB-dx76nYKYGeeAtVDKpwXal-8zU",
  authDomain: "my-awesomeproject-2288.firebaseapp.com",
  projectId: "my-awesomeproject-2288",
  storageBucket: "my-awesomeproject-2288.appspot.com",
  messagingSenderId: "21690188756",
  appId: "1:21690188756:web:c4209cd1671354a9650c41",
  measurementId: "G-5Q5H80TE43",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;
