'use client'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme'

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
