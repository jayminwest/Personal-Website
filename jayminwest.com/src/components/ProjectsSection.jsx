import { Box, Circle, Text, Button, Flex, Heading, Image} from '@chakra-ui/react';

export default function ProjectsSection() {
  return (
    // <Flex as="nav" py={10} alignItems="center">
    //         
    // </Flex> 
    
    <Flex wrap="wrap">
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
        imageSrc: '..\..\public\img\snow-pack-proj-pic.PNG',
        text: 'Snow Pack Prediction Using GPT-4',
    },
    {
        imageSrc: 'url-to-image-2.jpg',
        text: 'March Madness Prediction',
    },
    {
        imageSrc: 'url-to-image-3.jpg',
        text: 'https://github.com/jayminwest/Python-Sorting-Algorithms-Visualization',
    },
    {
        imageSrc: 'url-to-image-4.jpg',
        text: 'Forex-GPT',
    },
];

// Component for each card
const Card = ({ imageSrc, text }) => (
    <Box borderWidth="1.5px" borderRadius="lg" overflow="hidden" p="4">
        <Image src={imageSrc} alt="Card Image" mb="4" />
        <Text>{text}</Text>
        <Button mt="4" colorScheme="red">
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
