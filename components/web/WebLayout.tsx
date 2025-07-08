import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import GalaxyBackground from "../BackgroundPattern/GalaxyBg";
import Divider from "../Divider/divider";
import Button from "./Buttons/Button";
import MyWebHeader from "./header/MyWebHeader";
import { useWebLayoutstyle } from "./Pages.styles/webLayout.style";
import WebContact from "./WebContact";
import WebExperience from "./WebExperience";
import WebHome from "./WebHome";

type ContentType = "home" | "experience" | "projects";

const ContentComponents = {
  home: () => <WebHome />,
  experience: () => <WebExperience />,
  projects: () => <WebContact />,
} as const;

export default function WebLayout() {
  const style = useWebLayoutstyle();
  const [activeContent, setActiveContent] = useState<ContentType>("home");

  const CurrentContent = useMemo(() => {
    const Component =
      ContentComponents[activeContent as keyof typeof ContentComponents];
    return <Component />;
  }, [activeContent]);

  const buttonConfig = [
    {
      text: "About Me",
      action: () => setActiveContent("home"),
      isActive: activeContent === "home",
    },
    {
      text: "Experience",
      action: () => setActiveContent("experience"),
      isActive: activeContent === "experience",
    },
    {
      text: "Contact",
      action: () => setActiveContent("projects"),
      isActive: activeContent === "projects",
    },
  ];

  return (
    <ScrollView style={style.scrollContent}>
      <GalaxyBackground numberOfRings={5} numberOfStars={100} />
      <View style={style.container}>
        <View style={style.content}>
          <MyWebHeader activeContent={activeContent} />
          <Divider />
          <View style={style.buttonContent}>
            {buttonConfig.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                onPress={button.action}
                variant={button.isActive ? "primary" : "secondary"}
              />
            ))}
          </View>

          <Divider />
          {CurrentContent}
        </View>
      </View>
    </ScrollView>
  );
}
