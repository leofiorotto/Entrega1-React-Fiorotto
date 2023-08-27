import { useEffect, useState } from "react"
import { fetchProducts } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect ( () => {
        console.log("Fetching products...");
        fetchProducts()
            .then (response => {
                console.log("Products fetched:", response);
                setProducts(response)
            })
            .catch (error => {
                console.error(error)
            })
    }, [])

    console.log("Products in state:", products);


    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer