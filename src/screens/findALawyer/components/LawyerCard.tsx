import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const LawyerImage = require("@/images/find_a_lawyer/lawyer.png");

type Props = {
  name: string;
  stars: number;
  field: string;
  location: string;
  showButton?: boolean;
};

export default function LawyerCard({
  name,
  stars,
  field,
  location,
  showButton = true,
}: Props) {
  const router = useRouter();
  const handleViewProfile = () =>
    router.push("/find-your-lawyer/lawyer-details");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={LawyerImage} resizeMode="contain" />
      </View>
      <View style={styles.leftContainer}>
        <Text>{name}</Text>

        <View style={styles.starContainer}>
          {Array(stars)
            .fill(0)
            .map((_, index) => (
              <MaterialIcons
                name="star"
                key={index}
                color="#C08729"
                size={16}
              />
            ))}
        </View>
        <Text>{field}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{location}</Text>

          {showButton && (
            <TouchableOpacity
              onPress={handleViewProfile}
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text>VIEW PROFILE</Text>
              <MaterialIcons name="arrow-forward" size={16} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  imageContainer: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#C08729",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
  },
  leftContainer: {
    gap: 4,
    flex: 1,
  },
});
