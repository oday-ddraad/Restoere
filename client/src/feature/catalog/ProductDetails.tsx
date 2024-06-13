import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../app/models/product";


const apilink="http://localhost:5000/api/";
export default function ProductDetails(){
    const {id}=useParams<{id: string}>();
    const [product,setProduct]=useState<product | null>(null);
    const [loading,setLoading]= useState(true);


useEffect(()=>{
axios.get(apilink+`ProductsControllers/${id}`)
.then(Response => setProduct(Response.data))
.catch(error => console.log(error))
.finally(()=> setLoading(false))

},[id])

 if(loading) return <h3>loading ....</h3>
 if (!product) return <h3> Product not Found !!</h3>
 

    return (
        <Typography variant='h2'>
               
                {product.name}
        </Typography>
    )
} 