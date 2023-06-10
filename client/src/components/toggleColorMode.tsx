import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export enum colorTheme {
  dark = "dark",
  light = "light"
}

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // If userColorMode will be extended, this switch will make it easier to
  // extend the functionality
  const renderSwitch = (param : string) => {
    switch (param) {
      case colorTheme.dark: return <SunIcon color="orange.200" />;
      case colorTheme.light: return <MoonIcon color="blue.700" />
    }
  }
  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="0"
      right="0"
      m="4px"
    >
      { renderSwitch(colorMode) }
    </Button>
  );
};

export default ToggleColorMode;