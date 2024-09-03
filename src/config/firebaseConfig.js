import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, browserLocalPersistence, getAuth  } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNFkbafb7vWGzhJK0BEB0H8tSwdg2rmMU",
  authDomain: "excode-241.firebaseapp.com",
  projectId: "excode-241",
  storageBucket: "excode-241.appspot.com",
  messagingSenderId: "566079487091",
  appId: "1:566079487091:web:09d902f3b72b3d66c07e06",
  measurementId: "G-SFZQF96DBK"
};

const app = initializeApp(firebaseConfig);

if (__DEV__) {
  appCheck = initializeAppCheck(app, {
    provider: new AppCheckProviderFactory(() => new DebugProvider()),
    isTokenAutoRefreshEnabled: true
  });
} else {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('YOUR_RECAPTCHA_V3_SITE_KEY'),
    isTokenAutoRefreshEnabled: true
  });
}

if (Platform.OS === 'web') {
  auth = getAuth(app);
  auth.setPersistence(browserLocalPersistence);
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

export const db = getFirestore(app);
export default app;
