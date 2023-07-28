import React, {useContext, useState} from 'react';
import {Card, CardMedia, Button, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, ThumbUpTwoTone as LikeIcon, FavoriteBorderTwoTone as HeartIcon, ThumbDownTwoTone as DislikeIcon } from '@material-ui/icons';
import useStyles from './styles';
import {CartContext} from '../../../Context/CartContext';




const Artist = ({artist, loading, index}) => {

const classes = useStyles();
  const { loginDetailsBag, cartBag }= useContext(CartContext);
const [cart, setCart] = cartBag;
 const [loginDetails, setLoginDetails] = loginDetailsBag;
 const [tongleCartIcon, setTongleCartIcon]= useState(false);
let btnAddToCartHidden = 'F';

if(loginDetails.balance < cart.length){
  btnAddToCartHidden = 'T';

}

        if(loading){
        return <h2>Loading..</h2>
    }

   const addToCart = ()=>{

    
   

   }

    const removeFromBasket = (id)=>{
       
    setTongleCartIcon(false);

   }


    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={artist.image} title={artist.name} />
            <CardContent>
                <div className={classes.cardContent}>
              
                    <Typography variant="body1" gutterBottom>
                      <strong>  {index + 1}. {artist.stageName}</strong>
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary">
                       {artist.categoryName}
                    </Typography>

                </div>
                   
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                             
                             <HeartIcon variant="contained" color="secondary1" onClick={addToCart} align="right"/>
                           
                             
                                 {artist.totalLikes}  hearts
                    </Typography>

                     <Typography variant="body2" color="textSecondary" gutterBottom >
                      Bookings: <strong>{artist.bookingCellNumber}  </strong> <br/>
                      MoMo Acc: <strong>{artist.bookingCellNumber}  </strong> <br/>

                        </Typography>
                       


                        <Typography variant="body2" color="textSecondary" gutterBottom >
                                 Born: <strong>  {artist.dateOfBirth}  ({artist.gender})</strong> <br/>
                                  From:  <strong>{artist.townName}</strong>
                         </Typography>
                         


            </CardContent>
               
            
        </Card>
    )
}

export default Artist;
