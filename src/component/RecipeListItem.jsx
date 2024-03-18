import {
  Heading,
  Image,
  VStack,
  Link as A,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RecipeListItem = ({
  recipe_id,
  publisher,
  title,
  src,
  publisher_url,
  imgURL,
  social_rank,
}) => {
  return (
    <VStack
      boxSizing="border-box"
      bg={"#720455"}
      width={"431px"}
      borderRadius={"1em"}
      padding={"16px"}
      height={"411px"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Box width={"100%"} height={"100%"} className="myCard">
        <Box className="innerCard">
          <Box className="frontSide">
            <p className="title">
              <Image
                marginTop={-10}
                boxSizing="border-box"
                border={"5px solid white"}
                borderRadius={"1em"}
                width={"400px"}
                height={"250px"}
                src={imgURL}
              />
              <Heading
                noOfLines={1}
                boxSizing="border-box"
                fontFamily={`'Dancing Script',cursive`}
                fontSize={"36px"}
              >
                {title}
              </Heading>
            </p>{" "}
            <p>
              {" "}
              <Text color={"wheat"}>Click</Text>or
              <Text color={"wheat"}>Hover Me</Text>{" "}
            </p>
          </Box>
          <div className="backSide">
            <p className="title">
              {" "}
              <Heading boxSizing="border-box" fontSize={"36px"}>
                Publisher:{publisher}
              </Heading>
              <HStack
                justifyContent={"center"}
                marginTop={5}
                boxSizing="border-box"
                fontSize={"16px"}
              >
                <Link to={`/recipes/${recipe_id}`}>
                  {" "}
                  <button className="details">
                    {" "}
                    <span>Details</span>
                    <span></span>
                  </button>
                </Link>
                <A target="_blank" href={src}>
                  {" "}
                  <button className="details recipe-url">
                    {" "}
                    <span>Recipe URL</span>
                    <span></span>
                  </button>
                </A>
              </HStack>
            </p>
            <p>Leave Me</p>
          </div>
        </Box>
      </Box>
    </VStack>
  );
};

export default RecipeListItem;
