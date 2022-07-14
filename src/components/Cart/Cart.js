import * as React from 'react';
import { useState, useContext } from 'react';
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Button,
    Center,
    useColorModeValue as mode,
  } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import CartContext from '../../context/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import { useNotification } from '../../notification/Notification';
//firebase para generar orden
import { addDoc, collection, updateDoc, doc, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore';
import { db } from '../../services/firebase/index';

  
const Cart = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const {cart, totalQuantity,getTotal, clearCart} = useContext(CartContext);

    const total = getTotal()

    const setNotification = useNotification()

    const handleCreateOrder = () => {
      setLoading(true)
      const objOrder = {
        buyer: {
          name: "Mauricio Garcez",
          email: "garcez89@gmail.com",
          address: "Garcez 89"
        },
        items: cart,
        total: total
        
      }

      const batch = writeBatch(db)

      const ids = cart.map(prod => prod.id)

      const outOfStock = []

      const collectionRef = collection(db, 'products')
      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
          .then(response => {
            
            response.docs.forEach(doc => {
              const dataDoc = doc.data()
              const prod = cart.find(prod => prod.id == doc.id)
              const prodQuantity = prod.quantity

              if(dataDoc.stock >= prodQuantity) {
                batch.update(doc.ref, {stock:dataDoc - prodQuantity})
              } else {
                outOfStock.push({ id: doc.id, ...dataDoc})
              }
            })
          }).then(() => {
            if(outOfStock.length === 0){
              const collectionRef = collection(db, "orders")
              return addDoc(collectionRef, objOrder)
            } else {
              return Promise.reject({ type: 'out_of_stock', products:outOfStock })
            }
          }).then(({ id }) => {
            batch.commit()
            clearCart()
            setNotification('success', `Orden generada con exito. Su id de orden es: ${id}`)
          }).catch(error => {
            if(error.type === 'out_of_stock'){
              setNotification('error', `Hay productos sin stock`)

            }else{
              console.log(error);
            }
          }).finally(() => {
            setLoading(false)
          })
      /* const collectionRef = collection(db, 'orders');
//agrega a la coleccion
      addDoc(collectionRef, objOrder).then(({ id }) => {
        console.log(id);
      }) */
    }

    /* const handleUpdateStock = () => {
        const docRef = doc(db,'products', 'PXlkm4azfAEXBC8hna0h')

        updateDoc(docRef, { stock: 500})
    } */

    if(loading){
      return <h1>Orden en proceso</h1>
    }

    if(totalQuantity === 0) {
      return <Center><Heading>No hay articulos en el carrito</Heading></Center>
    }

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
            <CartItemList productsAdded={cart}/>
            {/* {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))} */}
          </Stack>
        </Stack>
            
        <Flex direction="column" align="center" flex="1">
          {/* <CartOrderSummary /> */}
          <Heading>Total: ${total}</Heading>
          <br/>
          <Button onClick={handleCreateOrder}>Crear orden</Button>
          <br/>
          <Button onClick={() => clearCart()}>Limpiar carrito</Button>
          <br/>
          {/* <Button onClick={handleUpdateStock}>Stock 500</Button> */}
          <HStack mt="6" fontWeight="semibold">
            <p>o</p>
            <Link color={mode('blue.500', 'blue.200')} onClick={()=>navigate("/")}>Continuar comprando</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Cart;