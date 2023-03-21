import { useEffect, useState } from "react"
import { getProductsById } from '../../asyncMock'

const ItemDetailContainer = () => {
    const  [product, setProduct] = useState({}) 

    useEffect(() => {
        getProductsById('3')
            .then(res => {
                setProduct(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <h1>Descripcion del Producto</h1>
            <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name}/>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Decripcion: {product.descripcion}</p>

            </div>
        </div>
    )
}

export default ItemDetailContainer