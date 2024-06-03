import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>About</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">Contact</Button>
        </Box>
      </Flex>
      <VStack spacing={4} mt={8} textAlign="center">
        <Text fontSize={isMobile ? "2xl" : "4xl"}>Welcome to MyApp</Text>
        <Text fontSize={isMobile ? "md" : "lg"}>Your journey starts here. Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;