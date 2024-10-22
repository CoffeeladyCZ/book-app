'use client'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from 'react'

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuta
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ChakraProvider>
  )
}
