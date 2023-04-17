import React from 'react'
import { useGlobleData } from '../context/Context'
import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({ele}) => {

  let {state, dispatch} = useGlobleData()
  let {cart} = state;

  return (
    <>
      {cart.length>0?(cart.map((ele)=>{
          return <>
          <div className="container pt-5">
            <div className='card p-2'>
          <div className='crd-details'>
            <img src={ele.images} style={{width:'35px', height:'35', borderRadius:'50%'}}/>
            <p>{ele.title}</p>
            <p>Rs.{ele.price}</p>
            <ButtonGroup aria-label="Basic example">
              <Button>-</Button>
              <Input style={{width:'3rem', align:'center'}} placeholder='1' />
              <Button>+</Button>
            </ButtonGroup>
            <AiFillDelete  className='delte-icon' onClick={()=>{
            dispatch({
              type: "REMOVE_CART",
              payload: ele,
            })
          }} />
            </div>
            
          </div>
          </div>
          </>})
          ):(<p>Empty</p>)}
    </>
  )
}

export default Cart