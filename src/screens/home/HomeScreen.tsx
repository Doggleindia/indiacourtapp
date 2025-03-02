import { ScrollView, View } from "react-native";
import LegalTopics from "./components/LegalTopics";
import BooksAndDocs from "./components/BooksAndDocs";
import Categories from "./components/Categories";
import Judgements from "./components/Judgements";
import SearchInput from "./components/SearchInput";
import Resources from "./components/Resources";
import Services from "./components/Services";
import Helpline from "./components/Helpline";
import { HomeHeader } from "@/components/headers/HomeHeader";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFF" }}
        contentContainerStyle={{ gap: 20, marginTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <SearchInput />

        <Categories />

        <LegalTopics />

        <BooksAndDocs />

        <Judgements />

        <Resources />

        <Services />

        <Helpline />
      </ScrollView>
    </View>
  );
}
