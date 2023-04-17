import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import reducer from "./Reducer";

const AppContext = createContext()

export let AppProvider = ({children}) =>
{
  let [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useReducer(reducer,
     {
        product: [],
        cart: []
      })
 const fetchchDataFromApi = async() =>{
      let resp  = await fetch('https://api.escuelajs.co/api/v1/products')
      let data = await resp.json();
      console.log(data)

      dispatch(
        {
          type:'Add-Product', 
          payload:data
        }
        )
        setIsLoading(false)
 }
 useEffect(() => {
    fetchchDataFromApi();
 }, [])
  return (<>
    <AppContext.Provider value={{state, dispatch, isLoading}}>
      {children}
    </AppContext.Provider>
  </>)
}
export let useGlobleData =() =>{
  return useContext(AppContext)
}