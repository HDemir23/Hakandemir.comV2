import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LinkedInIcon = ({ size = 24, color= "currentColor" }: { size?: number , color?: string}) => (

  <Svg width={size} height={size} viewBox="0 0 666 680">
    <Path
      fill= {color}
      d="M0 98v498c0 47 37 84 84 84h498c23 0 45-11 59-25 15-15 25-34 25-59V98c0-47-37-84-84-84H84c-25 0-44 10-59 25C11 53 0 75 0 98zm90 66c0-32 26-60 58-60 33 0 60 28 60 60 0 33-27 59-60 59-32 0-58-26-58-59zm161 411V270c0-7 7-13 12-13h85c12 0 12 14 12 23 24-24 55-30 87-30 78 0 128 37 128 119v206c0 7-6 13-12 13h-88c-7 0-12-7-12-13V389c0-31-9-48-44-48-44 0-55 29-55 68v166c0 7-7 13-14 13h-87c-5 0-12-7-12-13zm-159 0V270c0-7 7-13 12-13h87c8 0 13 5 13 13v305c0 7-6 13-13 13h-87c-6 0-12-7-12-13z"
    />
  </Svg>
);
export default LinkedInIcon;
