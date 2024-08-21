import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DescriptionPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    
    const getData = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{fontSize:"38px"}}>Description Page</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "50%", textAlign: "center", border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h1>{data.id}</h1>
                    <img src={data.image} alt="" height={250} width={250} style={{ borderRadius: '10px' }} />
                    <h3>{data.title}</h3>
                    <h4 style={{ color: '#4CAF50' }}>{data.price}</h4>
                    <h4>{data.category}</h4>
                    <p style={{ textAlign: 'justify', lineHeight: '1.5' }}>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPage;