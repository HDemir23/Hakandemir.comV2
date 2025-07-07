import { db } from "@/FirebaseConfig";
import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useHobbiesCardStyle } from "./hobbieesCard.style";

type Hobby = {
  // card Items from db
  id: string;
  imageUrl: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
};

type CardProps = {
  // Db Props
  content: string;
};

export default function HobbiesCard({ content }: CardProps) {
  const styles = useHobbiesCardStyle();
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHobbies = useCallback(async (): Promise<Hobby[]> => {
    try {
      const snapshot = await getDocs(collection(db, content));
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Hobby[];
    } catch (error) {
      console.error("Error fetching hobbies:", error);
      return [];
    }
  }, [content]);

  useEffect(() => {
    fetchHobbies().then((data) => {
      setHobbies(data);
      setLoading(false);
    });
  }, [fetchHobbies]);

  const renderItem: ListRenderItem<Hobby> = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>

      {item.buttonText && item.buttonUrl && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push(item.buttonUrl as any)}
        >
          <Text style={styles.buttonText}>{item.buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#999" style={{ marginTop: 40 }} />
    );
  }

  return (
    <FlatList
      horizontal
      data={hobbies}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}
