import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../services/api";
import axios from "axios";
import { Grid, Segment } from "semantic-ui-react";
import { HStack, Heading, Image, Table, Text, Tr } from "@chakra-ui/react";
import { VStack, Button, Link } from "@chakra-ui/react";
import { AiFillPlusCircle, AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/RecipeDetails.css";
const RecipeDetails = ({ searchedQuery }) => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    async function getRecipe() {
      const { data } = await axios.get(`${API_URL}/get?rId=${recipeId}`);
      setRecipe(data.recipe);
      console.log(recipe);
    }
    getRecipe();
  }, []);
  return Object.keys(recipe).length > 0 ? (
    <VStack color={"white"} className="detailsPage">
      <VStack borderRadius={"1em"} padding={"1em"} bg={"#1F4172"}>
        <Link
          to={"/recipes"}
          justifySelf={"center"}
          style={{ marginBottom: 40 }}
        >
          <button className="cssbuttons-io-button">
            Back to recipe List
            <div className="icon">
              <AiOutlineArrowLeft
                className="left-arrow"
                color="blue"
                size={20}
              />
            </div>
          </button>
        </Link>
        <Image borderRadius={"1em"} src={recipe.image_url} />
      </VStack>
      <Grid.Column>
        <Heading fontFamily={`'Dancing-Script',cursive`}>
          {recipe.title}
        </Heading>
        <p>
          Provided By: <Text>{recipe.publisher}</Text>{" "}
        </p>
        <HStack justifyContent={["center", "flex-start"]}>
          {" "}
          <Link href={recipe.publisher_url} target="_blank">
            <Button color="blue"> Publisher Webpage</Button>
          </Link>
          <Link href={recipe.source_url} target="_blank">
            <Button color="blue"> Full Recipe</Button>
          </Link>
        </HStack>

        <Heading display={"flex"} fontFamily={`'Permanent Marker',cursive`}>
          Ingredients - &gt;{" "}
        </Heading>
        <Segment.Group>
          <Table display={"flex"} flexDirection={"column"} gap={"10px"}>
            {recipe &&
              recipe.ingredients.map((data) => (
                <Tr
                  key={data}
                  fontFamily={`'Pacifico',cursive`}
                  p={3}
                  borderRadius={"0.4em"}
                  fontSize={"1.4rem"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"wheat"}
                  display={"flex"}
                  bg={"black"}
                >
                  <AiFillPlusCircle /> {data}
                </Tr>
              ))}
          </Table>
        </Segment.Group>
      </Grid.Column>
      <Button
        variant={"none"}
        width={"100%"}
        bg={"black"}
        height={"20vh"}
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
      </Button>{" "}
    </VStack>
  ) : null;
};

export default RecipeDetails;
