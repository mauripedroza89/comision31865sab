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
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';


const ItemDetail = ({id,name,img,description}) => {
    return (
        <>
        <Text fontWeight={800}>Card detail</Text>
        <p>{name}</p>
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
            <Text fontWeight={800} fontSize={'xl'} marginRight={'20%'}>
              {description}
            </Text>
            
          </Stack>
          <Tooltip
            margin={'2%'}
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
        </Stack>
      </Box>
    </Center>
        
        </>
    )
}

export default ItemDetail;