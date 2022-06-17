import { useState, useEffect } from "react";
import { getProductById } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Heading, Center, Square, Circle } from "@chakra-ui/react";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState()

    const {productId} = useParams();
    

    useEffect(() =>{
        getProductById(productId).then(response => {
            setProduct(response)
        })
    },[productId])
    

    return(
        <>
        <Center bg='purple' h='100px' color='white'>
        <Heading>Detalle del producto</Heading>
        </Center>
        <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer;