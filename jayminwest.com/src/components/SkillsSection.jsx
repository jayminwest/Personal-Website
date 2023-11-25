import { ChakraProvider, Box, Grid } from "@chakra-ui/react";

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
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {svgData.map((svg, index) => (
        <Box key={index} p={4} borderWidth="0px" borderRadius="lg">
          <img src={svg} alt={`Logo ${index}`} />
        </Box>
      ))}
    </Grid>
  );
};

export default SkillsSection;
