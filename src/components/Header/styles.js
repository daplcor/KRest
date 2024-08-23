import { grey, teal } from "@mui/material/colors"

export const styles = {
    wrap: {
        backgroundColor: grey[900]
    },
    logo: {
        height: "30px"
    },
    nav: {
        color: "white",
        textDecoration: "none"
    },
    paperStyles: {
        background: "#333333aa",
        borderRadius: 0,
        width: "100%",
        backdropFilter: "blur(1px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px"
    },
    closeButton: {
        height: "60px",
        width: "60px",
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${teal[500]}`
    },
    mobileLink: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        color: "#FFF",
        textDecoration: "none"
    }
}
