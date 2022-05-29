# react-native-cupertino-list

A Cupertino/iOS list for a React Native.



<img src="https://raw.githubusercontent.com/isaced/react-native-cupertino-list/main/screenshot.jpg" width="350">

## Install

npm

```
npm install react-native-cupertino-list
```

yarn

```
yarn add react-native-cupertino-list
```

## Usage

```javascript
import {CupertinoSectionList} from 'react-native-cupertino-list';

export function HomeScreen() {
  return (
      <CupertinoSectionList
        sections={[
          {
            title: 'Settings',
            data: [
              {
                title: 'All Items',
                icon: 'bulb-outline'
              }
            ],
          },
        ]}
      />
  );
}
```

## Other

Inspired by [Evan Bacon](https://twitter.com/Baconbrix/status/1526578286783893505), Tanks.
