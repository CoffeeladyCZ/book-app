'use client';

import { FC, useEffect, useState } from "react";

import { BooksResponse, GoogleBookItem } from "../../../types/global";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

interface BookDetailProps {
  name: string;
}

export const BookDetail: FC<BookDetailProps> = ({ name }) => {
  const [book, setBook] = useState<GoogleBookItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/books/?q=${name}`);
      const data: BooksResponse = await res.json();
      if (data) {
        setBook(data.items[0]);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <Card
        borderRadius="0"
        bg="transparent"
        boxShadow="none"
      >
        <Image
            boxSize='130px'
            objectFit='cover'
            src={book?.volumeInfo.imageLinks.thumbnail}
            alt={book?.volumeInfo.title}
          />
          <CardBody>
          <Text fontSize="sm" fontWeight="semibold">{id}</Text>
        </CardBody>
      </Card>
    </>
  );
};
