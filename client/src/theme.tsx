import { extendTheme } from "@chakra-ui/react";
import { colorTheme } from "./components/toggleColorMode";

const theme = {
  config: {
    intialColorMode: colorTheme.dark,
    useSystemColorMode: true,
  },
};


export default extendTheme(theme);