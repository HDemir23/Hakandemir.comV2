import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  TextInput,
  View,
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

const Mail: React.FC = () => {
  // State management
  const [formData, setFormData] = useState<MailFormData>({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Styles
  const styles = useMailStyle();

  // Handlers
  const showAlert = useCallback((title: string, message: string): void => {
    Alert.alert(title, message);
  }, []);

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }, []);

  const validateForm = useCallback((): boolean => {
    const { email, message } = formData;

    if (email.trim() === "" || message.trim() === "") {
      showAlert("Alert", "Please Fill the places.");
      return false;
    }

    if (!validateEmail(email)) {
      showAlert("Invalid Email", "Please enter valid email");
      return false;
    }

    return true;
  }, [formData, showAlert, validateEmail]);

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
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const result: ApiResponse = await response.json();

      if (result.success) {
        showAlert("Succes", "Message Send Succesfully");
        setFormData({ email: "", message: "" });
      } else {
        showAlert(
          "Error",
          result.error || "Message couldn't en please try again"
        );
      }
    } catch (error) {
      showAlert(
        "Network Errorı",
        "Can't reach server Please try again"
      );
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm, showAlert]);

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

  // Render
  return (
    <View style={styles.container}>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            focusedField === "email" && styles.textInputFocused,
          ]}
          placeholder="Email Address"
          placeholderTextColor={styles.placeholderTextColor}
          value={formData.email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={handleEmailFocus}
          onBlur={handleBlur}
          editable={!loading}
        />
      </View>

      <View style={styles.spacer} />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.messageInput,
            focusedField === "message" && styles.textInputFocused,
          ]}
          placeholder="Message"
          placeholderTextColor={styles.placeholderTextColor}
          value={formData.message}
          onChangeText={handleMessageChange}
          multiline
          numberOfLines={5}
          onFocus={handleMessageFocus}
          onBlur={handleBlur}
          editable={!loading}
        />
      </View>

      <View style={styles.spacer} />

      {/* Submit Button or Loading */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={styles.activityIndicatorColor}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title="Send"
            onPress={sendEmail}
            color={styles.buttonTextColor}
          />
        </View>
      )}
    </View>
  );
};

export default Mail;
