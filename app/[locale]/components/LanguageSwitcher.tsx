'use client';

import { Button } from '@chakra-ui/react';
import { useChangeLocale, useCurrentLocale } from '../../../locales/client';

const LanguageSwitch = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale()
  return (
    <>
      { locale === 'cs' ?
        (
          <Button
            type="button"
            variant="link"
            onClick={() => changeLocale('en')}
          >
            EN
          </Button>
        ) : (
          <Button
            type="button"
            variant="link"
            onClick={() => changeLocale('cs')}
          >
            CZ
          </Button>
        )
      }
    </>
  );
}

export default LanguageSwitch;
