import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import RedFortImage from "../../../assets/images/home/red_fort.png";
import JudgementLawyerImage from "../../../assets/images/home/judgement_lawyer.png";
import TabItem from "../tabItem/TabItem";
import ComponentHeader from "../headers/ComponentHeader";
import IconTextCard from "../iconTextCard/IconTextCard";

export default function HomeScreen() {
  const categoryTabs = ["Legal Books", "Books", "Judgements", "Resources"];
  const judgementTabs = [
    "Supreme Court",
    "High Court",
    "Lok Sabha",
    "Rajya Sabha",
  ];
  const color = "#F26727";
  const size = 40;

  const topicsCards = [
    {
      text: "Constitution Law",
      icon: <MaterialIcons name="home" size={size} color={color} />,
    },
    {
      text: "Family Law",
      icon: <MaterialIcons name="book" size={size} color={color} />,
    },
    // {
    //   text: "Child Welfare",
    //   icon: <MaterialIcons name="house" size={size} color={color} />,
    // },

    // {
    //   text: "Constitution Law",
    //   icon: <MaterialIcons name="home" size={size} color={color} />,
    // },
    // {
    //   text: "Family Law",
    //   icon: <MaterialIcons name="book" size={size} color={color} />,
    // },
    // {
    //   text: "Child Welfare",
    //   icon: <MaterialIcons name="house" size={size} color={color} />,
    // },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF", gap: 20 }}>
      <View style={{ paddingHorizontal: 16, gap: 6 }}>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#EFEFEF",
          }}
          placeholderTextColor="#7D7D7D"
          textColor="black"
          right={
            <TextInput.Icon
              icon={() => (
                <MaterialIcons name="search" color="#145390" size={32} />
              )}
            />
          }
        />

        <Image source={RedFortImage} />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 8,
          paddingBottom: 20,
          gap: 20,
          backgroundColor: "#FFEDE4",
        }}
      >
        <ComponentHeader title="Categories" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {categoryTabs.map((tab, _) => (
            <TabItem title={tab} selected={_ === 0} />
          ))}
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 8,
          paddingBottom: 20,
          gap: 20,
        }}
      >
        <ComponentHeader title="Legal Topics" />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 6,
            rowGap: 10,
          }}
        >
          {topicsCards.map((topic, _) => (
            <IconTextCard {...topic} key={_} />
          ))}
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 8,
          paddingBottom: 20,
          gap: 20,
        }}
      >
        <ComponentHeader title="Books and Docs" />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 6,
            rowGap: 10,
          }}
        >
          {topicsCards.map((topic, _) => (
            <IconTextCard {...topic} key={_} />
          ))}
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 8,
          paddingBottom: 20,
          gap: 20,
          backgroundColor: "#FFEDE4",
        }}
      >
        <ComponentHeader title="Judgements" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {judgementTabs.map((tab, _) => (
            <View style={{ width: "21%" }}>
              <TabItem title={tab} selected={_ === 0} />
            </View>
          ))}
        </View>
        <Image source={JudgementLawyerImage} />
      </View>
    </ScrollView>
  );
}
