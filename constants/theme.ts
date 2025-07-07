import { useMemo } from "react";
import { ViewStyle } from "react-native";

export const GitHubDarkTheme = {
  colors: {
    // Typography
    title: "#C9D1D9", // Başlıklar
    text: "#E6EDF3", // Ana metin
    subtleText: "#8B949E", // İkincil açıklamalar

    // Backgrounds
    background: "#0D1117", // Ana sayfa arka planı
    cardBackground: "#161B22", // Kartlar, modal içerikleri
    inputBackground: "#0D1117", // Input alan arka planı
    hoverBackground: "#21262D", // Hover arka planları

    // Buttons
    buttonBackground: "#238636", // Yeşil buton
    buttonText: "#FFFFFF", // Buton yazı
    buttonDisabledBackground: "#30363D",
    buttonDisabledText: "#6E7681",

    // Input
    inputText: "#E6EDF3",
    inputPlaceholder: "#6E7681",
    inputBorder: "#30363D",
    inputFocusBorder: "#58A6FF",

    // Borders / Lines
    border: "#30363D", // Genel çizgi/border
    divider: "#21262D", // İnce çizgiler

    // Status
    error: "#F85149", // Hata rengi (form validasyon)
    warning: "#D29922", // Uyarı
    success: "#238636", // Başarı

    // Special
    overlay: "rgba(1,4,9,0.85)", // Modal arkası
    shadow: "#010409", // Kart gölgeleri
  },
};

export const WievStyle: ViewStyle = useMemo(
  () => ({
    backgroundColor: GitHubDarkTheme.colors.background,
    flex: 1,
  }),
  [GitHubDarkTheme]
);
