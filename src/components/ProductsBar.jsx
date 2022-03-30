import React from 'react'
import styled from "styled-components"


const OptionsDiv = styled.div`
    width: 85%;
    margin-left:9%;
    height: 30px;
    background-color: white;
    border-bottom: 1px solid #c7c1c1;
    display: flex;
    p{
    padding-right: 25px;
    padding-left:2px;
    margin-top: 0;
    font-weight: 600;
    }
    p:hover{
        text-decoration: underline;
    }
`
// 'Products', 'Rooms', 'New at IKEA', 'All offers'
const ProductsBar = () => {
  return (
    <OptionsDiv>
        <p>Products</p>
        <p>Rooms</p>
        <p>New at IKEA</p>
        <p>All offers</p>
    </OptionsDiv>
  )
}

export default ProductsBar