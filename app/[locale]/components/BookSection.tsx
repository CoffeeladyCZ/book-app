'use client';

import { FC } from "react";
import { Button, Heading, Grid, GridItem } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { useI18n } from "../../../locales/client";
import BookSectionCard from "./BookSectionCard";

interface BookItem {
  title: string;
  description: string;
  image: string;
  author: string
}

interface BookSectionProps {
  books: BookItem[];
  title: string;
}

const BookSection: FC<BookSectionProps> = ({ books, title }) => {
  const t = useI18n();

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(9, 1fr)', lg: 'repeat(12, 1fr)' }}
      templateRows='repeat(50px, 1fr, 20px)'
      placeItems="center"
      bg='blackAlpha.200'
      py="6"
      px="10"
      gap={6}
      columnGap={9}
    >
      <GridItem
        pl="2"
        rowSpan={1}
        colSpan={{ base: 1, sm: 2, md: 9, lg: 12 }}
      >
        <Heading size='md'>
          { title }
        </Heading>
      </GridItem>
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
      <GridItem
        colSpan={{ base: 1, sm: 2, md: 9, lg: 12 }}
        justifySelf="end"
      >
        <Button
          variant='link'
          colorScheme='blackAlpha.900'
          fontStyle="uppercase"
          rightIcon={<ArrowForwardIcon />}
        >
          { t('bookCard.more') }
        </Button>
      </GridItem>
    </Grid>
  );
}

export default BookSection;
