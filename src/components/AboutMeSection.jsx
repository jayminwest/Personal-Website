import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const AboutMeSection = () => {
  return (
    <Box mt={8}>
      <Flex direction={{ base: "column-reverse", md: "row" }} align="center">
        {/* Image on the left */}
        <Box flex={{ base: "1", md: "1" }} height={{ base: "300px", md: "500px" }}>
          <Image
            src="../about-me-pic.JPG"
            alt="Profile"
            borderRadius="lg"
            objectFit="cover" // This property ensures the image is cropped to cover the specified dimensions
            height="100%"
            width="100%"
            pr="10"
          />
        </Box>

        {/* Text on the right */}
        <Box flex="1" pr={{ base: 0, md: 8 }} minHeight={{ base: "300px", md: "500px" }} display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="1.2em">
            Hello! I'm Jaymin West, an aspiring Software Engineer and Outdoor Professional. I'm a 2023 Gonzaga Unviersity grad and am currently working as a Ski Instructor in Sandpint, ID. I've worked on large scale projects with professional teams and student peers. Most recently, I completed a year long project with a team of 3 others which effectivley translated English and Spanish using a novel lemma based dependency tree technique.    
          </Text>
          <Text mt={4} fontSize="1.2em">
            Travelling is my main passion. I recently returned from a 2 month stint in South America, practicing Spanish in Peru and surfing on Easter Island. I spent a semester studying Neural Networks and Deep Learning in Copenhagen, where I truly became fascinated by the power of AI. I'm an avid outdoors-person and have been practicing the Japanese skill toy, Kendama, for over 6 years. 
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMeSection;
