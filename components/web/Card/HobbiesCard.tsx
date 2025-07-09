import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../FirebaseConfig";
import { useHobbiesCardStyle } from "./hobbieesCard.style";

type Hobby = {
  id: string;
  imageUrl: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
};

type CardProps = {
  title: string;
  content: string;
};

export default function HobbiesCard({ content, title }: CardProps) {
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

  const handleButtonPress = useCallback((url: string) => {
    router.push(url as any);
  }, []);

  const renderItem: ListRenderItem<Hobby> = useCallback(
    ({ item }) => (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.text} numberOfLines={3}>
              {item.text}
            </Text>
          </View>

          {item.buttonText && item.buttonUrl && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(item.buttonUrl!)} // Non-null assertion operator
            >
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    ),
    [styles, handleButtonPress]
  );

  const keyExtractor = useCallback((item: Hobby) => item.id, []);

  const loadingComponent = useMemo(
    () => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          minHeight: 200,
        }}
      >
        <ActivityIndicator size="large" color="#238636" />
      </View>
    ),
    []
  );

  // getItemLayout with proper typing
  const getItemLayout = useCallback(
    (_data: ArrayLike<Hobby> | null | undefined, index: number) => ({
      length: 240, // card width + margin
      offset: 240 * index,
      index,
    }),
    []
  );

  if (loading) {
    return loadingComponent;
  }

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <Text style={styles.headtitle}>{title}</Text>
      <FlatList
        horizontal
        data={hobbies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: "transparent" }}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={10}
        initialNumToRender={3}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}
