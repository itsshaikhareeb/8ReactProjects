import './styles.css'

import React, { useEffect, useState } from 'react'

function LodeMoreData() {
    const [loading, setLoading] = useState(false)
    const[products,setProducts]  = useState([])
    const[count,setCount] = useState(0)

   async function fetchProducts(){
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`)
            const result = await response.json();
            console.log(result);

            if(result && result.products && result.products.length){
                setProducts(result.products);
                setLoading(false)
            }
        } 
        catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    if(loading){
        return <div> Loading data, Please Wait!</div>
    }

  return (

    <div className='container' >LodeMoreData</div>

  )
}

export default LodeMoreData