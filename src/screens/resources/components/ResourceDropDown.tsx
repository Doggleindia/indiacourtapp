import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  id: string;
  title: string;
  categories: { category: string; subItems: string[] }[];
};

export default function ResourceDropDown({ id, title, categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.idContainer}>
          <Text style={styles.text}>{id}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.text}>{title}</Text>
          {isOpen ? (
            <Entypo
              name="chevron-small-up"
              size={24}
              color="#07070B"
              onPress={toggleDropDown}
            />
          ) : (
            <Entypo
              name="chevron-small-down"
              size={24}
              color="#07070B"
              onPress={toggleDropDown}
            />
          )}
        </View>
      </View>

      {isOpen && (
        <View style={styles.container}>
          <View style={styles.idContainer} />

          <View
            style={[styles.titleContainer, { paddingTop: 0, paddingBottom: 8 }]}
          >
            <View style={{ gap: 6 }}>
              {categories.map(({ category, subItems }, _) => (
                <View key={_}>
                  <Text style={styles.category}>{category}</Text>

                  {subItems.map((text, _) => (
                    <Text key={_} style={styles.subCategory}>
                      {"  • "}
                      {text}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  idContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 4,
    borderColor: "#C08729",
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: "#C08729",
    borderRightWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { color: "#C08729" },
  category: { fontWeight: "bold", color: "#07070B" },
  subCategory: { color: "#353535", fontSize: 12 },
});
