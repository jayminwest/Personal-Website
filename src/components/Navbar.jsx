import { Flex, IconButton, Heading, Spacer, Link, Button, Stack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaYoutube, FaFilePdf } from 'react-icons/fa';

export default function Navbar() {
  return (
    <Flex as="nav" py={10} alignItems="center">
      <Heading minW={"200px"}>Jaymin West</Heading>
      <Spacer />

      <Stack
        direction={["column", "row"]} // Stack direction changes based on screen size
        spacing={["5", "20px"]}
        align={["center", "flex-end"]} // Align buttons to the center on small screens, and flex-end on larger screens
      >
        <IconButton
          as="a"
          target='=_blank'
          aria-label="Resume"
          icon={<FaFilePdf />}
          colorScheme='teal'
          href="../jaymin_west_software_resume_11-23.pdf"
        />
        <IconButton
          as="a"
          target='=_blank'
          aria-label="GitHub"
          icon={<FaGithub />}
          href="https://github.com/jayminwest"
        />
        <IconButton
          as="a"
          target='=_blank'
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme='linkedin'
          href="https://www.linkedin.com/in/jaymin-west/"
        />
        <IconButton
          as="a"
          target='=_blank'
          aria-label="YouTube"
          icon={<FaYoutube />}
          colorScheme='red'
          href="https://www.youtube.com/channel/UCtrGZc-hme--8LECM0dMS5A"
        />
      </Stack>
    </Flex>
  )
}
