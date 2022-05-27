import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
const mapStateToProps=state=>({data:state.allProducts.products})
const ProductComponent =(props)=>{
    console.log(props.data[0]);

    const renderList = props.data.map((product)=>{
        const {id, title, image, price, category}= product;
        return(
            <div key={id}>  
                <hr/>
                
                <Link to ={`/product/${id}`}>
                    <img src={image} alt={title} width={100} height={100}/>
                </Link>
                <h3 style={{color:"blue"}}>Title: {title}</h3>
                <h2 style={{color:"red"}}>Price: {price}, Category: {category}</h2>
                <hr/>
            </div>
        )
    })
    // const {id, title}= props.data[0];
    // console.log(title);
    return(
        <div>
            <h1>ProductComponent</h1>
            <hr/>
            {renderList}
            {/* {title} */}
        </div>
    )
}
export default connect(mapStateToProps)(ProductComponent);