'use client';

import { useEffect, useState } from "react";
import { GridItem, Grid, Heading, Box } from "@chakra-ui/react";

import type { PopularBooksNYTResponse } from "../../../types/global";

import PopularBookItem from "./PopularBookItem";

interface PopularBookProps {
  bgColor?: string;
}

const PopularBook: React.FC<PopularBookProps> = ({ bgColor }) => {
  const [results, setResults] = useState<PopularBooksNYTResponse | null>(null);

  const fetchData = async () => {
    const listId = 704;
    const res = await fetch(`http://localhost:5000/api/popular-books?list_id=${listId}`);
    const data: PopularBooksNYTResponse = await res.json();
    setResults(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box position='relative' py='6'>
        <Box
          bg={bgColor || 'primary.100'}
          position="absolute"
          top="50"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          width='80%'
          height='80%'
          zIndex={-1}
          py="10"
        />
        <Box py="6" px="10" zIndex={1}>
          <Heading as='h3'  size='xl' fontWeight='300' py='6'>
            Most popular books
          </Heading>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 2fr)', lg: 'repeat(5, 2fr)' }}
            gap={6}
            columnGap={4}
          >
            {results && 'books' in results && results.books
              .map((book) => (
              <GridItem
                key={book.id} 
                colSpan={{ base: 1}}
                className='myCustomAlignSelf'
              >
                <PopularBookItem book={book} />
              </GridItem>
              ))}
          </Grid>
      </Box>
    </Box>
  )
}

export default PopularBook;