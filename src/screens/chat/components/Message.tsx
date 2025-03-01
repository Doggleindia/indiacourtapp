import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MessageBubble from "@/icons/MessageBubble";
import MessageBubbleSelf from "@/icons/MessageBubbleSelf";

type Props = {
  isSelfMessage?: boolean;
  message: string;
  time: string;
};

export default function Message({ isSelfMessage, message, time }: Props) {
  return (
    <>
      <View
        style={{
          justifyContent: isSelfMessage ? "flex-end" : "flex-start",
          flexDirection: "row",
        }}
      >
        {!isSelfMessage && <MessageBubble />}
        <View
          style={
            isSelfMessage
              ? styles.rightMessageContainer
              : styles.leftMessageContainer
          }
        >
          <Text style={styles.message}>{message}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{time}</Text>
            <Ionicons name="checkmark-done" size={16} color="black" />
          </View>
        </View>
        {isSelfMessage && <MessageBubbleSelf />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  leftMessageContainer: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    backgroundColor: "#F2F2F7",
    gap: 4,
    minWidth: 100,
  },
  rightMessageContainer: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderTopRightRadius: 0,
    backgroundColor: "#FEF0EA",
    gap: 4,
    minWidth: 100,
  },
  message: {
    color: "black",
    fontWeight: "bold",
  },
  date: {
    color: "gray",
    textAlign: "right",
    fontSize: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "flex-end",
  },
});
