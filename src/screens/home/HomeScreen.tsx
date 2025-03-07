import { ScrollView } from "react-native";
import LegalTopics from "./components/LegalTopics";
import BooksAndDocs from "./components/BooksAndDocs";
import Categories from "./components/Categories";
import Judgements from "./components/Judgements";
import SearchInput from "./components/SearchInput";
import Resources from "./components/Resources";
import Services from "./components/Services";
import Helpline from "./components/Helpline";

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

      <Resources />

      <Services />

      <Helpline />
    </ScrollView>
  );
}
