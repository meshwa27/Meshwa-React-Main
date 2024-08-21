import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditPage = () => {
    const { id } = useParams()

    const [formdata, setformdata] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        category: ""
    })

    const { title, image, description, price, category } = formdata

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formdata)

        axios.put(`http://localhost:3000/product/${id}`, formdata)
            .then((res) => {
                alert("Data Updated...")
                console.log(res.data)
                window.location.href = "/product"
            })
            .catch((err) => console.log(err))
    }

    const getsingledata = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                console.log(res.data)
                setformdata(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getsingledata()
    }, [])

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px' }}>
            <form onSubmit={(e) => handlesubmit(e)}>
                <input
                    name='image'
                    value={image}
                    onChange={(e) => handlechange(e)}
                    type="text"
                    placeholder="Image"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    name='title'
                    value={title}
                    onChange={(e) => handlechange(e)}
                    type="text"
                    placeholder="Title"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <select
                    name='category'
                    value={category}
                    onChange={(e) => handlechange(e)}
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                >
                    <option value={""}>Select Your Category</option>
                    <option value={"men's clothing"}>Men's Clothing</option>
                    <option value={"jewelery"}>Jewelery</option>
                    <option value={"electronics"}>Electronics</option>
                    <option value={"women's clothing"}>Women's Clothing</option>
                </select>
                <input
                    name='price'
                    value={price}
                    onChange={(e) => handlechange(e)}
                    type="text"
                    placeholder="Price"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    name='description'
                    value={description}
                    onChange={(e) => handlechange(e)}
                    type="text"
                    placeholder="Description"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    type="submit"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px', background: 'black', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                />
            </form>
        </div>
    )
}

export default EditPage
