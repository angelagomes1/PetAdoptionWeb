import  styled  from "styled-components"
import { popularProducts } from "../data"
import { useState, useEffect} from "react"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({cat,filter,sort}) => {
  const [productinfo, setProductinfo] = useState([]);
  console.log(cat,filter,sort)
  const {product,setProduct}= useState([]);
  const [data,setData]= useState([]);
  const [oldFilter, setOldFilter]= useState([]);
  
const fetchData=()=>{
  fetch("http://localhost:5000/api/products")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
   console.log("-------", data);
   setProductinfo(data);
  })
}
useEffect(()=>{
  fetchData();
  setOldFilter(filter);
},[productinfo == null || oldFilter !== filter])

console.log("productinfo:", productinfo);
  return (
    <Container>
        {productinfo.map((item, index)=>(
            <Product item={item} key ={item._id}/>
        ))}
    </Container>
  )
}

export default Products