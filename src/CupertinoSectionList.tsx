import React from 'react';
import {
  SectionList,
  View,
  SectionListData,
  SectionListProps,
  SectionListRenderItem,
  GestureResponderEvent,
} from 'react-native';
import {CupertinoSectionListItem} from './CupertinoSectionListItem';
import {CupertinoText} from './CupertinoText';

export type CupertinoSectionListProps = React.FC<
  SectionListProps<CupertinoCell, CupertinoSection> & {
    cellRender?: CupertinoCellRender;
    sectionRender?: CupertinoSectionRender;
  }
>;

export type CupertinoSection = {
  title?: string;
  data: CupertinoCell[];
  [key: string]: any;
};

export type CupertinoSectionRender =
  | ((info: {
      section: SectionListData<CupertinoCell, CupertinoSection>;
    }) => React.ReactElement | null)
  | undefined;

export type CupertinoCell = {
  title?: string;
  icon?: string;
  iconHidden?: boolean;
  forward?: {
    title?: string;
    iconHidden?: boolean;
  };
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  [key: string]: any;
};

export type CupertinoCellRender = SectionListRenderItem<
  CupertinoCell,
  CupertinoSection
>;

export const CupertinoSectionList: CupertinoSectionListProps = props => {
  return (
    <SectionList
      renderItem={info => {
        return (
          info?.item?.render?.(info) || (
            <CupertinoSectionListItem
              {...info.item}
              isFirst={info.index === 0}
              isLast={info.section.data.length - 1 === info.index}
              onPress={info.item.onPress}
            />
          ) ||
          null
        );
      }}
      renderSectionHeader={info => {
        return (
          info.section.render?.(info) || (
            <View
              style={{
                justifyContent: 'flex-end',
                paddingTop: 32,
                paddingBottom: 16,
                paddingLeft: 20,
              }}>
              {info.section.title && (
                <CupertinoText
                  systemColor={'label'}
                  defaultColor={'#000'}
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  {info.section.title}
                </CupertinoText>
              )}
            </View>
          ) ||
          null
        );
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      contentInsetAdjustmentBehavior="automatic"
      initialNumToRender={10}
      {...props}
    />
  );
};
