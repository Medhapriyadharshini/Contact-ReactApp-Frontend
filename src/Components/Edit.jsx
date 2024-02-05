// import React, { useEffect, useState } from 'react'
// import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function Edit() {
//   const base_url="http://localhost:8000"

//   const [cid,setId]=useState('')
//   const [cfirstname,setFirstName]=useState('')
//   const [clastname,setLastName]=useState('')
//   const [ccity,setCity]=useState('')
//   const [cstreet,setStreet]=useState('')
//   const [czipcode,setZipcode]=useState('')
//   const [cphone,setPhone]=useState('')
//   const [cemail,setEmail]=useState('')


//   // id from url
//   const {id}=useParams()
//   console.log(id);

//   const getAncontact=async(id)=>{
//     const result=await axios.get(`${base_url}/get-a-contact/${id}`)
//     console.log(result.data.contact);


//   setId(result.data.contact.id)
//   setFirstName(result.data.contact.id)
//   setLastName(result.data.contact.id)
//   setCity(result.data.contact.id)
//   setStreet(result.data.contact.id)
//   setZipcode(result.data.contact.id)
//   setPhone(result.data.contact.id)
//   setEmail(result.data.contact.id)
//   }

//   useEffect(()=>{
//     getAncontact(id)
//   },[])

//   // api call to update
// const updateContact=async(e)=>{
//   e.preventDefault()
//   const body={
//     id:cid,
//     firstname:cfirstname,
//     lastname:clastname,
//     city:ccity,
//     street:cstreet,
//     zipcode:czipcode,
//     phone:cphone,
//     email:cemail
//   }
  
//   const result=await axios.post(`${base_url}/edit-a-contact/${id}`,body)
//   console.log(result.dats.contact);
  

// }


//   return (
//     <div>
//        <div className="container mt-5">
//         <h2 className='text-danger'>Add Contact Details</h2>
//         <form>
       
//         <MDBInput onChange={(e)=>setId(e.target.value)} value={cid} label='Id' id='formControlLg' type='text' size='lg'/><br/>
//         <MDBInput onChange={(e)=>setFirstName(e.target.value)} value={cfirstname} label='First Name' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setLastName(e.target.value)} value={clastname} label='Last Name' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setCity(e.target.value)} value={ccity} label='City' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setStreet(e.target.value)} value={cstreet} label='Street' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setZipcode(e.target.value)} value={czipcode} label='Zipcode' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setPhone(e.target.value)} value={cphone} label='Phone Number' id='formControlLg' type='text' size='lg' /><br />
//         <MDBInput onChange={(e)=>setEmail(e.target.value)} value={cemail} label='Email Id' id='formControlLg' type='text' size='lg' /><br />
        
//         <div>
//           <button onClick={(e)=>updateContact(e)} className='btn btn-success m-3'><i className='fa-solid fa-user-plus'></i>&nbsp;Add contact</button>
//           <MDBBtn href='/'>Back to Contacts</MDBBtn>
//         </div>
        
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Edit