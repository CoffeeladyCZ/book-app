'use client';

import { Card, Image, Flex, Text, Link, Icon, CardBody, Stack } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import type { PopularBooksItem } from "../../../types/global";

interface PopularBookItemProps {
  book: PopularBooksItem;
}

const PopularBookItem: React.FC<PopularBookItemProps> = ({ book }) => {
  return (
    <>
    { book &&
      (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          bg='transparent'
          boxShadow='none'
        >
          <Flex justify='center'>
            <Link href={`/books/detail/${book.id}`}>
              <Image
                src={book.bookImage}
                alt=''
                boxSize='auto'
                objectFit='cover'
                maxW='130px'
                maxH='200px'
              />
            </Link>
          </Flex>
          <Stack>
            <CardBody py='0'>
            <Text fontSize="sm" fontWeight="semibold">{book.title}</Text>
            <Flex py='1'>
              <StarIcon color="yellow.500" boxSize={3} />
              <StarIcon color="yellow.500" boxSize={3} />
              <StarIcon color="yellow.500" boxSize={3} />
              <StarIcon color="yellow.500" boxSize={3} />
              <StarIcon color="yellow.500" boxSize={3} />
            </Flex>
            <Link color="primary.500" mt="4" fontSize='sm'>See review (0)</Link>
            </CardBody>
          </Stack>
        </Card>
        )
      }
    </>
  )
};

export default PopularBookItem;
