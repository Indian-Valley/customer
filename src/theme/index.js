import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        text: '#3a3a3a',
        defaultText: '#616161',
        card: '#f9f9f9',
        border: '#9F9F9F',
        primary: '#2B4D17',
        primaryTransparent: (opacity) => `rgba(43, 77, 23, ${opacity})`,
        background: '#DCE0D9',
        link: '#26A96C',
        linkText: '#ffffff'
    },
    shadowStyle: {
        shadowColor: '#15290c',
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 4,
    }
}

export const darkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        text: '#b5b5b5',
        defaultText: '#616161',
        card: '#1b221b',
        border: '#15290c',
        primary: '#b9b9b9',
        primaryTransparent: (opacity) => `rgba(185, 185, 185, ${opacity})`,
        background: '#040a02',
        link: '#26A96C',
        linkText: '#ffffff'
    },
    shadowStyle: {
        shadowColor: '#505f50',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 4,
    }
}

// let themeColors = {
//     mode: 'light',
//     colors: {
//         bg: '',
//         primary: '#DCE0D9',
//         primaryDark: '',
//         dark: '#0D1B2A',
//         darkLight: '',
//
//         text: '#F7F7F2',
//         textLight: '#a4a4a4',
//         textDark: '#F7F7F2',
//
//         secondary: '#177E89',
//         secondaryDark: '#0A3135'
//     },
//
//     dark: {
//         bg: '',
//         primary: '#DCE0D9',
//         dark: '#0D1B2A',
//         action: '#26A96C',
//
//         text: '#F7F7F2',
//
//         secondary: '#177E89',
//         secondaryDark: '#0A3135',
//     },
//     light: {
//         bg: '#DCE0D9',
//         primary: '#DCE0D9',
//         primaryDark: '#2B4D17',
//         dark: '#0D1B2A',
//         darkLight: '#26A96C',
//
//         text: '#F7F7F2',
//         textLight: '#a4a4a4',
//         textDark: '#F7F7F2',
//
//         secondary: '#177E89',
//         secondaryDark: '#0A3135',
//     }
// }

// export const themeColors = {
//     text: "#096017",
//     bgColor: opacity=>`rgba(9, 96, 23, ${opacity})`
// }
