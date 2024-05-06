import React, { useEffect, useState } from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

//Material UI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

//Router
import {Link} from 'react-router-dom';

//Redux
import add from  '../Action/actions.js';
import {removeOne, remove} from '../Action/actions.js';
import {useDispatch, useSelector} from 'react-redux';


function Header(){

  const [total,setTotal]=useState(0)

  const getTotal=()=>{
    let price=0
    cart.map(product=>
    price=product.price*product.rating.count+price)

    setTotal(price)
  }

  useEffect(()=>{
    getTotal()
  })
  

  const {cart}=useSelector(state=>state.updateCart)
  const dispatch=useDispatch()

  //Material UI Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return(
    <div>
        <Navbar expand='lg' bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Link to="/" className={'text-white text-decoration-none'}>Product</Link>
            <Link to="#link" className={'text-white w-100'}>
              <Badge style={{float:"right"}} badgeContent={cart.length} color="primary">
                 <ShoppingCartIcon  onClick={handleClick}/>
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
        {

          cart.length===0?
          <div>
          Your Card Is Empty
          </div>:
          <div style={{width:'40rem'}}>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Details</th>
          <th>Remove</th>
        </tr>
      </thead>
      {
       cart.map((product,key)=>{
         return(
        <tbody>
          <tr>
          <td>{key+1}</td>
          <td><img src={product.image} style={{width:"5rem"}} alt='wait'/></td>
          <td>
             <p>{product.title}</p>
             <p>Price: ${product.price}</p>
             <p>Rating: {product.rating.rate}</p>
           <div>
            <p onClick={()=>dispatch(add(product))}>+</p>
            <p>* {product.rating.count}</p>
            <p onClick={product.rating.count===1?()=>dispatch(remove(product)):
              ()=>dispatch(removeOne(product))}>-</p>
            </div>
          </td>
          <td><DeleteIcon onClick={()=>dispatch(remove(product))} /></td>
          </tr>
        
      </tbody>

           
         )

      })

     }
       <tfoot>
           <tr>
             <div>Total: ${total}</div>
           </tr>
        </tfoot> 
    </Table>
          </div>
      }
        </MenuItem>
       </Menu>

      </div>
  );
    
}
export default Header;