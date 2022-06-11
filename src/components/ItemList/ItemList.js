import Item from "../Item/Item";
import { Grid, GridItem } from '@chakra-ui/react'


const ItemList = ({products}) => {
    return (
        <Grid  templateColumns='repeat(4, 2fr)' gap={2}>
                {products.map(prod =>
                  <GridItem> <Item key={prod.id} {...prod}  /></GridItem>
                )}
            </Grid>
            
    )
}

export default ItemList;
