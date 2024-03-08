import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
         <MDBNavbar  bgColor='secondary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
              src='https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png'
              height='40'
              alt=''
              loading='lazy'
            />
            Resto Cafe
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header