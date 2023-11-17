import { Flex, Box, Heading, Spacer, Link, Button, HStack} from '@chakra-ui/react';


export default function Navbar() {
    return (
        <Flex as="nav" mx={20} py={10} alignItems="center">
            <Heading>Jaymin West</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Button>
                    <Link target="_blank" href='https://github.com/jayminwest'>GitHub</Link>
                </Button>
                <Button>
                    <Link target="_blank" href='https://www.linkedin.com/in/jaymin-west/'>LinkedIn</Link>
                </Button>
                <Button>
                    <Link target='_blank' href="https://www.youtube.com/channel/UCtrGZc-hme--8LECM0dMS5A">YouTube</Link>
                </Button>
            </HStack>
        </Flex>
    )
}