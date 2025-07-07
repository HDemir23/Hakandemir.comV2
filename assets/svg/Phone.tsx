import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PhoneIcon = ({ size = 24 ,color="currentColor"}: { size?: number , color?: string}) => (
        <Svg
      viewBox="0 0 24 24"
        width={size}
        height={size}
    >
      <Path  
           fill={color}
       d="M20 4c0-2.2-1.8-4-4-4H8C5.8 0 4 1.8 4 4v16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4zm-7 18h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm5-5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v12z" />
    </Svg>
);
export default PhoneIcon;
