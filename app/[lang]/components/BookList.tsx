import { Box, Text, VStack } from "@chakra-ui/react";


const BookList = () => {
  // Replace this with your book data
  const books = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
  ];

  return (
    <Box>
      <VStack spacing={4} align="start">
        {books.map((book) => (
          <Text key={book.id}>{book.title}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default BookList;
