<h1 align="center">
    react-native-cupertino-list
</h1>

<p align="center">
  <strong>A Cupertino/iOS list for React Native.</strong>
</p>

<p align="center">
  <a href="https://github.com/facebook/react-native-cupertino-list/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="react-native-cupertino-list is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native-cupertino-list">
    <img src="https://img.shields.io/npm/v/react-native-cupertino-list?color=brightgreen" alt="Current npm package version." />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" alt="supports iOS" />
  </a>
    
  <a href="[https://reactnative.dev/docs/contributing](https://github.com/isaced/react-native-cupertino-list/pulls)">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/isaced/react-native-cupertino-list/main/screenshot.jpg" width="200">
</p>

> Currently only tested on iOS.

## Feature

- High-reduction iOS system design style (Cupertino)
- Dark mode support
- Easily customize icons based on [react-native-vector-image](https://github.com/oblador/react-native-vector-icons)
- Based on SectionList, supports all SectionList's own features (such as List header support, Pull to Refresh...)

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
                icon: 'bulb-outline',
                forward: {}
              }
            ],
          },
        ]}
      />
  );
}
```

### API

#### CupertinoSectionList.sections

| Property |              Description              |        Type       | Default |
|:--------:|:-------------------------------------:|:-----------------:|:-------:|
| title    | Title of this row                     | string            | -       |
| icon     | Customized row icon (left)            | CupertinoCellIcon | -       |
| forward  | The element on the right in this row  | ForwardType       | -       |
| onPress  | Callback executed when select one row | function(event)   | -       |

#### CupertinoCellIcon

type: `string |  { name?: string; color?: ColorValue } | JSX.Element`

1. string - render by react-native-vector-icons (Ionicons)

```json
{
  "icon": "bulb-outline"
}
```

2. if you want to customize the color

```json
{
  "icon": {
    "name": "bulb-outline"
    "color": "#000"
  }
}
```

3. If you want to fully customize

```jsx
{
  "icon": (
    <View>...</View>
  )
}
```

#### ForwardType

type: `{ title?: string; icon?: CupertinoCellIcon; arrowHidden?: boolean; }`

| Property    | Description                                    | Type              | Default                     |
|-------------|------------------------------------------------|-------------------|-----------------------------|
| title       | Text displayed to the right of the current row | string            | -                           |
| icon        | Icon displayed to the right of the current row | CupertinoCellIcon | ">" - `ios-chevron-forward` |
| arrowHidden | hide the icon on the right                     | boolean           | false                       |

example:

```json
{
  "title": "22",
  "icon": "ios-chevron-forward"
}
```

### Custom Icon

You can find the icon you need at [react-native-vector-icons directory](https://oblador.github.io/react-native-vector-icons/), fill the icon name into the `data.icon` field, note that only **Ionicons** are currently supported.

## Other

Inspired by [Evan Bacon](https://twitter.com/Baconbrix/status/1526578286783893505), Tanks.
