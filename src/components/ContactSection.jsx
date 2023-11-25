import { Box, Heading, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { FaFilePdf, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  const resumeLink = "../jaymin_west_software_resume_11-23.pdf";
  const linkedinLink = "https://www.linkedin.com/in/jaymin-west/";
  const githubLink = "https://github.com/jayminwest";
  const youtubeLink = "https://www.youtube.com/channel/UCtrGZc-hme--8LECM0dMS5A";

  return (
    <Box mt={8}>
      <Flex direction="column" align="center">
        <ButtonGroup spacing={6}>
          {/* Resume Button */}
          <Button
            leftIcon={<FaFilePdf />}
            colorScheme="teal"
            size="lg"
            as="a"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>

          {/* GitHub Button */}
          <Button
            leftIcon={<FaGithub />}
            colorScheme="gray"
            size="lg"
            as="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>

          {/* LinkedIn Button */}
          <Button
            leftIcon={<FaLinkedin />}
            colorScheme="blue"
            size="lg"
            as="a"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>

          {/* YouTube Button */}
          <Button
            leftIcon={<FaYoutube />}
            colorScheme="red"
            size="lg"
            as="a"
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default ContactSection;
