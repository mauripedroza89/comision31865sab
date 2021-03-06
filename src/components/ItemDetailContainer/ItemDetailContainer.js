import { useState, useEffect } from "react";
import { getProductById } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Heading, Center, Square, Circle } from "@chakra-ui/react";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams();
    

    useEffect(() =>{

        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        /* getProductById(productId).then(response => {
            setProduct(response)
        }) */
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