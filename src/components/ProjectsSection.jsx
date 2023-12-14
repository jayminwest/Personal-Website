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
        imageSrc: '../snow-pack-proj-pic.PNG',
        text: 'Snow Pack Prediction Using GPT-4',
        description:"Custom trained GPT model using data gathered from avalanche forecast centers. Uses vector database and GPT to give user advice on dangerous snow conditions.",
        link:"https://github.com/jayminwest/Snow-Pack-Layer-Prediction",
    },
    {
        imageSrc: '../ncaa-predictions-proj-pic.PNG',
        text: 'March Madness Prediction',
        description:"Custom Neural Network trained on data from Kenpom to predict the outcome of NCAA Men's Basketball games.",
        link:"https://github.com/jayminwest/NCAA-Game-Predictions",
    },
    {
        imageSrc: '../sorting-algorithms-proj-pic.PNG',
        text: "Sorting Algorithm Visualization",
        description: "A simple program that displays common sorting algorithms using Tkinter.",
        link:'https://github.com/jayminwest/Python-Sorting-Algorithms-Visualization',
    },
    {
        imageSrc: '../forexgpt-proj-pic.PNG',
        text: 'Forex-GPT',
        description:"A work in progess that aims to function as a real-time collection of GPT agents working to provide analysis on Forex markets.",
        link: "https://github.com/jayminwest/ForexGPT"
    },
];

// Component for each card
const Card = ({ imageSrc, text, description, link }) => (
    <Box borderWidth="1.5px" borderRadius="lg" overflow="hidden" p="4">
        <Image src={imageSrc} alt="Card Image" mb="4" height="200px"/>
        <Text fontWeight="bold">{text}</Text>
        <Text>{description}</Text>
        <Button as="a" mt="4" colorScheme="red" target="_blank" href={link}>
        View Project
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
