import React from 'react'
import { useGlobleData } from '../context/Context'
import "./Home.css";
import Product from './Product';

const Home = () => {
  let {state,isLoading} = useGlobleData()
  let {products} = state;
 
  return (
    <> 
    <div className="container">
    <div className="row gap-2 pt-4">
      {isLoading ? (<p>Please wait Loading...</p>):(
        products.map((ele)=>{
          return(<>
            <Product ele={ele} key={ele.id} />
          </>)
        })
      )}
      </div>
    </div>
    </>
  )
}

export default Home