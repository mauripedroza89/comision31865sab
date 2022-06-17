import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Icon,
    chakra,
    Tooltip,
    Flex,
    Link
  } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'


const ItemDetail = ({id,name,img,description,price,stock}) => {

  const { addItem } = useContext(CartContext)
 
 
    const [quantityAdd,setQuantityAdd] = useState(0);

    const handleAdd = (quantity) => {
      console.log(`se agregaron ${quantity} ${name}`);
      addItem({ id, name, price, quantity})
      setQuantityAdd(quantity)
    }

    return (
        <>
        <Flex align={'center'} justifyContent={'center'} flexDirection={'column'} >
        <Heading fontWeight={500}>Card detail</Heading>
        <Link href='/' ><Button backgroundColor={"blue.300"} >Regresar</Button></Link>
        </Flex>
        <Center py={12} >
        
      <Box
      
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'auto'}
            src={img}
          />
        </Box>
        <Stack pt={10} align={'center'}>
        
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'l'} marginRight={'10%'}>
              {description}
            </Text>
            
          </Stack>
          {quantityAdd === 0
            ? <ItemCount stock={stock} onAdd={handleAdd}/>
            : <Link href='/cart'><Button >Terminar compra</Button></Link>
          }
          
        </Stack>
      </Box>
    </Center>
        
        </>
    )
}

export default ItemDetail;