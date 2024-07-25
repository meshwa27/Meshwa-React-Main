import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const [singleproductdata, setSingleProductData] = useState({})
    const params=useParams()
  
    

    const getSingleData = () => {
        axios.get(`http://localhost:3000/product/${params.id}`)
            .then((res) => {
                console.log('API Response:', res.data)
                setSingleProductData(res.data)
            })
            .catch((err) => console.log('API Error:', err))
    }

    useEffect(() => {
        getSingleData()
    }, [])

    return (
        <div>
            <h1>Description Page</h1>

            <div style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>
                <div style={{ width: "50%" }}>
                    <h1>{singleproductdata.id}</h1>
                    <img src={singleproductdata.image} alt="" height={200} width={200} />
                    <h3>{singleproductdata.title}</h3>
                    <h3>{singleproductdata.price}</h3>
                    <h4>{singleproductdata.category}</h4>
                    <p>{singleproductdata.description}</p> {/* Changed to lowercase 'd' */}
                </div>
            </div>
        </div>
    )
}

export default Description
