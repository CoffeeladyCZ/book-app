'use client';

import { FC, useEffect, useState } from "react";

import { BooksResponse, GoogleBookItem } from "../../../types/global";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface BookDetailProps {
  name: string;
}

export const BookDetail: FC<BookDetailProps> = ({ name }) => {

  const fetchData = async () => {
    const response = await fetch(`/api/books/?q=${name}`);
    const data: BooksResponse = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return data.items;;
  };
  
  const { isLoading, isError, data: book } = useQuery<GoogleBookItem[]>(
    queryKey: 'bookDetail',
    queryFn: fetchData,
  );

  const countStars = (rating: number) => {
    const stars = [];
   
    const ratingMap = new Map([
      [0, 0],
      [1, 20],
      [2, 40],
      [3, 60],
      [4, 80],
      [5, 100],
    ]);

    const starCount = Array.from(ratingMap.entries()).reduce((acc, [stars, threshold]) => {
      return rating < threshold ? acc : stars;
    }, 0);

    for (let i = 0; i < starCount; i++) {
      stars.push(<StarIcon color="yellow.500" boxSize={3} key={i} />);
    }
    return stars;
  };

  return (
    <>
      <Card
        borderRadius='0'
        bg='transparent'
        boxShadow='none'
      >
        <Flex>
          <Image
              boxSize='200px'
              objectFit='cover'
              src={book?.volumeInfo.imageLinks.thumbnail}
              alt={book?.volumeInfo.title}
            />
          <CardBody>
            <Heading as='h3'  size='xl' fontWeight='300' py='6'>{ book?.volumeInfo.title }</Heading>
            <Text fontSize='sm' fontWeight='normal'>
              by { book?.volumeInfo.authors.map((author) => author).join(", ") }
            </Text>
            <Text fontSize='sm' fontWeight='normal'>Published: { book?.volumeInfo.publishedDate }</Text>
            <Text fontSize='sm' fontWeight='normal'>{ book?.volumeInfo.description }</Text>
            <Flex>{ countStars(book?.volumeInfo.averageRating) }</Flex>
          </CardBody>
        </Flex>
      </Card>
    </>
  );
};
