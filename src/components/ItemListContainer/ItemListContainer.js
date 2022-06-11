import { getProducts } from "../asyncmock";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Heading } from "@chakra-ui/react";


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const params = useParams

    useEffect(() => {
       getProducts()
       .then(response => {
           setProducts(response);
       }) 
       
    },[])
    
    /* const prodsComponent = products.map(product => {
        return (
            <li key={product.id}>
                {product.name}
            </li>
        )
    })   */   

    return(
        <div>
            <Heading>Desafio 4</Heading>
            
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;