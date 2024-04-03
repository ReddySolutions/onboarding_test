import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/reddy.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="13.5%" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
