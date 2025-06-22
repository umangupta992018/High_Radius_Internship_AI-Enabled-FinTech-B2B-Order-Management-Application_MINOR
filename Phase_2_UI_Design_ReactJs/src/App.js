import { React, Component } from "react";
import { Provider } from "react-redux";
import { store } from "./reducer/store";
import Form from "./components/themeComponents/makeStylesExample";
import { MuiThemeProvider } from "@material-ui/core";
import baseTheme from "./utils/themeUtils";
class App extends Component {  
  render() {
    console.log(baseTheme);
    return (
      <Provider store={store}>
          <MuiThemeProvider theme={baseTheme}>
            <Form />
          </MuiThemeProvider>        
      </Provider>      
    );
  }
}

export default App;
