import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import ProjectsSection from "../components/ProjectsSection"
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
      <Heading minW={"200px"} paddingBottom={10} paddingTop={40}>Personal Projects</Heading>
      <ProjectsSection />
      <Outlet />
    </Box>
  )
}