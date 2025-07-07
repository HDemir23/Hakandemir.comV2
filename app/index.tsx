import { Platform } from "react-native";
import NativeAbout from "../components/native/About";
import WebLayout from "../components/web/WebLayout";

export default function Index() {
  // For native platforms, show the About component directly
  if (Platform.OS !== "web") {
    return <NativeAbout />;
  }

  // For web, show the web layout with button navigation
  return <WebLayout />;
}
