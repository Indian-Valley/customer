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
        background: '#DCE0D9',
        link: '#26A96C'
    }
}

export const darkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        text: '#c9c9c9',
        defaultText: '#616161',
        card: '#191919',
        border: '#444859',
        primary: '#f9f9f9',
        background: '#0D1B2A',
        link: '#26A96C'
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
