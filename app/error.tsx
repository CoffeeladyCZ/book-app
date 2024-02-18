'use client'

import { Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Text fontSize="6xl" fontWeight="bold" color="red.500">
        500
      </Text>
      <Text fontSize="2xl" mt={4}>
        Oops! Something went wrong.
      </Text>
    </Box>
  );
};

export default ErrorPage;
