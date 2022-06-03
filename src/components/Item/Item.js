import './item.css';

const Item = ({name,img,price}) => {
    return (
        
        <div className="card">
            
            <img src={img} className="image" />
            <div className="container">
           <h3> {name}</h3>
           <h4>$ {price}</h4>
            </div>
        </div>
    )
}

export default Item;