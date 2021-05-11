import React from 'react'
import Header from './Header'
import Products from './Products'
import Footer from './Footer'

const Dashboard = (props) => {

    return (
        <>
            <Header email = {props.location.state.email} />
            <Products />
            <Footer />
        </>
    )
}

export default Dashboard 
