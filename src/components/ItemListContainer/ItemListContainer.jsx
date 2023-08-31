import { useEffect, useState } from "react"
import { fetchProducts, fetchProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect ( () => {

        const asyncFunct = categoryId ? fetchProductsByCategory : fetchProducts
       
        asyncFunct(categoryId)
            .then (response => {
                setProducts(response)
            })
            .catch (error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer