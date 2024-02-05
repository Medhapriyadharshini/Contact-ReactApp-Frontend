import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function View() {

  // api fetching
  const base_url = 'http://localhost:8000'

  const [contactid, setContactid] = useState([])

  const {id}=useParams()
  console.log(id);
  // get a contact details
  const getContact=async(id)=>{
    const result = await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.message);
    setContactid(result.data.message)
  }
console.log(contactid);
  useEffect(()=>{
    getContact(id)
  },[])

  return (
    <div>
      <div className="container d-flex justify-content-center m-5">
      <MDBCard style={{ maxWidth: '650px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage style={{height:'370px',width:'500px'}} src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className='text-primary fs-2'>Contact Details</MDBCardTitle>
            <MDBListGroup style={{ minWidth: '10rem' }} light>
            <MDBListGroupItem noBorders>Id :</MDBListGroupItem>
      <MDBListGroupItem noBorders>Full Name :</MDBListGroupItem>
      <MDBListGroupItem noBorders>Address :</MDBListGroupItem>
      <MDBListGroupItem noBorders>Phone Number :</MDBListGroupItem>
      <MDBListGroupItem noBorders>Email Id :</MDBListGroupItem> 
    </MDBListGroup>     
          </MDBCardBody>  
        </MDBCol>
      </MDBRow> 
    </MDBCard>
   <div>
   <MDBBtn href='/'>Back to Home</MDBBtn>
   </div>
      </div>
    </div>
  )
}

export default View