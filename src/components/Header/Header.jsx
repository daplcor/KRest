import { Box, Container, Drawer, Stack, Typography } from "@mui/material";
import { navs } from "./lib";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { grey, teal } from "@mui/material/colors";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (curr) => () => setOpen(curr);

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={styles.wrap}>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            height="50px"
          >
            <Stack
              onClick={handleHome}
              direction="row"
              alignItems="center"
              gap={1}
            >
              <Box component="img" src="/logo.svg" sx={styles.logo} />
              <Typography sx={{ cursor: 'pointer' }} variant="body2" color="white">
                Kadenai Explorer
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              {/* {navs.map((item, i) => (
                                <Box
                                    key={i}
                                    display={{ xs: "none", md: "block" }}
                                >
                                    <Link to={item.to} style={styles.nav}>
                                        {item.label}
                                    </Link>
                                </Box>
                            ))}

                            <Box
                                display={{ xs: "block", md: "none" }}
                                component="div"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuRounded style={{ color: grey[200] }} />
                            </Box> */}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: styles.paperStyles,
        }}
      >
        <Box
          component="span"
          onClick={toggleDrawer(false)}
          sx={styles.closeButton}
        >
          <CloseRounded style={{ color: teal[500] }} />
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {navs?.map((cell, index) => (
            <div key={index}>
              <Link style={styles.mobileLink} to={cell.to}>
                <Typography fontSize={24} variant="subtitle1">
                  {cell.label}
                </Typography>
              </Link>
            </div>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

export default Header;
