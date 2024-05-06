import React, { useEffect, useState } from "react";

//axios
import axios from 'axios';

//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//Reducer 
import { useSelector, useDispatch } from "react-redux";
import add from '../Action/actions.js';

//Material UI
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";


function Product(){

  const {cart}=useSelector(state=>state.updateCart)
  const dispatch=useDispatch()
  console.log(cart);

  const navigate=useNavigate()

  const send=(list)=>{
    dispatch(add(list))

  }
     
    const [data,setData]=useState([])
    
    useEffect(()=>{
       axios.get("https://fakestoreapi.com/products")
       .then((res)=>{
        console.log(res.data)
        setData(res.data)
        
       }) 
    },[])
  
    const detpage=(value)=>{
      console.log(value)
         navigate(`/detailpage`,{state:value})
    }


    return(
       <div className="container">
        <div className="ms-5 md-5 row d-flex gap-5 container">
           {
             data && data.map(list=>(
                <Card  key={list.id} style={{ width: '19rem'}}>
                <Card.Img variant="top" src={list.image} style={{ width:'100%', height:'10rem', marginTop:"10px" }}  />
                <Card.Body>
                   <ListGroup variant="flush">
                     <ListGroup.Item>{list.title}</ListGroup.Item>
                     <ListGroup.Item>Price: ${list.price}</ListGroup.Item>
                     <ListGroup.Item>Rating: {list.rating.rate}</ListGroup.Item>
                     <ListGroup.Item>
                       <Button variant="secondary" onClick={()=>send(list)}>Add to Cart</Button>
                       <Button variant="secondary" style={{marginLeft:"15px"}}><VisibilityIcon onClick={()=>detpage(list)} /></Button>
                     </ListGroup.Item>
                   </ListGroup>
                </Card.Body>
              </Card>
             ))
           }
        </div>
      </div>
    );
}
export default Product;
