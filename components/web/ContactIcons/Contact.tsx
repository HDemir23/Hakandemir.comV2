import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import MailIcon from "@/assets/svg/Mail";
import PhoneIcon from "@/assets/svg/Phone";
import React, { useCallback, useMemo, useState } from "react";
import { Linking, Platform, Pressable, Text, View } from "react-native";
import { useContactStyle } from "./Contact.style";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
  testID?: string;
}

const ContactItem = React.memo<ContactItemProps>(
  ({ icon, title, subtitle, onPress, testID }) => {
    const styles = useContactStyle();
    const [isHovered, setIsHovered] = useState(false);
    const isWeb = Platform.OS === "web";

    const handleMouseEnter = useCallback(() => {
      if (isWeb && !styles.isMobile) {
        setIsHovered(true);
      }
    }, [isWeb, styles.isMobile]);

    const handleMouseLeave = useCallback(() => {
      if (isWeb && !styles.isMobile) {
        setIsHovered(false);
      }
    }, [isWeb, styles.isMobile]);

    const itemStyle = useMemo(() => {
      const baseStyle = [styles.contactItem];

      if (isWeb && !styles.isMobile) {
        baseStyle.push(styles.webStyles.contactItemWeb);
      }

      if (isHovered) {
        baseStyle.push(styles.contactItemHover);
      }

      return baseStyle;
    }, [
      styles.contactItem,
      styles.contactItemHover,
      styles.webStyles.contactItemWeb,
      isHovered,
      isWeb,
      styles.isMobile,
    ]);

    const pressableProps = useMemo(
      () => ({
        style: itemStyle,
        onPress,
        testID,
        ...(isWeb && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }),
      }),
      [itemStyle, onPress, testID, isWeb, handleMouseEnter, handleMouseLeave]
    );

    return (
      <View style={styles.gridItem}>
        <Pressable {...pressableProps}>
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
          </View>
        </Pressable>
      </View>
    );
  }
);

ContactItem.displayName = "ContactItem";

const Contact = React.memo(() => {
  const styles = useContactStyle();

  // Responsive icon sizes
  const iconSize = useMemo(() => {
    if (styles.isMobile) return 24;
    if (styles.isTablet) return 28;
    return 32;
  }, [styles.isMobile, styles.isTablet]);

  // Contact handlers
  const openPhone = useCallback(() => {
    Linking.openURL("tel:+905075865681").catch((err) =>
      console.error("Failed to open phone dialer:", err)
    );
  }, []);

  const openEmail = useCallback(() => {
    Linking.openURL("mailto:a.hakandemir23@gmail.com").catch((err) =>
      console.error("Failed to open email client:", err)
    );
  }, []);

  const openGitHub = useCallback(() => {
    Linking.openURL("https://github.com/HDemir23").catch((err) =>
      console.error("Failed to open GitHub:", err)
    );
  }, []);

  const openLinkedIn = useCallback(() => {
    Linking.openURL("https://www.linkedin.com/in/hakandemir23").catch((err) =>
      console.error("Failed to open LinkedIn:", err)
    );
  }, []);

  // Contact items data
  const contactItems = useMemo(
    () => [
      {
        id: "github",
        icon: <GitHubIcon size={iconSize} />,
        title: "GitHub",
        subtitle: "@HDemir23",
        onPress: openGitHub,
        testID: "contact-github",
      },
      {
        id: "linkedin",
        icon: <LinkedInIcon size={iconSize} />,
        title: "LinkedIn",
        subtitle: "hakandemir23",
        onPress: openLinkedIn,
        testID: "contact-linkedin",
      },
      {
        id: "email",
        icon: <MailIcon size={iconSize} />,
        title: "Email",
        subtitle: "a.hakandemir23@gmail.com",
        onPress: openEmail,
        testID: "contact-email",
      },
      {
        id: "phone",
        icon: <PhoneIcon size={iconSize} />,
        title: "Phone",
        subtitle: "+90 507 586 56 81",
        onPress: openPhone,
        testID: "contact-phone",
      },
    ],
    [iconSize, openGitHub, openLinkedIn, openEmail, openPhone]
  );

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {contactItems.map((item) => (
          <ContactItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onPress={item.onPress}
            testID={item.testID}
          />
        ))}
      </View>
    </View>
  );
});

Contact.displayName = "Contact";

export default Contact;
