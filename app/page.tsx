'use client'

import { Box, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";

const NavigationItem = ({ label, path }: { label: string, path: string }) => {
  const pathname = usePathname();
  const router = useRouter()

  const isActive = pathname === path;

  return (
    <Button
      fontWeight={isActive ? "bold" : "normal"}
      colorScheme={isActive ? "blue" : "teal"}
      size="md"
      m={4}
      _hover={{ color: "blue.500" }}
      onClick={() => router.push(path)}
    >
      {label}
    </Button>
  );
};

const BookList = () => {
  // Replace this with your book data
  const books = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
  ];

  return (
    <VStack spacing={4} align="start">
      {books.map((book) => (
        <Text key={book.id}>{book.title}</Text>
      ))}
    </VStack>
  );
};

export default function Dashboard() {
  return (
    <Flex direction="column" align="center" justify="center" p={8}>
      <Flex mb={8}>
        <NavigationItem label="Blog" path="/blog" />
        <NavigationItem label="Settings" path="/settings" />
        <NavigationItem label="Books" path="/books" />
      </Flex>
      <Box>
        <BookList />
      </Box>
    </Flex>
  );
}
