import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    intialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
      },
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        backgroundColor: "linen",
        fontFamily: "'Courier New', Courier, monospace",
      },
    },
  },
  colors: {
    primColor: "moccasin",
    secColor: "darkslategray",
    thrColor: "red",
  },
};


export default extendTheme(theme);