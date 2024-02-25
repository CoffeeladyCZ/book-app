'use client'

import { Box, Flex } from "@chakra-ui/react";

import Navigation from "./components/Navigation";
import BookList from "./components/BookList";

const Page = ({ params: { lang }}: {params: { lang: string}}) => {
  return (
    <Box position="relative" h="100vh" px={12}
      bgGradient={[
        'linear(to-tr, teal.300, yellow.300)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.200)',
      ]}
    >

      <Flex
        direction="column"
        align="start"
        justify="center"
        p={4}       
      >
        <Navigation lang={lang} />
        <BookList />
      </Flex>
    </Box>
  );
}

export default Page;
