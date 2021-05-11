import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";

const Dashboard = ({email}) => {
    
    const nav= {flexGrow: 1}
    const toolbar= {flexGrow: 1}

    const history = useHistory() 
    
    const checkout = () => {
        history.push({
            pathname: '/checkout'
        })
    }
    return (
        <div style={nav}>
            <AppBar position="fixed">
                <Toolbar style={toolbar}>
                    <ShoppingCartIcon 
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        style = {{marginLeft: '270px', marginRight: '50px'}}
                        onClick = {checkout}
                    />

                    <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Typography type="title" color="inherit" style={{marginLeft: 0}}>
                        Welcome {email}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Dashboard