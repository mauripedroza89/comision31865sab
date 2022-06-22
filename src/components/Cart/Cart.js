import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Button,
    useColorModeValue as mode,
  } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import * as React from 'react';
import { CartItem } from '../CartItem/CartItem';

  
export const Cart = () => {
    const navigate = useNavigate();

return (
    
    <Box
    borderWidth="1px" rounded="lg" padding="8" width="full"
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Tu carrito (3 items)
          </Heading>
  
          <Stack spacing="6">
            <CartItem/>
            {/* {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))} */}
          </Stack>
        </Stack>
            
        <Flex direction="column" align="center" flex="1">
          {/* <CartOrderSummary /> */}
          <Heading>Total:$5000</Heading>
          <Button>Terminar compra</Button>
          <HStack mt="6" fontWeight="semibold">
            <p>o</p>
            <Link color={mode('blue.500', 'blue.200')} onClick={()=>navigate("/")}>Continuar comprando</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}