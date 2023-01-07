import styled from "styled-components"
import Navbar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { Children, useEffect, useState } from "react"
import { popularProducts } from "../data"
import { useNavigate } from "react-router-dom";

const  Container =styled.div`
    
`;
const  Title =styled.h1`
    margin: 20px;
`;
const  FilterContainer =styled.div`
    display: flex;
    justify-content: space-between;

`;
const  Filter =styled.div`
    margin: 20px;
    ${mobile({width:"0px 24px", display:"flex", flexDirection:"column"})}
`;
const FilterText =styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`;
const Option = styled.option`
  
`;

//export const ProductList = createList();
const ProductList = () => {
 const[products] = useState(popularProducts);
  const navigate = useNavigate();
 // const cat = navigate.pathname.split("/")[2];
  const [filter,setFilters]= useState({});
  const [sort,setSort]= useState("newest");




  const handleFilters=(e)=>{
    const value= e.target.value;
    setFilters({
     ...filter,
      [e.target.name]:value,
    });

  };
   console.log()
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Shopping</Title>
        <FilterContainer>
          <Filter><FilterText>Filter Products:</FilterText>
          <Select //name="cat" onChange={handleFilters}
          >
            <Option disabled >
              Category
            </Option>
            <Option>Pet's clothing</Option>
            <Option>Food and Treats</Option>
            <Option>Toys and accesiories</Option>
          </Select>
          <Select name="type" onChange={handleFilters}>
            <Option disabled >Pet option</Option>
            <Option>Dogs and Puppies</Option>
            <Option>Cats and Kittens</Option> 
          </Select>
          </Filter>
          <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option> 
          </Select>
          </Filter>
        </FilterContainer>
        <Products //cat={cat} filter={filter} sort={sort}
        />
        {/* <ProductList.Provider 
       // value={{products}}
        >
          
        </ProductList.Provider> */}
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList;