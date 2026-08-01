import './styles.css'

import React, { useEffect, useState } from 'react'

function LodeMoreData() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const[disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                setProducts((pre) => [...pre, ...result.products]);
                setLoading(false)
            }
        }
        catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(()=>{
        if(products && products.length ===100) setDisableButton(true)
    },[products])

    if (loading) {
        return <div> Loading data, Please Wait!</div>
    }

    return (

        <div className='container' >
            <div className='product-container' >

                {
                    products && products.length ?
                        products.map((items) => (
                            <div className='product'
                                key={items.id}
                            >
                                <img
                                    src={items.thumbnail}
                                    alt={items.title}
                                />
                                <p>{items.title}</p>
                            </div>
                        ))
                        :
                        null
                }
            </div>
            <div>
                <button disabled={disableButton}  onClick={()=> setCount ( count +1)} className='btn-container' >load more Products</button>
                {disableButton ? <p>you have seen all 100 produtcs!!!</p>: null}
            </div>
        </div>

    )
}

export default LodeMoreData