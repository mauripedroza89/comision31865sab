import { getProducts, getProductsByCategory } from "../asyncmock";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Heading, Center } from "@chakra-ui/react";


const ItemListContainer = (props) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);/* Usamos spiner mientras carga el componente */

    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
        }else{
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
        }
       
       
    },[categoryId])

    /* aplicamos el spiner */
    if(loading){
        return <Center><Heading>Cargando...</Heading></Center>
    }
    
    /* const prodsComponent = products.map(product => {
        return (
            <li key={product.id}>
                {product.name}
            </li>
        )
    })   */   

    return(
        <div>
            <Center><Heading>Desafio 4</Heading></Center>            
            {products.length > 0
            ? <ItemList products={products}/>
            : <h1>No hay productos en esta categoria</h1>
            }
            
        </div>
    )
}

export default ItemListContainer;