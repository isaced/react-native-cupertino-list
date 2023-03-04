import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableHighlight, View, Animated, Text } from "react-native";
import { cupertinoColor, parseIcon } from "./utils";
import { CupertinoText } from "./CupertinoText";
import { ITEM_START_WIDTH, BORDER_RADIUS } from "./constants";
import { CupertinoCell } from "./CupertinoSectionList";

import { RectButton, Swipeable } from "react-native-gesture-handler";

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
  enabledSwipeDelete,
  onSwipeDelete,
  titleColor,
  backgroundColor,
  underlayColor,
}: Props) => {
  let iconInfo = parseIcon(icon);
  let forwardIconInfo = parseIcon(forward?.icon);
  const swipeableRef = React.useRef<Swipeable>();

  const Content = () => (
    <TouchableHighlight
      underlayColor={underlayColor ?? cupertinoColor("systemGray5", "#d1d1d6")}
      style={[
        {
          flex: 1,
          flexDirection: "row",
          backgroundColor:
            backgroundColor ??
            cupertinoColor("secondarySystemGroupedBackground", "#fff"),
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
        {iconInfo && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              maxWidth: ITEM_START_WIDTH,
            }}
          >
            {iconInfo.name && (
              <Ionicons size={24} color={iconInfo.color} name={iconInfo.name} />
            )}
            {iconInfo?.elment}
          </View>
        )}
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
              color: titleColor ?? cupertinoColor("label", "#000"),
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
            {forwardIconInfo.name && (
              <Ionicons
                size={24}
                color={forwardIconInfo.color}
                name={forwardIconInfo.name}
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

  if (enabledSwipeDelete) {
    return (
      <Swipeable
        ref={swipeableRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderRightActions={() => {
          return (
            <TouchableHighlight
              style={{
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#dd2d00",
              }}
              underlayColor={"#B71525"}
              onPress={(event) => {
                swipeableRef.current?.close();
                onSwipeDelete?.(event);
              }}
            >
              <Ionicons size={18} color={"white"} name={"trash"} />
            </TouchableHighlight>
          );
        }}
      >
        <Content />
      </Swipeable>
    );
  } else {
    return <Content />;
  }
};
