import React from 'react'
import {Navbar, Container, FormControl, Dropdown, Nav, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import { useGlobleData } from '../context/Context';
import "./Header.css";

const Header = () =>{
  let {state, dispatch} = useGlobleData();
  let {cart} = state
  return (
    <>
    <Navbar bg='dark'>
      <Container>
        <Navbar.Brand variant='dark' >
          <Link to='/' className='text-light text-decoration-none'>E-Shopping</Link></Navbar.Brand>
        <Navbar.Text style={{width:'500px',}} className='m-auto'>
          <FormControl placeholder='Search' />
        </Navbar.Text>

        <Nav>
        <Dropdown className=''>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FaShoppingCart className='mx-1'/> 
      <Badge className='bg-success'>{cart.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu className='dpm' align='end'>
        {cart.length>0?(cart.map((ele)=>{
          return <>
          <div className='crd-details'>
            <img src={ele.images} />
            <p>{ele.tile}</p>
            <p>Rs.{ele.price}</p>
            <AiFillDelete  className='delte-icon' onClick={()=>{
            dispatch({
              type: "REMOVE_CART",
              payload: ele,
            })
          }}/>
          </div>
          </>})
          ):(<p>Empty</p>)}
          <Link className='btn btn-primary gotobtn mx-3 mt-0 mb-2' to='/cart'>Go to cart</Link>

    </Dropdown.Menu>
    </Dropdown>
      </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header