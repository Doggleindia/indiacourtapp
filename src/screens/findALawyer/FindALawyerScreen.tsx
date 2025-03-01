import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import SearchInput from "../resources/components/SearchInput";
import SubmitButton from "../auth/components/SubmitButton";
import { useRouter } from "expo-router";
import NumbeIcon from "./components/NumbeIcon";

export default function FindALawyerScreen() {
  const router = useRouter();
  const cards = [
    "Expertise & Knowledge",
    "Proper Representation",
    "Peace of Mind",
  ];

  const handleSearch = () => router.push("/find-your-lawyer/laywer");

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      <Text style={styles.heading}>Find A Lawyer</Text>
      <Text style={styles.description}>
        Looking for expert legal assistance? Find the right lawyer for your
        needs with ease.
      </Text>

      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <IconTextCard
            key={index}
            text={card}
            containerStyles={{ justifyContent: "flex-start" }}
            icon={<NumbeIcon number={index + 1} />}
          />
        ))}
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text>My Legal Issue</Text>

          <SearchInput
            showButton={false}
            inputProps={{ placeholder: "Woman Helpline" }}
          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 20 }]}>
          <Text>I Need Your Help Near (City, ZIP Code)</Text>

          <SearchInput
            showButton={false}
            inputProps={{ placeholder: "Woman Helpline" }}
          />
        </View>
        <Text style={styles.text}>*Enter information in one or both field</Text>

        <View style={{ alignItems: "flex-end", marginTop: 20 }}>
          <SubmitButton
            label="Search"
            onPress={handleSearch}
            buttonStyles={{ paddingHorizontal: 32 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#1B1E21",
    fontSize: 30,
    fontWeight: "bold",
  },
  description: { fontSize: 16, marginTop: 16 },
  cardsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: "#C08729",
    padding: 16,
  },
  inputContainer: {
    gap: 10,
  },
  text: {
    fontWeight: "300",
  },
});
