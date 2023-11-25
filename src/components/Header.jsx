import { Box, Circle, Text, VStack } from '@chakra-ui/react';

export default function Header() {
    const textStyle = {
        color:"white",
        fontWeight: 'bold',
        fontSize: ["1em", "2em", "3em"],
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Circle bg="#ee596a" size={['250px', '350px', '550px']} minW="200px" minH="200px">
            <VStack>
                <Text sx={textStyle}>Jaymin West</Text>
                <Text sx={textStyle}>Software Engineer</Text>
                <Text sx={textStyle}>Fort Collins, CO</Text>
            </VStack>
            </Circle>
        </Box>
    );
}
