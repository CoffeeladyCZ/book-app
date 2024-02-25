import React from "react";
import { Link, Text, Flex } from "@chakra-ui/react";
import { Trans } from 'react-i18next/TransWithoutContext';

import { languages } from '../../../settings';

const LanguageSwitcherBase = (lang: string) => {
  return (
    <Flex>
      <Trans i18nKey="languageSwitcher">
        <Text fontSize="2xl" mr={2}>
          Switch to:{' '}
        </Text>
      </Trans>
        {languages.filter((l) => lang !== l).map((l, index) => {
          return (
            <Text key={l} fontSize="2xl">
              {index > 0 &&
                <Link href={`/${l}`}>
                  {l}
                </Link>
              }
            </Text>
          )
        })}
    </Flex>
  );
};

export default LanguageSwitcherBase;
