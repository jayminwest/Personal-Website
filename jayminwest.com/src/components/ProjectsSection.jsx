import { Box, Circle, Text, Button, Flex, Heading} from '@chakra-ui/react';

export default function ProjectsSection() {
  return (
    // <Flex as="nav" py={10} alignItems="center">
    //         
    // </Flex> 
    
    <Flex wrap="wrap">
        <Heading minW={"200px"}>Projects</Heading>
    {cardData.map((card, index) => (
      <Box key={index} flex="1" m="2" minWidth="300px">
        <Card {...card} />
      </Box>
    ))}
  </Flex>
  )
}

// Sample data for the cards
const cardData = [
    {
        imageSrc: 'url-to-image-1.jpg',
        text: 'Text for card 1',
    },
    {
        imageSrc: 'url-to-image-2.jpg',
        text: 'Text for card 2',
    },
    {
        imageSrc: 'url-to-image-3.jpg',
        text: 'Text for card 3',
    },
    {
        imageSrc: 'url-to-image-4.jpg',
        text: 'Text for card 4',
    },
];

// Component for each card
const Card = ({ imageSrc, text }) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        {/* <Image src={imageSrc} alt="Card Image" mb="4" /> */}
        <Text>{text}</Text>
        <Button mt="4" colorScheme="teal">
        Learn More
        </Button>
    </Box>
);

// Your main component with the grid of cards
const CardGrid = () => (
    <Box>
        <Flex wrap="wrap">
            {cardData.map((card, index) => (
            <Box key={index} flex="1" m="2" minWidth="300px">
                <Card {...card} />
            </Box>
            ))}
        </Flex>
    </Box>
);
