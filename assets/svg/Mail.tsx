import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MailIcon = ({
  size = 24,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20">
    <Path
      fill="white"
      fillRule="evenodd"
      d="M7.172 11.334l2.83 1.935 2.728-1.882 6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376zM0 6.429l6.042 4.132-5.936 5.858A1.663 1.663 0 010 15.833V6.43zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648 0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666z"
    />
  </Svg>
);
export default MailIcon;
