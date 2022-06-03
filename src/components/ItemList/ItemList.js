import Item from "../Item/Item";

const myGrid = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
}

const ItemList = ({products}) => {
    return (
        <ul style={myGrid}>
                {products.map(prod =>
                   <Item key={prod.id} {...prod}  />
                )}
            </ul>
            
    )
}

export default ItemList;
