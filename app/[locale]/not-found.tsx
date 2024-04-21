'use client'

import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js'

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="2xl" mb={4}>
        404 - Page Not Found
      </Heading>
      <Text fontSize="xl" mb={4}>
        Oops! The page you are looking for does not exist.
      </Text>
      <Link href="/">
        <Button colorScheme="blue">Go back to home</Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
