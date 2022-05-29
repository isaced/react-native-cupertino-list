import React from 'react';
import {View, ViewProps} from 'react-native';
import {cupertinoColor} from './utils';

export const CupertinoBackground: React.FC<ViewProps> = props => {
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: cupertinoColor('systemGroupedBackground', '#F2F1F6'),
        },
        props.style,
      ]}
    />
  );
};
