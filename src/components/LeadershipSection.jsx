import { Card } from '@chakra-ui/react';


// WA Video: https://www.youtube.com/watch?v=zXPDHcIAvl8
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const LeadershipSection = () => {
  return (
    <Box mt={8}>
      <Flex direction={{ base: "column", md: "row" }} align="center">
        {/* Text on the left */}
        <Box flex="1" pr={{ base: 0, md: 8 }} minHeight={{ base: "300px", md: "500px" }} display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="1.2em">
           During the past four years I have been able to pursue my passion as an outdoor educator and leader. This has allowed me to lead students of all ages through a variety of environments and situations. From mountaineering in the Tetons to white water rafting in the PNW, I've learned first hand how impactful a good leader can be. 
          </Text>
          <Text mt={4} fontSize="1.2em">
            Mixing technical ability with the soft-skills required to facilitate high risk activites has provided me a framework for being a balanced and effective leader. I'm convinced that these skills transfer directly into all parts of my professional and personal life and I look forward to applying them more and more as my career progresses.
          </Text>
        </Box>

        {/* Image on the right */}
        <Box flex={{ base: "1", md: "1" }} height={{ base: "300px", md: "500px" }}>
          <Image
            src="../leadership-pic.JPG"
            alt="Outdoor Leadership"
            borderRadius="lg"
            objectFit="cover" // This property ensures the image is cropped to cover the specified dimensions
            height="100%"
            width="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LeadershipSection;

