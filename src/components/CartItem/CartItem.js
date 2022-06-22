import { 
    CloseButton, 
    Flex, 
    Heading, 
    Link,
    Stack,
    Box,
    Text,
    Image, 
    Button
} from '@chakra-ui/react';
import * as React from 'react';



export const CartItem = () => {
  

  return (
    <Flex borderWidth="1px" rounded="lg" padding="8" width="full" direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      
      <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={''}
        alt={'imagen'}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">Nombre</Text>
          <Text  fontSize="sm">
            Cantidad: 3
          </Text>
        </Stack>
        
      </Box>
    </Stack>

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        
        <Heading >$100</Heading>
        <Text>Subtotal: $100 </Text>
        <Button aria-label={`Delete name from cart`} onClick={''}>Borrar</Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        
        <Heading >$100</Heading>
      </Flex>
    </Flex>
  )
}