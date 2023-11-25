import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import LeadershipSection from "../components/LeadershipSection"
import AboutMeSection from "../components/AboutMeSection"
import ContactSection from "../components/ContactSection"
import { Box, Spacer, Heading } from '@chakra-ui/react'

export default function RootLayout() {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      p={4}
      maxW={{ base: '100%', md: '75%', xl: '1200px' }}
      mx="auto"
    >
      <Navbar />
      <Header />
      <Spacer />
      <Heading minW={"200px"} paddingBottom={10} paddingTop={40}>PERSONAL PROJECTS</Heading>
      <ProjectsSection />
      <Heading minW={"200px"} paddingBottom={10} paddingTop={40} textAlign="center">TECHNICAL SKILLS</Heading>
      <SkillsSection />
      <Heading minW={"200px"} paddingBottom={0} paddingTop={40}>LEADERSHIP EXPERIENCE</Heading>
      <LeadershipSection />
      <Heading minW={"200px"} paddingBottom={10} paddingTop={40}>ABOUT ME</Heading>
      <AboutMeSection />
      <Heading minW={"200px"} paddingBottom={10} paddingTop={40}>GET IN TOUCH</Heading>
      <ContactSection />
      <Outlet />
    </Box>
  )
}