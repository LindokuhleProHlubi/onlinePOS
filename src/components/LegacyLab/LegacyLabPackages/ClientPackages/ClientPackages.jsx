import React, {useContext, useState} from 'react';
import {Card, ListItemText, CardMedia, Button, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, Headset as PlayIcon, Person as ArtistIcon, PausePresentation as PauseIcon, ThumbUpTwoTone as LikeIcon, FavoriteBorderTwoTone as HeartIcon, ThumbDownTwoTone as DislikeIcon } from '@material-ui/icons';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStyles from '../../../Products/styles';





const ClientPackages = ({clientPackage, index}) => {

  const classes = useStyles();

  const [tongleCartIcon, setTongleCartIcon]= useState(false);
  let btnAddToCartHidden = 'F';
  const [play, setPlay]= useState(false);


    
   const addToCart = ()=>{

    const cartItem = {id:clientPackage.id, name:clientPackage.stageName, title:clientPackage.title, cellNumber:clientPackage.cellNumber, price: clientPackage.price,  image:clientPackage.image, code:clientPackage.songCode }
     
    setTongleCartIcon(true);

   }

    const removeFromBasket = (id)=>{

     // alert('delete');

   }



    return (
        <Card >
            <CardContent>

                  <Typography variant="body1">
                   Service: {clientPackage.service_id}
                  </Typography>

                  <Typography variant="body1">
                   Benefit: E{clientPackage.benefit}
                  </Typography>

                  <Typography variant="body1">
                   Account: {clientPackage.accountNumber}
                  </Typography>

                  <Typography variant="body1">
                   Subscription Date: {clientPackage.created_at}
                  </Typography>

                   
                      
                       <Button variant="outlined" onClick={ ()=> removeFromBasket(clientPackage.id)} startIcon={<DeleteForeverIcon />}>

                        Remove
                        </Button>
            </CardContent>        
            
        </Card>
    )
}

export default ClientPackages;
