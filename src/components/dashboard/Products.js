import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {connect} from 'react-redux'
import {getItems, removeItem, addItemToCart} from '../../actions/itemsActions'

const Products = ({item: {items, loading}, getItems, removeItem, addItemToCart}) => {

    const mainDiv = {background: 'black', marginTop: '60px'}

    const card = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }

    const cardMedia = {
        paddingTop: '56.25%', // 16:9
    }

    const cardContent = {
        margin: '2px',
        flexGrow: 1,
    }
    
    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            {!loading && items && items.length !==0 && (

            <div style = {mainDiv}>
                <Container maxWidth="md">
                    <Grid container spacing={4}>
                    
                    {!loading && items && items.length !==0 && items.map((item, index) => (
                        <Grid item key={item} xs={12} sm={6} md={4}>
                        <Card style={card}>
                            <CardMedia
                                style={cardMedia}
                                image={item.image}
                                title="Image title"
                            />
                            <CardContent style={cardContent}>
                                <Typography gutterBottom variant="h4" component="h2">
                                    {item.name}
                                </Typography>
                            </CardContent>

                            <CardContent style={cardContent}>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>

                            <CardContent style={cardContent}>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Price : {item.price}
                                </Typography>
                            </CardContent>

                            <CardContent style={cardContent}>
                                <Typography>
                                    Quantity : {item.quantity}
                                </Typography>
                            </CardContent>
        
                            <CardActions>
                                <Button variant="contained" color="primary" onClick = {() => addItemToCart(item.id)}>
                                    Add
                                </Button>
                                <Button variant="contained" color="secondary" onClick = {() => removeItem(item.id)}>
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container> 
            </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({ 
    item: state.item
}) 

export default connect(mapStateToProps, {getItems, removeItem, addItemToCart})(Products)
