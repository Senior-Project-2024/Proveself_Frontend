import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Server.png" />
      </head>
      <body>
        <ChakraProvider>
          {children}  
        </ChakraProvider>
      </body>
    </html>
  )
}
