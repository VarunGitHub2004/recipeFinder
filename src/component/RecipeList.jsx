import React, { useEffect, useState } from "react";
import { API_URL } from "../services/api";
import axios from "axios";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import RecipeListItem from "./RecipeListItem";
import "../styles/RecipeList.css";
const RecipeList = ({ searchedQuery }) => {
  const [recipes, setRecipes] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
      setRecipes(res.data.recipes);
      setCount(res.data.count);
      console.log(recipes);
    }
    getData();
  }, [searchedQuery]);
  return (
    <VStack
      overflow={"hidden"}
      padding={"1em"}
      color="white"
      bg={"#3C0753"}
      width={["100%", "100%"]}
    >
      No of Recipes {count}
      {recipes != undefined ? (
        <HStack
          flexWrap={"wrap"}
          width={["100%", "100%"]}
          className="recipeList"
          bg={"#3C0753"}
          gap={"2em"}
        >
          {recipes.map((r) => (
            <>
              <RecipeListItem
                recipe_id={r.recipe_id}
                publisher_url={r.publisher_url}
                publisher={r.publisher}
                imgURL={r.image_url}
                title={r.title}
                social_rank={r.social_rank}
                src={r.source_url}
              />
            </>
          ))}
          <Button
            variant={"none"}
            width={"100%"}
            bg={"black"}
            height={"100%"}
            className="end"
          >
            <Text
              fontSize={"5rem"}
              bg={"black"}
              color={"white"}
              className="button__span"
            >
              The End
            </Text>
          </Button>
        </HStack>
      ) : (
        <section className="loader">
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
        </section>
      )}
    </VStack>
  );
};
export default RecipeList;
