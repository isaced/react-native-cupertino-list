import React from "react";
import { StyleSheet, View } from "react-native";
import { cupertinoColor } from "./utils";
import { ITEM_START_WIDTH } from "./constants";

export function CupertinoItemSeparatorComponent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: cupertinoColor(
          "secondarySystemGroupedBackground",
          "#fff"
        ),
      }}
    >
      <View
        style={{
          marginLeft: ITEM_START_WIDTH,
          height: StyleSheet.hairlineWidth,
          backgroundColor: cupertinoColor("separator", "#C6C6C8"),
        }}
      />
    </View>
  );
}
