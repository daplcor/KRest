import { createTheme, responsiveFontSizes } from "@mui/material"
import { FONT_FAMILY } from "../config/fonts"
import { FONT_SIZES } from "../config/fonts"
import { grey } from "@mui/material/colors"

const themeObj = createTheme({
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: FONT_FAMILY.primary
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: "smooth",
                    outline: "none",
                    overflowX: "hidden"
                },
                body: {
                    fontFamily: FONT_FAMILY.primary,
                    fontSize: FONT_SIZES.body,
                    margin: 0,
                    padding: 0,
                    outline: "none",
                    lineHeight: 1,
                    fontWeight: 400,
                    color: grey[900]
                },
                p: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    }
})

export const theme = responsiveFontSizes(themeObj)
