import React, { useCallback, useState, useMemo } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useMailStyle } from "./mail.style";

interface MailFormData {
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  error?: string;
}

const Mail: React.FC = React.memo(() => {
  // State management
  const [formData, setFormData] = useState<MailFormData>({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Styles
  const styles = useMailStyle();

  // Memoized alert function for web compatibility
  const showAlert = useCallback((title: string, message: string): void => {
    if (Platform.OS === "web") {
      // For web, use native alert or you could implement a custom modal
      alert(`${title}: ${message}`);
    } else {
      Alert.alert(title, message);
    }
  }, []);

  // Memoized email validation
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }, []);

  // Memoized form validation
  const validateForm = useCallback((): boolean => {
    const { email, message } = formData;

    if (email.trim() === "" || message.trim() === "") {
      showAlert("Validation Error", "Please fill in all fields.");
      return false;
    }

    if (!validateEmail(email)) {
      showAlert("Invalid Email", "Please enter a valid email address.");
      return false;
    }

    if (message.trim().length < 10) {
      showAlert(
        "Message Too Short",
        "Please enter a message with at least 10 characters."
      );
      return false;
    }

    return true;
  }, [formData, showAlert, validateEmail]);

  // Memoized send email function
  const sendEmail = useCallback(async (): Promise<void> => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://my-cv-backend-rho.vercel.app/api/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      const result: ApiResponse = await response.json();

      if (result.success) {
        showAlert(
          "Success",
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ email: "", message: "" });
        setFocusedField(null);
      } else {
        showAlert(
          "Error",
          result.error || "Message couldn't be sent. Please try again."
        );
      }
    } catch (error) {
      console.error("Email send error:", error);
      showAlert(
        "Network Error",
        "Can't reach the server. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm, showAlert]);

  // Memoized input handlers
  const handleEmailChange = useCallback((text: string): void => {
    setFormData((prev) => ({ ...prev, email: text }));
  }, []);

  const handleMessageChange = useCallback((text: string): void => {
    setFormData((prev) => ({ ...prev, message: text }));
  }, []);

  const handleEmailFocus = useCallback((): void => {
    setFocusedField("email");
  }, []);

  const handleMessageFocus = useCallback((): void => {
    setFocusedField("message");
  }, []);

  const handleBlur = useCallback((): void => {
    setFocusedField(null);
  }, []);

  // Memoized email input style
  const emailInputStyle = useMemo(
    () => [
      styles.textInput,
      focusedField === "email" && styles.textInputFocused,
    ],
    [styles.textInput, styles.textInputFocused, focusedField]
  );

  // Memoized message input style
  const messageInputStyle = useMemo(
    () => [
      styles.messageInput,
      focusedField === "message" && styles.textInputFocused,
    ],
    [styles.messageInput, styles.textInputFocused, focusedField]
  );

  // Memoized button content
  const buttonContent = useMemo(() => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={styles.activityIndicatorColor}
          />
          <Text
            style={{
              color: styles.activityIndicatorColor,
              marginTop: 8,
              fontSize: 16,
            }}
          >
            Sending...
          </Text>
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={sendEmail}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text
          style={{
            color: styles.buttonTextColor,
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Send Message
        </Text>
      </TouchableOpacity>
    );
  }, [loading, styles, sendEmail]);

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Get In Touch</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={emailInputStyle}
            placeholder="Your Email Address"
            placeholderTextColor={styles.placeholderTextColor}
            value={formData.email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={handleEmailFocus}
            onBlur={handleBlur}
            editable={!loading}
            maxLength={100}
          />
        </View>

        <View style={styles.spacer} />

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={messageInputStyle}
            placeholder="Your Message (minimum 10 characters)"
            placeholderTextColor={styles.placeholderTextColor}
            value={formData.message}
            onChangeText={handleMessageChange}
            multiline
            numberOfLines={5}
            onFocus={handleMessageFocus}
            onBlur={handleBlur}
            editable={!loading}
            maxLength={1000}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.spacer} />

        {/* Submit Button or Loading */}
        {buttonContent}
      </View>
    </View>
  );
});

Mail.displayName = "Mail";

export default Mail;
