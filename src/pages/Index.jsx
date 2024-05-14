import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" mt={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTU2Njk5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hi, I'm John Doe, a passionate Full Stack Developer with experience in building web applications using modern technologies. I love coding, learning new things, and sharing knowledge with the community.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2}>A brief description of the project goes here. It showcases the main features and technologies used.</Text>
              <Button mt={2} colorScheme="teal" as={Link} href="#" isExternal>
                View Project
              </Button>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2}>A brief description of the project goes here. It showcases the main features and technologies used.</Text>
              <Button mt={2} colorScheme="teal" as={Link} href="#" isExternal>
                View Project
              </Button>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" color="gray.700">
            Feel free to reach out to me on social media or send me an email.
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton as={Link} href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" isExternal />
            <IconButton as={Link} href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isExternal />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" isExternal />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
