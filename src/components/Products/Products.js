import React, { useState } from 'react'
import { getProducts } from '../../fetch/getProducts'
import ModalForm from '../Form/Form'
import Product from './Product/Product'
import style from  './Products.module.css'

function Products () {
    const [products, setProducts] = useState(getProducts())
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState('')

    const changeShowForm = (name = '') => {
        setShowForm(!showForm)
        setName(name)
    }

    return(
        <>
        { !products ? 
            <h1>Loading....</h1>
            :
            <>
                {showForm && <ModalForm changeShowForm={setShowForm} visibl={showForm} name={name}/>}
                <div className={style.products}>
                    {products.map((p, index) => <Product key={index} changeShowForm={changeShowForm} {...p} />)}
                </div>
                
            </>
        }
        </>
    )
}

export default Products
