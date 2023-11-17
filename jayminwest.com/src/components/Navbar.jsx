import { Flex, IconButton, Heading, Spacer, Link, Button, HStack} from '@chakra-ui/react';
import { FaGithub, FaLinkedin,FaYoutube } from 'react-icons/fa';

export default function Navbar() {
    return (
        <Flex as="nav" py={10} alignItems="center">
            <Heading minW={"200px"}>Jaymin West</Heading>
            <Spacer />

            <HStack spacing={["10px", "20px"]}>
                <IconButton 
                    as="a" 
                    target='=_blank'
                    aria-label="GitHub"
                    icon={<FaGithub/>}
                    href="https://github.com/jayminwest"
                />
                <IconButton 
                    as="a" 
                    target='=_blank'
                    aria-label="LinkedIn"
                    icon={<FaLinkedin/>}
                    colorScheme='linkedin'
                    href="https://www.linkedin.com/in/jaymin-west/"
                />
                <IconButton 
                    as="a" 
                    target='=_blank'
                    aria-label="YouTube"
                    icon={<FaYoutube/>}
                    colorScheme='red'
                    href="https://www.youtube.com/channel/UCtrGZc-hme--8LECM0dMS5A"
                />
            </HStack>
        </Flex>
    )
}