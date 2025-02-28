import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "@/components/headers/Header";
import SearchInput from "../resources/components/SearchInput";
import Message from "./components/Message";

export default function ChatScreen() {
  const ref = useRef<FlatList>(null);

  const messages = [
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
    {
      isSelfMessage: true,
      message: "Hello",
      time: "11:31 AM",
    },
    {
      isSelfMessage: false,
      message: "How may I help you?",
      time: "11:35 AM",
    },
    {
      isSelfMessage: true,
      message: "Tell me about Criminal Law",
      time: "11:36 AM",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollToEnd({ animated: true });
    }, 200);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title="Chat With Us" backButtonVisisble />
      <Text style={styles.date}>24 January, 2024</Text>

      <View style={styles.chatContainer}>
        <View style={styles.messagesContainer}>
          <FlatList
            contentContainerStyle={{
              gap: 20,
              marginTop: "auto",
            }}
            showsVerticalScrollIndicator={false}
            ref={ref}
            data={messages}
            renderItem={({ item }) => <Message {...item} />}
          />
        </View>
        <SearchInput inputProps={{ placeholder: "Type a message" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    textAlign: "center",
    color: "#3A3A38",
    fontSize: 16,
  },
  chatContainer: { flex: 1, padding: 20, gap: 20 },
  messagesContainer: { flex: 1 },
});
