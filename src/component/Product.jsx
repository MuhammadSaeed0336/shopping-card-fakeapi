import React from 'react'
import { Card } from 'react-bootstrap'
import { useGlobleData } from '../context/Context'

const Product = (props) => {
 let {ele} = props

 let {state, dispatch} = useGlobleData()
 let {cart} = state;

  return (
    <>
            <Card style={{ width: '250px' }} className='shadow'>
              <Card.Img variant="top" src={ele.images} />
              <Card.Body>
              <Card.Title>{ele.price}</Card.Title>
              <Card.Text>{ele.title}</Card.Text>
              
              {cart.some((item)=>item.id===ele.id)?(
              <button className='btn btn-danger px-4'
              onClick={()=>{
                dispatch({
                  type: "REMOVE_CART",
                  payload: ele,
                })
              }}>Remove From Cart</button>
              ) : (
              <button className='btn btn-primary px-5'
              onClick={()=>{
                dispatch({
                  type: "ADD_CART",
                  payload: ele,
                })
              }}>Add To Cart</button>)}
              </Card.Body>
              </Card>
    </>
  )
}

export default Product