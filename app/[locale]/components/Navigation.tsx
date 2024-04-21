'use client';

import { Flex, Button, Link, Box, Heading, Spacer, ButtonGroup, Avatar } from "@chakra-ui/react";

import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../../../locales/client";

export const Navigation = ({ locale }: { locale: string }) => {
  const t = useI18n()

  return (
    <Flex
      minWidth="max-content"
      alignContent="center"
      justifyContent="center"
      p={4}  
      gap="2"
    >
      <Box p="2" alignItems="center">
        <Heading size='lg'>{ t('title') }</Heading>
      </Box>
      <ButtonGroup
        alignItems="center"
      >
        <Link href={`/${locale}/home`}>
            <Button colorScheme="pink" mr={4} variant="ghost">
              { t('navigation.home') }
            </Button>
        </Link>
        <Link href={`/${locale}/books`}>
          <Button colorScheme="pink" mr={4} variant="ghost">
            { t('navigation.books') }
          </Button>
        </Link>
      </ButtonGroup>
      <Spacer />
      <Box display="flex" alignItems="center" gap="2">
        <Avatar size="md" name="Test" />
        <LanguageSwitcher />       
      </Box>
    </Flex>
  );
};
