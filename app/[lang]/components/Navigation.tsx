import React, { useState } from "react";
import { Menu, Flex, Button, MenuButton, Link } from "@chakra-ui/react";

import { useTranslation } from '../../i18n';
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, 'translation');

  return (
    <>
      <Flex
      direction="row"
      align="center"
      justify="space-between"
      pb={4}
      >
        <Menu>
          <Link href={`/${lang}/home`}>
            <MenuButton as={Button}  colorScheme="pink" mr={4}>
            { t('home') }
            </MenuButton>
          </Link>
          <Link href={`/${lang}/about`}>
            <MenuButton as={Button} colorScheme="pink" mr={4}>
              { t('about') }
            </MenuButton>
          </Link>
          <Link href={`/${lang}/books`}>
            <MenuButton as={Button} colorScheme="pink" mr={4}>
              { t('books') }
            </MenuButton>
          </Link>
        </Menu>
        <LanguageSwitcher lang={lang} />       
      </Flex>
    </>
  );
};

export default Navigation;
