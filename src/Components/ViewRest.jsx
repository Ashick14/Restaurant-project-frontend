import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';
function ViewRest() {
  // get the id of particular restaurnant
  // const pathParams=useParams()
  // console.log(pathParams.id);
  // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  // destructuring
  const {id}=useParams()
  console.log(id);
  const [restDetails,setRestDetails]=useState({})
  const fetchRestDetails=async()=>{
    const result=await axios.get(`https://restaurant-backend-mnr9.onrender.com/restaurants/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(restDetails);
  useEffect(()=>{
    fetchRestDetails()
  },[])
  return (
   
    <div>
      <Row>
        <Col>
        <img  className='m-5' height={'600px'} src={restDetails.photograph} width={"500px"} alt="" />
        </Col>
        <Col className='m-5 p-5'>
      <ListGroup  className='m-5'>
        <h1>{restDetails.name}</h1>
      <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cusine-Type: {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
      </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest