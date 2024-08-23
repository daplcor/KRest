import { grey } from "@mui/material/colors"
import { FONT_FAMILY } from "../../config/fonts"

const size = "40px"

export const styles = {
    searchBarWrap: {
        display: "flex",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: grey[50],
        height: size,
        border: `1px solid ${grey[200]}`,
        overflow: "hidden"
    },
    searchButton: {
        height: size,
        px: size,
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        backgroundColor: grey[200]
    },
    searchInput: {
        flex: 1,
        height: "100%",
        padding: "4px 14px",
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: FONT_FAMILY.primary,
        color: grey[900],
        "&::placeholder": {
            fontSize: "0.875rem",
            color: grey[400],
            fontFamily: FONT_FAMILY.primary
        }
    },
    statsWrap: {
        border: `1px solid ${grey[200]}`,
        borderRadius: "6px",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
        backgroundColor: grey[50]
    },
    statsCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 2
    },
    table: { minWidth: 650 },
    link: {
        textDecoration: "none"
    },
    tableContainer: {
        backgroundColor: grey[50],
        borderRadius: "6px"
    }
}
