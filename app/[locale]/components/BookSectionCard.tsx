'use client';

import { FC } from 'react';
import { Card, Image, Text, Flex, Link } from '@chakra-ui/react';
import { useI18n } from '../../../locales/client';

interface BookItem {
  title: string;
  description: string;
  image: string;
  author: string;
}

interface BookSectionProps {
  book: BookItem;
}

const BookSectionCard: FC<BookSectionProps> = ({ book }) => {
  const t = useI18n();

  return (
    <Link href="/your-link-url">
      <Card borderRadius="0" bg="transparent" boxShadow="none">
        <Image boxSize="130px" objectFit="cover" src={book.image} alt={book.title} />
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="sm" pt="2" textAlign="center">
            {book.author}
          </Text>
          <Text fontSize="xs" color="blackAlpha.700" textAlign="center">
            {book.title}
          </Text>
        </Flex>
      </Card>
    </Link>
  );
};

export default BookSectionCard;
