import React from "react";
import { Platform, PlatformColor, ColorValue } from "react-native";

export function cupertinoColor(
  iosName: string,
  fallback: ColorValue
): ColorValue {
  return Platform.select({
    ios: PlatformColor(iosName),
    default: fallback,
  });
}
