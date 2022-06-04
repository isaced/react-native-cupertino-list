<h1 align="center">
    react-native-cupertino-list
</h1>

<p align="center">
  <strong>A Cupertino/iOS list for a React Native.</strong>
</p>

<p align="center">
  <a href="https://github.com/facebook/react-native-cupertino-list/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="react-native-cupertino-list is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native-cupertino-list">
    <img src="https://img.shields.io/npm/v/react-native-cupertino-list?color=brightgreen" alt="Current npm package version." />
  </a>
  <a href="[https://reactnative.dev/docs/contributing](https://github.com/isaced/react-native-cupertino-list/pulls)">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/isaced/react-native-cupertino-list/main/screenshot.jpg" width="200">
</p>

## Feature

- High-reduction iOS system design style (Cupertino)
- Dark mode support
- Easily customize icons based on [react-native-vector-image](https://github.com/oblador/react-native-vector-icons)

## Install

npm

```
npm install react-native-cupertino-list
```

yarn

```
yarn add react-native-cupertino-list
```

> You also need to install [react-native-vector-image](https://github.com/oblador/react-native-vector-icons#installation) to display the icons.

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
