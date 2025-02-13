import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function Home(props: SvgProps) {
  return (
    <Svg width="25" height="24" fill="#000" {...props}>
      <Path d="M9.76398 23.4217V15.1552H14.5757V23.4217H20.5903V12.3997H24.199L12.1698 0L0.140625 12.3997H3.74938V23.4217H9.76398Z" />
    </Svg>
  );
}
