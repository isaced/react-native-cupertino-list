import React from "react";
import { ColorValue, Text, TextProps } from "react-native";
import { cupertinoColor } from "./utils";

type CupertinoTextProps = TextProps & {
  systemColor: string;
  defaultColor: ColorValue;
};
export const CupertinoText: React.FC<CupertinoTextProps> = ({
  style,
  systemColor,
  defaultColor,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "System",
          color: cupertinoColor(systemColor, defaultColor),
        },
        style,
      ]}
    />
  );
};
