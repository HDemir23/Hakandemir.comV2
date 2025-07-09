import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import MailIcon from "@/assets/svg/Mail";
import PhoneIcon from "@/assets/svg/Phone";
import React from "react";
import { Linking, Pressable, Text, View } from "react-native";
import { useContactStyle } from "./Contact.style";

export default function Contact() {
  const styles = useContactStyle();

  const openPhone = () => Linking.openURL("tel:+905075865681");
  const openEmail = () => Linking.openURL("mailto:a.hakandemir23@gmail.com");
  const openGitHub = () => Linking.openURL("https://github.com/HDemir23");
  const openLinkedIn = () =>
    Linking.openURL("https://www.linkedin.com/in/hakandemir23");

  return (
    <View style={styles.container}>
      <Pressable style={styles.contactItem} onPress={openGitHub}>
        <GitHubIcon size={32} />
        <Text style={styles.text}>GitHub</Text>
      </Pressable>

      <Pressable style={styles.contactItem} onPress={openPhone}>
        <PhoneIcon size={32} />
        <Text style={styles.text}>+90 507 586 56 81</Text>
      </Pressable>

      <Pressable style={styles.contactItem} onPress={openEmail}>
        <MailIcon size={32} />
        <Text style={styles.text}>a.hakandemir23@gmail.com</Text>
      </Pressable>

      <Pressable style={styles.contactItem} onPress={openLinkedIn}>
        <LinkedInIcon size={32} />
        <Text style={styles.text}>LinkedIn</Text>
      </Pressable>
    </View>
  );
}
