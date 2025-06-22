import React from "react";
import baseTheme from "./../../utils/themeUtils";
import { MuiThemeProvider } from "@material-ui/core";

const ThemeContext = React.createContext();
export const ThemeProvider = props => {
	return (
		<ThemeContext.Provider>
			<MuiThemeProvider theme={baseTheme}>{props.children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;