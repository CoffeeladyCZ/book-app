import { Flex, Button, Link, Box, Heading, Spacer, ButtonGroup, Avatar } from "@chakra-ui/react";

import LanguageSwitcherBase from "./LanguageSwitcher/LanguageSwitcherBase";

export const Navigation = async ({ locale }: { locale: string }) => {
  return (
    <Flex
      minWidth="max-content"
      alignContent="center"
      justifyContent="center"
      p={4}  
      gap="2"
    >
      <Box p="2" alignItems="center">
        <Heading size='lg'>Book App</Heading>
      </Box>
      <ButtonGroup
        alignItems="center"
      >
        <Link href={`/${locale}/home`}>
            <Button colorScheme="pink" mr={4} variant="ghost">
              Home
            </Button>
        </Link>
        <Link href={`/${locale}/books`}>
          <Button colorScheme="pink" mr={4} variant="ghost">
            My Books
          </Button>
        </Link>
      </ButtonGroup>
      <Spacer />
      <Box display="flex" alignItems="center" gap="2">
        <Avatar size="md" name="Test" />
        <LanguageSwitcherBase locale={locale} />       
      </Box>
    </Flex>
  );
};
