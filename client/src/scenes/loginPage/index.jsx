import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#0a80ad"
        p="1rem 6%"
        textAlign="center"
        color="#fff"
      >
        <Typography fontWeight="bold" fontSize="35px">
          SocialHub
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="bold" variant="h5" sx={{ mb: "1.5rem" }} color="#0a80ad" letter-spacing="3px">
          Welcome to SocialHub, the Social Media Hub for Connecting People!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
