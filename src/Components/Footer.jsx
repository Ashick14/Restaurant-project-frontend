import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
        <MDBFooter  bgColor='secondary' className='text-center text-lg-start text-muted'>
    

      <div className='text-center text-black p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       <span className='text-black'>© 2023 Copyright:</span> 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          RestoCafe.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer