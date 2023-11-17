import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import { Box } from '@chakra-ui/react'

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
      <Outlet />
    </Box>
  )
}