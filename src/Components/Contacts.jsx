import React, { useEffect, useState } from 'react'
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCol,
//   MDBIcon,
//   MDBBadge,
//   MDBBtn,
//   MDBRow
// } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Contacts() {

  // api fetching
  const base_url = 'http://localhost:8000'

  // state creation
  const [allContacts, setAllContacts] = useState([])

  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-contacts`)
    console.log(result.data.contacts);
    setAllContacts(result.data.contacts)
  }
  console.log(allContacts);

  const deletephn = async(id) => {
    const result = await axios.delete(`${base_url}/delete-a-contact/${id}`)
    alert(result.data.message)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>
     
        <Link to={'/add'}>
          <button className='btn btn-success m-5'><i className='fa-solid fa-user-plus'></i>Add Contacts</button>
        </Link>

      
      <div className='container'>
     <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Id</th>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Name</th>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Address</th>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Phone Number</th>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Email id</th>
          <th scope='col' style={{color:'darkblue',fontSize:'20px',fontWeight:'600'}}>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        { 
         allContacts.map((item,i)=>(
          <tr key={i}>  
            <td>{item.id}</td>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.vhv.rs/dpng/d/424-4242150_icon-vector-contact-icon-contact-person-png-transparent.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item?.name?.firstname}&nbsp;&nbsp;{item?.name?.lastname}</p>
                <p className='text-muted mb-0'>{item.phone}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item?.address?.city}, &nbsp;&nbsp;{item?.address?.street}</p>
            <p className='text-muted mb-0'>Zipcode : {item?.address?.zipcode}</p>
          </td>
          <td>
           {item.phone}
          </td>
          <td>{item.email}</td>
          <td>
            <div className='d-flex justify-content-evenly'>
              <Link to={`view/${item.id}`}>
                <i className='fa-solid fa-eye text-info'></i>
              </Link>
             
             <Link to={`edit/${item.id}`}>
             <i className='fa-solid fa-pen text-success'></i>
             </Link>
              
              <i onClick={()=>deletephn(item.id)} className='fa-solid fa-trash text-danger'></i> 
            
            </div>
          </td>
          </tr>
         )) 
      }
      </MDBTableBody>
    </MDBTable>

      {/* <div className="container">
        {
          allContacts.map((item) => (
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol xl={6} className='mb-4'>
                <MDBCard>
                  <MDBCardBody>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{item.username}</p>
                          <p className='text-muted mb-0'>{item.phone}</p>
                        </div>
                      </div>
                      <MDBBadge pill color='success' light>
                        <div className='d-flex justify-content-evenly'>
                          <Link to={`View/${item.phone}`}>
                            <i className='fa-solid fa-eye text-info'></i> 
                          </Link>

                          &nbsp;&nbsp;&nbsp;&nbsp; <i className='fa-solid fa-pen text-success'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                          <i onClick={() => deletephn(item.phone)} className='fa-solid fa-trash text-danger'></i>

                        </div>

                      </MDBBadge>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                    <MDBBtn color='link' style={{textDecoration:'none'}} rippleColor='primary' className='text-reset m-0'>
                      Message <MDBIcon fas icon='envelope' />
                    </MDBBtn>
                    <MDBBtn color='link'  style={{textDecoration:'none'}} rippleColor='primary' className='text-reset m-0'>
                      Call <MDBIcon fas icon='phone' />
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

            </MDBRow>
          ))}
      </div> */}



      </div>
      </div>
    </div>
  )
}

export default Contacts