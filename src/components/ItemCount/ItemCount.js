import { Button, Stack, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       
           setQuantity(quantity+1)
       
       
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <Stack>          
            <Flex justifyContent={'center'}>
                <Button  bgColor={'red.300'} onClick={decrement}>-</Button>
                <Heading  margin={'0 15px'} >{quantity}</Heading>
                <Button  bgColor={'red.300'} onClick={increment}>+</Button>
            </Flex>
            <Stack>
                <Button bgColor={'red.300'} onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
            </Stack>
       </Stack>
   )

}
export default ItemCount;