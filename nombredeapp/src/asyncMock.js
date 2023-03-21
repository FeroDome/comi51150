const products = [
    { 
        id: '1', 
        name: 'Figura Spawn', 
        price: 10000, 
        category: 'Coleccionables', 
        img:'https://rabbithole.cl/wp-content/uploads/2021/05/206184196_509949957004695_5713717791487007872_n.jpg', 
        stock: 2, 
        description:'Spawn Prey Studios'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}