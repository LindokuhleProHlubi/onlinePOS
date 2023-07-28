import React, {useContext} from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './styles';
import {CartContext} from '../../../Context/CartContext';

const CartItem = ({item}) => {
 const { cartBag }= useContext(CartContext);
const [cart, setCart] = cartBag;

function DeleteCartItem(id) {

   setCart(cart.filter(item => item.id !== id));  
   alert('Item successful removed!');	
   
}


 const classes = useStyles();
	
	return (
		<Card >
			<CardMedia image = {item.image} alt={item.name} className={classes.media}/>
			<CardContent className={classes.cardContent}>
				<Typography variant="body1"> <strong>{item.name}</strong></Typography>
				<Typography variant="body2"> <strong>{item.price}</strong></Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				
                  <DeleteForeverIcon onClick={ ()=> DeleteCartItem(item.id)} justify="right" />

						<Typography variant="body2" >
		                     <strong> -{item.title} ({item.code})</strong>
						</Typography>
					
			</CardActions>
		</Card>
	)
}
export default CartItem