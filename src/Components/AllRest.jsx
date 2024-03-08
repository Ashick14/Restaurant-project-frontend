import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';

function AllRest() {
  const [AllRestData,setAllRestData]=useState([])
  const fetchdata=async()=>{
    const result= await axios.get('https://restaurant-backend-mnr9.onrender.com/restaurants')
    console.log(result.data);
    setAllRestData(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestCard restaurants={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest