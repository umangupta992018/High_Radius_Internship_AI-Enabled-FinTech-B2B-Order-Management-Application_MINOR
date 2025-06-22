import { createMuiTheme } from "@material-ui/core/styles";

const baseTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#ffffff"
        }
    },
    text: {
        primary: { 
            main: "#ffffff"
        },        
        secondary: {
            main: "#000000"
        },
        danger: {
            main: "#123456"
        }
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: "#00ff00"
            },
            root: {
                minWidth: "64vw"                
            }
        },
        MuiTable: {
            root: {
                //add styles
            }
        }
    }
});

export default baseTheme;