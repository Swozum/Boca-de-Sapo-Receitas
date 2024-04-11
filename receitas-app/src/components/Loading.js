import React from 'react'
import { Heading, Box } from '@chakra-ui/react'

export default function() {
  return (
    <Box>
      <Heading
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Defina a altura da caixa para ocupar toda a altura da tela
      >
        Loading...
      </Heading>
    </Box>
  )
}
