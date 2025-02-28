import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MessageBubbleSelf(props: any) {
  return (
    <Svg width="20" height="20" viewBox="2 0 10 12" fill="none" {...props}>
      <Path
        d="M0.999364 0C0.999364 0 6.7373 0 8.19935 0C9.66141 0 9.99933 1.5 8.64933 3C7.29933 4.5 1.49873 9.5 0.999364 11C0.5 12.5 0.999364 0 0.999364 0Z"
        fill="#FEF0EA"
      />
    </Svg>
  );
}
