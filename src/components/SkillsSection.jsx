import { ChakraProvider, Box, Grid, Center } from "@chakra-ui/react";

const defaultSvgData = [
  '../docker-logo.svg',
  '../github-logo.svg',
  '../jupyter-logo.svg',
  '../python-logo.svg',
  '../react-logo.svg',
  '../c++-logo.svg',
];

const SkillsSection = ({ svgData = defaultSvgData }) => {
  return (
    <Center>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]} // Adjust the number of columns based on screen size
        gap={6}
      >
        {svgData.map((svg, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="0px"
            borderRadius="lg"
            boxSize={{ base: 100, md: 175 }} // Adjust the size of the box based on screen size
          >
            <img src={svg} alt={`Logo ${index}`} />
          </Box>
        ))}
      </Grid>
    </Center>
  );
};

export default SkillsSection;
