import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Heading, Center } from "@chakra-ui/react";
import { getProducts } from "../../services/firebase/Firestore";
import { useAsync } from "../../hooks/useAsync";


const ItemListContainer = (props) => {
    const [title, setTitle] = useState('Bienvenidos')
    const { categoryId } = useParams()
    const {isLoading, data, error} = useAsync(() =>getProducts(categoryId), [categoryId])

            /* aplicamos el spiner */
            if(isLoading){
                return <Center><Heading>Cargando...</Heading></Center>
            }
            if(error){
                return <Center><Heading>Hubo un error</Heading></Center>
            }
            
    return(
        <div>
            <Center><Heading>Bienvenido a Rock Clothes</Heading></Center>            
            {data.length > 0
            ? <ItemList products={data}/>
            : <Heading>No hay productos en esta categoria</Heading>
            }
            
        </div>
    )
}

export default ItemListContainer;