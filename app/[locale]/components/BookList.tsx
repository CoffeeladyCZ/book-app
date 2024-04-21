'use client';

import { Box, HStack } from "@chakra-ui/react";
import { BookCard } from "./BookCard";

const BookList = () => {
  // Replace this with your book data
  const books = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
  ];

  return (
    <Box>
      <HStack spacing="24px">
        {books.map((book) => (
          <BookCard key={book.id} />
        ))}
      </HStack>
    </Box>
  );
};

export default BookList;
