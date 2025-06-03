import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigeta = useNavigate();
    // const hihi = useNavigate();
    return (
        <div>
            <h1>Products pages</h1>
            <button onClick={() => navigeta("/product-detail")}>Detail 1</button>
            <button onClick={() => navigeta("/product-detail")}>Detail 2</button>
            <button onClick={() => navigeta("/product-detail")}>Detail 3</button>
        </div>
    )
}

export default Products;