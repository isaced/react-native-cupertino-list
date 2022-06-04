import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableHighlight, View, GestureResponderEvent } from "react-native";
import { cupertinoColor } from "./utils";
import { CupertinoText } from "./CupertinoText";
import { ITEM_START_WIDTH, BORDER_RADIUS } from "./constants";
import { CupertinoCell } from "./CupertinoSectionList";

type Props = CupertinoCell & {
  isFirst?: any;
  isLast?: any;
};

export const CupertinoSectionListItem = ({
  title,
  forward,
  icon,
  isFirst,
  isLast,
  onPress,
}: Props) => {
  const iconName = typeof icon === "string" ? icon : icon?.name;
  const iconColor =
    (typeof icon === "string" ? undefined : (icon || {}).color) ??
    cupertinoColor("systemBlue", "#007AFE");

  const forwardIconName =
    typeof forward?.icon === "string" ? forward.icon : forward?.icon?.name;
  const forwardIconColor =
    typeof forward?.icon === "object" ? forward.icon.color : undefined;

  return (
    <TouchableHighlight
      underlayColor={cupertinoColor("systemGray5", "#d1d1d6")}
      style={[
        {
          flex: 1,
          flexDirection: "row",
          backgroundColor: cupertinoColor(
            "secondarySystemGroupedBackground",
            "#fff"
          ),
        },
        isFirst && {
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
        },
        isLast && {
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        },
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: ITEM_START_WIDTH,
          }}
        >
          {iconName && <Ionicons size={24} color={iconColor} name={iconName} />}
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <CupertinoText
            systemColor={"label"}
            defaultColor={"#000"}
            style={{
              paddingVertical: 14,
              fontSize: 18,
            }}
          >
            {title}
          </CupertinoText>
        </View>
        {forward && (
          <View
            style={{
              flex: 1,
              maxWidth: 90,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 13,
              flexDirection: "row",
            }}
          >
            {forwardIconName && (
              <Ionicons
                size={24}
                color={forwardIconColor}
                name={forwardIconName}
              />
            )}
            {forward.title && (
              <CupertinoText
                systemColor={"secondaryLabel"}
                defaultColor={"#8A898E"}
                style={{
                  fontSize: 18,
                  color: "#8A898E",
                  textAlign: "right",
                  marginRight: 8,
                }}
              >
                {forward.title}
              </CupertinoText>
            )}
            {forward.arrowHidden || (
              <Ionicons
                size={24}
                color={cupertinoColor("tertiaryLabel", "#C4C4C6")}
                name={"ios-chevron-forward"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};
