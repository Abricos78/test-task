import React from 'react'
import style from './Product.module.css'

function Product({name, img, price, changeShowForm}) {
    let newPrice = [price[0], price.slice(1)]
    return (
        <div className={style.product}>
           <img src={img} alt={name}/>
            <p>{name}</p>
            <h3>{`${newPrice[0]} ${newPrice[1]}`} ₽</h3>
            <button className={style.buy} onClick={() => changeShowForm(name)}>Купить</button>
        </div>
    )
}

export default Product
