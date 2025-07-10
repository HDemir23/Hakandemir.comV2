import { Stack } from "expo-router";
import WebAnalytics from "./WebAnalytics";

export default function WebLayout() {
    return (
      <>
        <Stack screenOptions={{ headerShown: false }} />
        <WebAnalytics />
      </>
    );
}
