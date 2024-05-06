import React from 'react';
import { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import axios from 'axios';

//React-Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function DetailPage(){

   const [photos,setPhotos]=useState([])
   const location=useLocation()

   useEffect(()=>{
  

   axios.get("https://fakestoreapi.com/products")
       .then((res)=>{
        console.log(res.data)
        setPhotos(res.data)
        
       }) 
   },[])

   const params=useParams()
   const list=photos.find((e)=>e.id=== parseInt(params.id))
   console.log(list);


    return(
        <div className='detail-backimg'>
          
          <h1 style={{textAlign:'center'}}>welcome to detail page</h1>

          <Card style={{backgroundColor:"pink",textAlign:'center',margin:'auto' }}>
      <Card.Img variant="top" src={location?.state?.image} style={{width:'25%', height:'13rem',margin:'auto'}} />
      <Card.Body>
        <Card.Title>{location?.state?.title}</Card.Title>
        <Card.Text> Your beauty radiates from within </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item style={{backgroundColor:'pink'}}>Price: ${location?.state?.price}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'pink'}}>Rating: {location?.state?.rating.rate}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'pink'}}>Your appearance is truly captivating</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'pink'}}>Description: {location?.state?.description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.meesho.com/" style={{textDecoration:'none',color:'black'}}>Card Link</Card.Link>
      </Card.Body>
    </Card>
        </div>
    )
}
export default DetailPage;