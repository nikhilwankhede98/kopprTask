import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'

const Checkout = ({item: {cartItems}}) => {

    let value = 0
    
    cartItems.map(x => (
        value = value + x.price * x.quantity
    ))
    return (
        <div>
            <Container  maxWidth="md">
                <h5>Products Added To Cart : </h5>
                {cartItems.map(x => (
                    <p>
                        {x.name}
                    </p>          
                ))}

                <h5>Total Amount : </h5>
                <p>{value}</p>
                
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({ 
    item: state.item
}) 

export default connect(mapStateToProps, {})(Checkout)




