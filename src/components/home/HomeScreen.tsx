import { ScrollView } from "react-native";
import LegalTopics from "./components/LegalTopics";
import BooksAndDocs from "./components/BooksAndDocs";
import Categories from "./components/Categories";
import Judgements from "./components/Judgements";
import SearchInput from "./components/SearchInput";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      contentContainerStyle={{ gap: 20 }}
    >
      <SearchInput />

      <Categories />

      <LegalTopics />

      <BooksAndDocs />

      <Judgements />
    </ScrollView>
  );
}
