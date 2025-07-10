import { useEffect } from "react";
import { Platform } from "react-native";

export default function WebAnalytics() {
  useEffect(() => {
    // Web Only
    if (Platform.OS === "web") {
      // Dynamic import
      import("@vercel/analytics")
        .then((analytics) => {
          analytics.inject();
        })
        .catch((error) => {
          console.warn("Analytics yüklenemedi:", error);
        });
    }
  }, []);

  return null; //  Dont render in Ui
}
