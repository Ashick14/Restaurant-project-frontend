import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function RestCard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
         <Link  style={{textDecoration:"none"}} to={`view/${restaurants.id}`}>
         <MDBCard className='my-3 p-2'>
      <MDBCardImage style={{height:'300px'}} src={restaurants.photograph} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
          {restaurants.address}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
         </Link>
    </div>
  )
}

export default RestCard