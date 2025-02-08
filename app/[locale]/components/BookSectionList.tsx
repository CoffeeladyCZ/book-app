'use client';

import { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import BookSectionCard from "./BookSectionCard";

interface BookSection {
  title: string;
  description: string;
  image: string;
  author: string;
}

interface BookSectionProps {
  books: BookSection[];
}

const BookSectionList: FC<BookSectionProps> = ({ books }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(9, 1fr)', lg: 'repeat(12, 1fr)' }}
      templateRows='repeat(50px, 1fr, 20px)'
      placeItems="center"
      bg='primary.100'
      py="6"
      px="10"
      gap={6}
      columnGap={9}
    >
       {
        books.map((book) => (
          <GridItem
            colSpan={{ base: 1, sm: 1, md: 2, lg: 2}}
            key={book.title}
            className='myCustomAlignSelf'
          >
            <BookSectionCard book={book} />
          </GridItem>
        ))
      }
    </Grid>
  )
};

export default BookSectionList;
 