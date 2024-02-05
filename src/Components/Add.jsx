import React, { useState } from 'react'
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {

  const location = useNavigate()

  const [id,setId]=useState('')
  const [firstname,setFirstName]=useState('')
  const [lastname,setLastName]=useState('')
  const [city,setCity]=useState('')
  const [street,setStreet]=useState('')
  const [zipcode,setZipcode]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')

  const base_url='http://localhost:8000/add-a-contact'

  const addContact=async(e)=>{
  e.preventDefault()
  console.log(id,firstname,lastname,city,street,zipcode,phone,email);

  // api call to add contact details to mongodb
  const body={id,firstname,lastname,city,street,zipcode,phone,email}
  const result = await axios.post(base_url,body).then((result)=>{ 
    
    alert(result.data.message)
    location('/')
  }).catch((error)=>{
    alert("Please enter a unique Id")
  })
  console.log(result);
  

}
  return (
    <div>
      <div className="container mt-5">
        <h2 className='text-danger'>Add Contact Details</h2>
        <form>
       
        <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg'/><br/>
        <MDBInput onChange={(e)=>setFirstName(e.target.value)} label='First Name' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setLastName(e.target.value)} label='Last Name' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setCity(e.target.value)} label='City' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setStreet(e.target.value)} label='Street' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setZipcode(e.target.value)} label='Zipcode' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone Number' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email Id' id='formControlLg' type='text' size='lg' /><br />
        
        <div>
          <button onClick={(e)=>addContact(e)} className='btn btn-success m-3'><i className='fa-solid fa-user-plus'></i>&nbsp;Save changes</button>
          <MDBBtn href='/'>Back to Contacts</MDBBtn>
        </div>
        
        </form>
      </div>
    </div>
  )
}

export default Add