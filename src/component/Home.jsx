import { HStack, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
        bg={
          "url(https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        }
        width={"100vw"}
      >
        <Heading textAlign={"center"} fontSize={"4rem"} color={"white"}>
          {/* OUR RECIPE */}
        </Heading>
        <HStack>
          <BiRightArrow className="arrow" size={50} color="skyblue" />{" "}
          <button className="btn">
            {" "}
            <Link to="/recipes">Search Recipe</Link>{" "}
          </button>{" "}
          <BiLeftArrow className="arrow" size={50} color="skyblue" />
        </HStack>
      </VStack>
    </>
  );
};

export default Home;
