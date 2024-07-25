import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import Description from './Description'

const initalstate={
  title:'',
  Description:'',
  price:0,
  Image:'',
  category:''

}

function Editpage() {
  const {id}=useParams()
  const [formdata,setformdata]=useState(initalstate)


  const getsingledata=()=>{
    axios.get(` http://localhost:3000/product/${id}`,)
    .then((res)=>{
      console.log(res.data)
      setformdata(res.data)
    })
    .catch((err)=>console.log(err))
  }

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)


    fetch(`http://localhost:3000/product/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata)

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      alert("updated")
    })
    .catch((err)=>console.log(err))
  }
   const {title,price,image,category,Description}=formdata

  useEffect(()=>{
      getsingledata()
  },[])
  
 
  return (
    <>
    <h1>Edit Page</h1>
    <form onSubmit={(e)=>handlesubmit(e)}>
        <input type="text" name='image' value={image} onChange={(e)=>handlechange(e)}  placeholder='Image' /> <br />
        <input type="text" name='title' value={title} onChange={(e)=>handlechange(e)} placeholder='title' /> <br />
        <select name='category' value={category} onChange={(e)=>handlechange(e)}>
          <option value="">select your category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electorincs">electorincs</option>
          <option value="Women's clothing">Women's clothing</option>
        </select><br />
        <input type="text" name='price' value={price} onChange={(e)=>handlechange(e)} placeholder='price' /><br />
        <input type="text" name='Description' value={Description} onChange={(e)=>handlechange(e)} placeholder='description' /><br />
        <input type="submit"  />        
      </form>
       {/* <form >
        <input type="text"  placeholder='Image' /> <br />
        <input type="text" placeholder='title' /> <br />
        <select >
          <option value="">select your category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electorincs">electorincs</option>
          <option value="Women's clothing">Women's clothing</option>
        </select><br />
        <input type="text"  placeholder='price' /><br />
        <input type="text"  placeholder='description' /><br />
        <input type="submit"  />        
      </form> */}
      
      </>
  )
}

export default Editpage
