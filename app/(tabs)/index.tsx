import Constants from "expo-constants";
import { Image, StyleSheet, Platform } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://nari-web.vercel.app/" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
