import { Button, HStack, Image, VStack, SkipNavLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiFoodTag } from "react-icons/bi";
import React from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <HStack
        zIndex={299}
        padding={"0.5em 20px"}
        bg={"black"}
        justifyContent={"space-between"}
        className="header"
      >
        <BiFoodTag color="white" size={40} />

        <nav>
          <Link style={{ marginRight: "1em" }} className="menu__link" to={"/"}>
            Home
          </Link>
          <Link className="menu__link" to={"/recipes"}>
            Recipes
          </Link>
        </nav>
      </HStack>
    </header>
  );
};

export default Header;
