
import { useState, useEffect } from "react";
import { product  } from "../../app/models/product";
import ProductList from "./ProductList";


const apilink="http://localhost:5000/api/";

export default function Catalog(){
    const[products,setProducts]=useState<product[]>([

    ])

    //get data from api
    useEffect(()=>{
      fetch(apilink+'ProductsControllers') //api link
      .then(Response=>Response.json()) // phrase to json
      .then(data => setProducts(data)) // fil data to array
  },[])
    return(
        <>
        <h1>Catalog :</h1>
        <ProductList products={products} />
       
      </>
    )
}


