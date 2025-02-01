import React from 'react'
import { Appearance } from "react-native";

const defaultTheme = Appearance.getColorScheme()
console.log(defaultTheme)

const ThemeContext = React.createContext({
    theme: defaultTheme,
});

export default ThemeContext;