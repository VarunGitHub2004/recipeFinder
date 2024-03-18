import { FormControl, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../styles/Recipes.css";
import TypeWriter from "typewriter-effect";
const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState("tomato");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchedQuery(e.target.value);
    console.log(searchedQuery);
  };
  return (
    <VStack height={"100%"} className="Recipes">
      <VStack width={"60%"} zIndex={99}>
        <Heading
          display={"flex"}
          color={"white"}
          fontSize={"56px"}
          className="title"
        >
          <TypeWriter
            options={{
              strings: [" Search Recipes with  "],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />{" "}
          <span style={{ color: "blueviolet" }}> Our Recipes</span>
        </Heading>
        <Text color={"white"} fontSize={"22px"}>
          Input recipes separated by comma
        </Text>
        <FormControl onChange={(e) => handleChange(e)}>
          {" "}
          <Input
            fontSize={"1.5rem"}
            color={"white"}
            padding={"0 16px"}
            placeholder={"tomato,potato,pizza"}
          />
        </FormControl>
      </VStack>
      <Heading zIndex={99} fontSize={"36px"} color={"white"}>
        Recipe List for {searchedQuery}
      </Heading>
      <RecipeList searchedQuery={searchedQuery} />
    </VStack>
  );
};

export default Recipes;
