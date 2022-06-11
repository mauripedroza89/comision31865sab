import { useState, useEffect } from "react";
import { getProductById } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const ItemDetailContainer = (props) => {
    const [product,setProduct] = useState()

    const productId = useParams();
    

    useEffect(() =>{
        getProductById(productId).then(response => {
            setProduct(response)
        })
    },[])
    

    return(
        <>
        <Heading>Detalle del producto</Heading>
        
        <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer;