import { doc, getDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../../../FirebaseConfig";
import { usePlainText } from "./plainText.style";

type plainTextProps = {
  collection: string;
  document: string;
  prefix: string;
};

export default function PlainText({
  collection,
  document,
  prefix,
}: plainTextProps) {
  const styles = usePlainText();

  const [aboutMe, setAboutMe] = useState<string[]>([]);

  const fetchTexts = useCallback(async () => {
    // get contents inside db
    try {
      const docRef = doc(db, collection, document); //refer  in content on Intro-text items
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();

        const filter = Object.entries(data)
          .filter(([key]) => key.startsWith(prefix)) //get items starting "aboutMe"
          .sort(([a], [b]) => a.localeCompare(b)) // get with in order
          .map(([, value]) => value);

        return filter;
      } else {
        console.log("Warning no data");
        return null;
      }
    } catch (err) {
      console.error("Failed to fetch app text:", err);
      return null;
    }
  }, [collection, document, prefix]);

  useEffect(() => {
    fetchTexts().then((texts) => {
      if (texts) {
        setAboutMe(Array.isArray(texts) ? texts : []); //Chatgpt sad it might turn null
      }
    });
  }, [fetchTexts]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {aboutMe.map((txt, idx) => (
          <View key={idx} style={styles.textContainer}>
            <Text style={styles.text}>◉ {txt}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
