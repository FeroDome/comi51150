import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({ greeting }) => {
    const [product, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                {
                    product.map(prod => {
                        return (
                            <div>
                                <h3>{product.name}</h3>
                                <button>Ver Decripcion</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer