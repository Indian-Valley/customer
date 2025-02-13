import { StyleSheet } from 'react-native';

import { DefaultTheme, DarkTheme } from '@react-navigation/native'

let themeColors = {
    background: '#DCE0D9',
    backgroundDark: '#040a02',

    primary: '#2B4D17',
    primaryDark: '#b9b9b9',
    dark: '#0D1B2A',
    darkLight: '',

    text: '#3a3a3a',
    textDark: '#F7F7F2',
    defaultText: '#767676',

    secondary: '#177E89',
    secondaryDark: '#0A3135',

    action: '#26A96C',
}

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        text: themeColors.text,
        defaultText: themeColors.defaultText,
        card: '#f9f9f9',
        border: '#9F9F9F',
        primary: themeColors.primary,
        primaryTransparent: (opacity) => `rgba(43, 77, 23, ${opacity})`,
        background: themeColors.background,
        link: themeColors.action,
        linkText: '#ffffff',
        danger: '#CD5C5C'
    },
    shadowStyle: StyleSheet.create({
        shadowColor: '#15290c',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    }),
    textStyle: StyleSheet.create({
        color: themeColors.text
    })
}

export const darkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        text: themeColors.textDark,
        defaultText: themeColors.defaultText,
        card: '#1b221b',
        border: '#15290c',
        primary: themeColors.primaryDark,
        primaryTransparent: (opacity) => `rgba(185, 185, 185, ${opacity})`,
        background: themeColors.backgroundDark,
        link: themeColors.action,
        linkText: '#ffffff',
        danger: '#DC143C'
    },
    shadowStyle: StyleSheet.create({
        shadowColor: '#505f50',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 4,
    }),
    textStyle: StyleSheet.create({
        color: themeColors.textDark
    })
}
