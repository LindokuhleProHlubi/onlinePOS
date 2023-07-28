import React, {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import  SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Cart = () => {
  
  const { loginDetailsBag, cartBag, baseUrlContext, totalCartBalanceBag }= useContext(CartContext);
  const [cart, setCart] = cartBag;
  const [totalCartBalance, setTotalCartBalance] = totalCartBalanceBag;
  const [loginDetails, setLoginDetails] = loginDetailsBag;
  const baseUrl = baseUrlContext;
  const classes = useStyles();
  const cartItems = cart;

const SubmitCart = async()=>{

  
   let data = {key:loginDetails.id, cart}
    
      data = JSON.stringify(data);
         
          const res = await axios.post(baseUrl +'receiveCart.php', data )
  .then(function (response) {
      //console.log(response.data.accBalance);

    loginDetails.balance = response.data.accBalance;
     setCart([]);
      
});
         
}

 function DeleteAllCartItems() {
   
    setCart([]);

   
}

 const totalPrice = cart.reduce((acc, curr)=> acc + parseFloat(curr.price), 0)
 setTotalCartBalance(totalPrice);
 const EmptyCart = () => (
       <Typography variant="subtitle1"> You Have No Items in your Voting Cart, 

         <Link to="/" className={classes.link}>start adding some</Link>!
       </Typography>
 );
 const FilledCart = () =>(

    <>
    	<Grid container justify = "center"  spacing={4}>

    		{cartItems.map((item) => (
    			<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
    			
    			  <CartItem item={item} />

    			</Grid>

    			
     		))}

    	</Grid>

    	<div className={classes.cardDetails} gutterBottom>
    				<Typography variant="h6" >
                     Total Amount: <b> {totalPrice.toFixed(2)}</b>
    				</Typography>
    			     <br/>
	    			
	
               </div>


                <div>
                <Button startIcon = {<DeleteIcon/>} className={classes.emptyButton} size="medium" type="button" variant="contained" color="secondary" onClick={DeleteAllCartItems}>Delete All</Button>

                <Button startIcon = {<SaveIcon/>} className={classes.checkoutButton} size="medium" type="button" variant="contained" color="primary" onClick={SubmitCart}>Submit</Button>
              </div>


    </>
 )

if(!cartItems.length) return 'Loading...';

	return(
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h6" gutterBottom><b>Your Cart Balance: {  totalCartBalance.toFixed(2)}</b>	</Typography>
             {!cartItems.length ? <EmptyCart /> : <FilledCart /> }
		
		</Container>

	)
}
export default Cart