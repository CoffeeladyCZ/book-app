'use client';

import { FC } from "react";
import { Button, Heading, Grid, GridItem, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';

import { useI18n } from "../../../locales/client";
import BookSectionCard from "./BookSectionCard";
import { SectionBookEnum } from '../../../enums';

interface BookItem {
  title: string;
  description: string;
  image: string;
  author: string
}

interface BookSectionProps {
  books: BookItem[];
  title: string;
  params: {
    locale: string;
  };
}

const SECTION_MAP = {
  'currentlyReading': {
    enum: SectionBookEnum.CURRENTLY_READING,
    translation: 'bookCard.currentlyReading'
  },
  'readBooks': {
    enum: SectionBookEnum.READ_BOOKS,
    translation: 'bookCard.readBooks'
  },
  'wantRead': {
    enum: SectionBookEnum.WANT_READ,
    translation: 'bookCard.wantRead'
  }
} as const;

const BookSection: FC<BookSectionProps> = ({ books, title, params: { locale } }) => {
  const t = useI18n();
  
  const section = SECTION_MAP[title as keyof typeof SECTION_MAP] ?? SECTION_MAP.currentlyReading;

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(9, 1fr)', lg: 'repeat(12, 1fr)' }}
      templateRows='repeat(50px, 1fr, 20px)'
      placeItems="center"
      bg='secondary.100'
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
        <Heading as='h2' size='md' fontWeight='400'>
          {t(section.translation, {})}
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
        <Link as={NextLink} href={`/${locale}/books/${section.enum}`}>
          <Button
            variant="link"
            color="accent.orange"
            rightIcon={<ArrowForwardIcon />}
          >
            {t('bookCard.more', {})}
          </Button>
        </Link>
      </GridItem>
    </Grid>
  );
}

export default BookSection;
