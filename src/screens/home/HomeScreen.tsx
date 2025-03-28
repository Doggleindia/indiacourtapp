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
import Bills from "./components/Bills";

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

        <Services />

        <LegalTopics />

        <BooksAndDocs />

        <Judgements />

        <Resources />

        <Bills />

        <Helpline />
      </ScrollView>
    </View>
  );
}
