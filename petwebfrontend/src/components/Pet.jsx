import { useEffect, useState } from "react"
import  styled  from "styled-components"
import { petSample } from "../data"
import Pets from "./Pets"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Pet = (cat,filter,sort) => {
  const [petsinfo, setPetinfo] = useState([]);
  console.log(cat,filter,sort)
  const {product,setProduct}= useState([]);
  const [data,setData]= useState([]);
  const [oldFilter, setOldFilter]= useState([]);
  
const fetchData=()=>{
  fetch("http://localhost:5000/api/adoption")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
   console.log("-------", data);
   setPetinfo(data);
  })
}
useEffect(()=>{
  fetchData();
  setOldFilter(filter);
},[petsinfo == null || oldFilter !== filter])

console.log("petinfo:", petsinfo);
  return (
    <Container>
        {petsinfo.map(item=>(
            <Pets item={item}key ={item._id}/>
        ))}
    </Container>
  )
}

export default Pet