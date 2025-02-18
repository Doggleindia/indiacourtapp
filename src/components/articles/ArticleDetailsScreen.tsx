import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ArticleCard from "./components/ArticleCard";
import ArticleContent from "./components/ArticleContent";

export default function ArticleDetailsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ArticleContent
        heading="7 Cases Have Been Success"
        content="Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia vel
            pellentesque quisque imperdiet porttitor ridiculus. Tincidunt odio proin
            rhoncus non varius eu. Elementum sapien ullamcorper orci nisi non
            facilisi consectetur ridiculus. Id viverra praesent sem sodales quis
            morbi fames. Erat faucibus quisque blandit ut potenti. Aliquet dolor
            integer; efficitur parturient quisque et penatibus dictumst. Natoque
            congue odio volutpat nec sem ullamcorper natoque inceptos cubilia. Et in
            vestibulum rutrum nec adipiscing eget ex ut gravida. Himenaeos
            consectetur sem ante fringilla nisi."
      />

      <View style={{ marginTop: 20, gap: 15 }}>
        <Text style={styles.heading}>Browse More</Text>
        <ArticleCard
          title="7 Cases Have Been Sucess"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia vel
        pellentesque quisque imperdiet porttitor ridiculus."
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
    gap: 10,
  },
  heading: { color: "#07070B", fontSize: 24, fontWeight: "700" },
});
