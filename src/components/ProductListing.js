import React, {useEffect} from "react";
import {connect} from 'react-redux';
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import {setProducts,fetchProducts} from '../redux/actions/productActions'
const mapStateToProps= state=>({data:state});
const mapDispatchToProps =dispatch=>({
    //settingData:data=>dispatch(setProducts(data)),
    fetchingData: ()=>dispatch(fetchProducts())
})

const ProductListing =(props)=>{
    console.log(props)
    // const fetchProducts = async () =>{
    //     const response =await axios.get("https://fakestoreapi.com/products").catch(
    //         error=>{console.log("Error",error)}
    //     )
    //     console.log(response.data);
    //     props.settingData(response.data);
    // }
    useEffect(()=>{
        props.fetchingData();
    },[])
    console.log("Products: " ,props.data)
    return(
        <div>
            <ProductComponent/>
            
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);