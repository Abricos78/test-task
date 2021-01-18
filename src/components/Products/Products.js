import React, { useState } from 'react'
import { getProducts } from '../../fetch/getProducts'
import Form from '../Form/Form'
import Product from './Product/Product'
import style from  './Products.module.css'

function Products () {
    const [products, setProducts] = useState(getProducts())
    const [showForm, setShowForm] = useState(false)

    const changeShowForm = (name = '') => {
        debugger
        setShowForm({
        showForm: !showForm.showForm,
        name
    })}

    return(
        <>
        { !products ? 
            <h1>Loading....</h1>
            :
            <>
                {showForm && <Form changeShowForm={changeShowForm} visible={showForm}/>}
                <div className={style.products}>
                    {products.map((p, index) => <Product key={index} changeShowForm={changeShowForm} {...p} />)}
                </div>
                
            </>
        }
        </>
    )
}

export default Products
