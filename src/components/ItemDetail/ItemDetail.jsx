import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    
    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }
    }

    return (
        <article className='ItemDetailContainer'>
            <header>
                <img src={img} alt={name} style={{ width: 100}}/>
            </header>
            <div className='DescriptionDetail'>
                <picture>
                    <h2>{name}</h2>
                </picture>

                <section>
                    <b>Precio: {price} ETH</b>
                </section> 

                <footer>
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                </footer>
            </div>

        </article>
    )
}

export default ItemDetail