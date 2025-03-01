import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CaseDetailsScreen() {
  const caseDetails = {
    title: "Supreme Court ( Criminal Case )",
    case_number: "DP 108",
    case_year: "2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque. Diam tristique semper mauris dolor amet. Dolor elit nunc et purus quam amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium. ",
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        gap: 8,
      }}
    >
      <Text style={styles.title}>{caseDetails.title}</Text>
      <Text style={styles.title}>Case Number : {caseDetails.case_number}</Text>
      <Text style={styles.title}>Case Year : {caseDetails.case_year}</Text>
      <Text style={styles.title}>Description :</Text>
      <Text style={styles.description}>{caseDetails.description}</Text>
      <Text style={styles.description}>{caseDetails.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontWeight: "400",
  },
});
