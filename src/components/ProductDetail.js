import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { fetchProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { connect } from 'react-redux';
const mapStateToProps = state => ({ data: state.product });
const mapDispatchToProps = dispatch => ({
    gettingData: data => dispatch(fetchProduct(data)),
    removingData: ()=> dispatch(removeSelectedProduct())
})
const ProductDetail = (props) => {
    const { title, image, price, category, description } = props.data
    const { productId } = useParams();
    console.log(productId);
    console.log(props)
    // const fetchProductDetail = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(
    //         error => { console.log("error", error) }
    //     );
    //     props.gettingData(response.data)

    // }
    useEffect(() => {
        if (productId && productId !== "") props.gettingData(productId);
        return ()=>{
            props.removingData()
        }
    }, [productId])
    return (
        <div>
            {Object.keys(props.data).length === 0 ?(
                <div>....Loading</div>
            ):(
            <>
            <h1>ProductDetail</h1>
            <div>
                <hr />

                <img src={image} alt={title} width={300} height={300} />

                <h3 style={{ color: "blue" }}>Title: {title}</h3>
                <h2 style={{ color: "red" }}>Price: {price}</h2>
                <h2 style={{ color: "green" }}>Category: {category}</h2>
                <p>{description}</p>
                <button style={{color:"red"}}>Add to Cart</button>
                <hr />
            </div>
            </>)}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);