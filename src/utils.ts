import React from "react";
import {
  Platform,
  PlatformColor,
  ColorValue,
  ViewComponent,
} from "react-native";
import {
  CupertinoCellIcon,
  CupertinoCellIconCustom,
} from "./CupertinoSectionList";

export function cupertinoColor(
  iosName: string,
  fallback: ColorValue
): ColorValue {
  return Platform.select({
    ios: PlatformColor(iosName),
    default: fallback,
  });
}

export function parseIcon(icon?: CupertinoCellIcon) {
  let elment: JSX.Element | undefined,
    name: string | undefined,
    color: string | ColorValue = cupertinoColor("systemBlue", "#007AFE");

  if (icon) {
    if (typeof icon === "string") {
      name = icon;
    } else if (icon.hasOwnProperty("name")) {
      icon = icon as CupertinoCellIconCustom;
      name = icon?.name;

      if (icon?.color) {
        color = icon?.color;
      }
    } else {
      elment = icon as JSX.Element;
    }
  }

  return { elment, name, color };
}
