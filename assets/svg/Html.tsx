import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
const HtmlIcon = ({ size = 24 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 256 256">
    <G fill="none">
      <Rect width="256" height="256" fill="#E14E1D" rx="60" />
      <Path
        fill="#fff"
        d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"
      />
      <Path
        fill="#EBEBEB"
        d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"
      />
    </G>
  </Svg>
);
export default HtmlIcon;
