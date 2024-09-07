'use client';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";

import { useI18n } from "../../../locales/client";
import { useEffect, useState } from "react";

interface Book {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

interface BooksResponse {
  items: Book[];
}

 export const BookCard = () => {
  const t = useI18n();

  const [results, setResults] = useState<Book[]>();

  const fetchData = async () => {
    const query = 'Harry Potter';

    const res = await fetch(`/api/books/?q=${query}`);
    const data: BooksResponse = await res.json();
    setResults(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    {results && results.length && results.map((book) => (
      <Card maxW='sm' key={book.id}>
        <CardBody>
          {/* <Image
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          /> */}
          <Stack mt='6' spacing='3'>
            <Heading as='h2' size='md' fontWeight='500'>{ book.volumeInfo.title }</Heading>
            <Text>
              { book.volumeInfo.description }
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid'>
              { t('book.readMore') }
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    ))}
    </>
  );
}
