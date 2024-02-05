import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <div>
      <MDBNavbar className='bg-primary' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <i className="fa fa-address-book fs-3 text-light mx-3" aria-hidden="true"></i> 
            <h2 className='text-light'>Sync.Me</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      </div>
        
    </div>
  )
}

export default Header