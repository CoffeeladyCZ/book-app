import React from "react";
import { Link, Text, Flex } from "@chakra-ui/react";

import { locales } from "../../../../settings";

const LanguageSwitcherBase = async ({ locale }: { locale: string }) => {

  return (
    <Flex>
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        <Text fontSize="2xl" mr={2}>
          Switch to:{' '}
        </Text>
      </Trans> */}
        {locales.filter((l) => locale !== l).map((l, index) => {
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
