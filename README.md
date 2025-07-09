# hakandemir

A cross-platform portfolio app for Ahmet Hakan Demir, built with [Expo](https://expo.dev), React Native, and TypeScript. The app showcases personal information, experience, skills, and contact details, and is optimized for both web and native (iOS/Android) platforms.

## Features

- **About Me**: Introduction and personal background.
- **Experience**: Professional experience and projects.
- **Skills**: Visual display of technical skills.
- **Contact**: Quick access to email, phone, GitHub, and LinkedIn.
- **Responsive Design**: Custom layouts for web and native platforms.
- **Modern UI**: Themed components, custom backgrounds, and smooth navigation.

## Screenshots

_(Add screenshots of the app running on web and mobile here)_

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HDemir23/hakandemir.git
   cd hakandemir
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npx expo start
   ```

4. **Run on your device:**
   - For web: Press `w` in the Expo CLI or visit the local URL.
   - For iOS: Press `i` (requires Xcode/simulator).
   - For Android: Press `a` (requires Android Studio/emulator).
   - Or scan the QR code with Expo Go.

## Project Structure

```
hakandemir/
  app/            # App entry points and routing
  components/     # Reusable UI components (native & web)
  assets/         # Images, fonts, SVGs
  constants/      # Theme and style constants
  FirebaseConfig.ts # Firebase setup (if used)
```

- **Web and Native Separation:**

  - `components/web/` for web-specific UI
  - `components/native/` for native-specific UI

- **Routing:**  
  Uses [expo-router](https://expo.github.io/router/docs) for file-based navigation.

## Customization

- **Theme:**  
  Edit `constants/theme.ts` to adjust colors and styles.

- **Profile Info:**  
  Update images in `assets/images/` and text in the relevant components.

- **Contact Links:**  
  Update contact details in `components/web/ContactIcons/Contact.tsx` and `components/native/ContactIcons/Contact.tsx`.

## Scripts

- `npm start` – Start Expo development server
- `npm run reset-project` – Reset to a fresh project state
- `npm run android` – Run on Android emulator/device
- `npm run ios` – Run on iOS simulator/device
- `npm run web` – Run on web
- `npm run lint` – Lint the codebase

## License

This project is licensed under the MIT License.  
Copyright (c) 2025 Ahmet Hakan Demir
