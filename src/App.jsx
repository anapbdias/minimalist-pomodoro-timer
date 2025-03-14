import React, { useEffect } from "react";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import { Box, Grid, GridItem, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/public/icons/favicon-" + colorMode + ".png";
    }
  }, [colorMode]);

  return (
    <Box minH="100vh" bg={colorMode === "dark" ? "gray.900" : "blackAlpha.50"}>
      <Grid
        templateRows="auto 1fr auto"
        templateColumns="1fr"
        gap={4}
        minH="100vh"
        p={4}
      >
        <GridItem
          as="header"
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <Button onClick={toggleColorMode} ml={4}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </GridItem>

        <GridItem
          as="main"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Pomodoro />
        </GridItem>

        <GridItem
          as="footer"
          display="flex"
          justifyContent="right"
          alignItems="center"
        ></GridItem>
      </Grid>
    </Box>
  );
}

export default App;
