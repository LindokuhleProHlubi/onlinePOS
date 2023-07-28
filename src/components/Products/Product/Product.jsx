import React, {useContext, useState} from 'react';
import {Card, CardMedia, Button, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, Headset as PlayIcon, Person as ArtistIcon, PausePresentation as PauseIcon, ThumbUpTwoTone as LikeIcon, FavoriteBorderTwoTone as HeartIcon, ThumbDownTwoTone as DislikeIcon } from '@material-ui/icons';
import useStyles from './styles';
import {CartContext} from '../../../Context/CartContext';




const Product = ({product, loading, index}) => {

const classes = useStyles();
  const { loginDetailsBag, cartBag }= useContext(CartContext);
const [cart, setCart] = cartBag;
 const [loginDetails, setLoginDetails] = loginDetailsBag;
 const [tongleCartIcon, setTongleCartIcon]= useState(false);
let btnAddToCartHidden = 'F';
const [play, setPlay]= useState(false);

if(loginDetails.balance < cart.length){
  btnAddToCartHidden = 'T';

}

     if(loading){
        return <h2>Loading..</h2>
    }

   const addToCart = ()=>{

    const cartItem = {id:product.id, name:product.stageName, title:product.title, cellNumber:product.cellNumber, price: product.price,  image:product.image, code:product.songCode }
     setCart(curr =>[...curr, cartItem ]);
    
    setTongleCartIcon(true);

   }

    const removeFromBasket = (id)=>{

    setCart(cart.filter(item => item.id !== id));  
       
    setTongleCartIcon(false);

   }

   const showVideo = ()=>{
     setPlay(true);
   }

    const hideVideo = ()=>{
     setPlay(false);
   }


    return (
        <Card className={classes.root}>
           { play ? 
                        
                          
                      product.songHosts_id == 1 ?

                          <div className="video-responsive">
                              <iframe
                                width="100%"
                                height="100%"
                                src={product.songUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                              />
                            </div>

                          :
                          <video class="classes.media" controls autoplay name="media" width="100%"><source src={product.songUrl} type="video/mp4"></source></video>  
                         
                          :
                                    
                        <CardMedia className={classes.media} image={product.image} title={product.name} />
                       }                    
            
            <CardContent>
                <div className={classes.cardContent}>
              
                    <Typography variant="body1" gutterBottom>
                      <strong>  {index + 1}. {product.stageName}  </strong>
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary">
                       {product.categoryName}
                    </Typography>

                </div>
                   <Typography variant="body2" color="textSecondary" gutterBottom align="center">
                                 <strong>
                                       { play ?
                                          <PauseIcon onClick={hideVideo}/> 
                                          :
                                          <PlayIcon onClick={showVideo}/>
                                        }

                                      -{product.title}  ({product.songCode})
                                  </strong>

                                 

                         </Typography>
                         

                     <Typography variant="body2" color="textSecondary"  align="right" >
                       <DislikeIcon variant="contained" color="secondary1" onClick={ ()=> removeFromBasket(product.id)}/>
                        </Typography>
                       <Typography variant="body2" color="textSecondary" >

                             {

                                !tongleCartIcon ?
                                <LikeIcon variant="contained" color="primary1" onClick={addToCart} align="right"/>
                                :
                                 <HeartIcon variant="contained" color="secondary1" onClick={addToCart} align="right"/>

                             }
                         
                             
                             
                           
                             
                                 {product.likes}  votes
                             </Typography>

                               


            </CardContent>
                  <Typography  variant="body2">
                     From:  {product.townName}
                    </Typography>
            
        </Card>
    )
}

export default Product
