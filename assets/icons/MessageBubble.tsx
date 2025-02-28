import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MessageBubble(props: any) {
  return (
    <Svg width="20" height="20" viewBox="-2 0 10 12" fill="none" {...props}>
      <Path
        d="M9.00064 0C9.00064 0 3.2627 0 1.80065 0C0.338591 0 0.00067234 1.5 1.35067 3C2.70067 4.5 8.50127 9.5 9.00064 11C9.5 12.5 9.00064 0 9.00064 0Z"
        fill="#F2F2F7"
      />
    </Svg>
  );
}
