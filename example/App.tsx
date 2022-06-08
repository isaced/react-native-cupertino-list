/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  CupertinoSectionList,
  cupertinoColor,
} from 'react-native-cupertino-list';
import {Alert} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CupertinoSectionList
        // onPress={(props: any) => {
        //   console.log(props);
        // }}
        sections={[
          {
            data: [
              {
                title: 'All Items',
                forward: {},
                icon: 'ios-grid-outline',
                onPress: () => {
                  console.log('123');
                },
              },
              {
                title: 'Starter Items',
                forward: {title: '22'},
                icon: 'ios-folder-outline',
              },
              {
                title: 'Favorites',
                forward: {title: '6'},
                icon: 'ios-star-outline',
                enabledSwipeDelete: true,
                onSwipeDelete: () => {
                  Alert.alert('swipe delete');
                },
              },
              {
                title: 'Share',
                icon: (
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      backgroundColor: '#eee',
                    }}></View>
                ),
              },
            ],
          },

          {
            title: 'Lifestyle',
            data: [
              {
                title: 'Activities',
                forward: {title: '3'},
                icon: {
                  name: 'ios-watch-outline',
                  color: cupertinoColor('systemYellow', '#f7CE46'),
                },
              },
              {
                title: 'Sleep',
                forward: {title: '5'},
                icon: 'ios-bed-outline',
              },
            ],
          },
          {
            title: 'Extra',
            data: [{title: 'Config', icon: 'ios-settings-outline'}],
          },
          {
            title: 'Extra',
            data: [
              {
                title: 'All Items',
                forward: {},
                icon: 'ios-grid-outline',
              },
              {
                title: 'Starter Items',
                forward: {title: '22'},
                icon: 'ios-folder-outline',
              },
              {
                title: 'Favorites',
                forward: {title: '6'},
                icon: 'ios-star-outline',
              },
              {
                title: 'Share',
                icon: 'ios-share-outline',
              },
              {
                title: 'Share',
                icon: 'ios-share-outline',
              },
            ],
          },
        ]}
        // style={{
        //   flex: 1,
        //   backgroundColor: cupertinoColor('systemGroupedBackgroundColor', '#fff'),
        // }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    // backgroundColor: cupertinoColor
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
