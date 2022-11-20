import '../styles/globals.css'
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default MyApp