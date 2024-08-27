import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Service/Firebase';

const EditPage = () => {
    const { id } = useParams();

    const [formdata, setformdata] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        category: ""
    });

    const { title, image, description, price, category } = formdata;

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);

        try {
            const docRef = doc(db, "products", id);
            await updateDoc(docRef, formdata);
            console.log('Document updated successfully');
        } catch (error) {
            console.log(error);
        }
    };

    const getsingledata = async (id) => {
        try {
            const docRef = doc(db, "products", id);
            const res = await getDoc(docRef);
            if (res.exists()) {
                setformdata(res.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getsingledata(id);
    }, [id]);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '10px' }}>
            <form onSubmit={handlesubmit}>
                <input
                    name='image'
                    value={image}
                    onChange={handlechange}
                    type="text"
                    placeholder="Image"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    name='title'
                    value={title}
                    onChange={handlechange}
                    type="text"
                    placeholder="Title"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <select
                    name='category'
                    value={category}
                    onChange={handlechange}
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
                    onChange={handlechange}
                    type="text"
                    placeholder="Price"
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    name='description'
                    value={description}
                    onChange={handlechange}
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
    );
}

export default EditPage;
