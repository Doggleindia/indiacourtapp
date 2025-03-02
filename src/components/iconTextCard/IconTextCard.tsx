import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";

export default function IconTextCard({
  icon,
  text,
  onPress,
  containerStyles,
  textStyles,
}: {
  icon: JSX.Element;
  text: string;
  onPress?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity style={[styles.item, containerStyles]} onPress={onPress}>
      {icon}
      <Text style={[{ textAlign: "center" }, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 4,
    paddingVertical: 12,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.68,
    shadowRadius: 8,
    elevation: 8,
    flex: 1,
  },
});
