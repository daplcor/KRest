import { Box, Stack, Typography } from "@mui/material"
import { styles } from "./styles"
import { grey } from "@mui/material/colors"

function Footer() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            sx={styles.wrap}
        >
            <Box component="img" src="/logo.svg" sx={styles.logo} />
            <Typography variant="body2" color={grey[600]}>
                &copy; 2024 - All rights reserved.
            </Typography>
        </Stack>
    )
}

export default Footer
