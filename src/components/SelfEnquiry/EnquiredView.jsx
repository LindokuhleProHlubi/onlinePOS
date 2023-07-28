import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent,  Typography, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';
import useStyles from '../Products/styles';
import { CardHeader,TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from '../../Context/CartContext'; 

export const EnquiredView = ({transaction}) => {
     
       const classes = useStyles();
       const history = useHistory();
       const { baseURL } = useContext(CartContext);
      


 useEffect(()=> {
      
 
   }, [])



  return (
    <>
           

<Card >
                   <CardContent>
                               
                          <Typography variant="body2" gutterBottom>                
                            <b>{transaction.fullName}     </b>
                          </Typography>
                            <hr/> 

                             
                          <Typography variant="body2" gutterBottom>                
                            Lender Company Name:<b>{transaction.quickLoanLenderName} </b>
                          </Typography>   

                          <Typography variant="body2" gutterBottom>                
                             National ID:<b>{transaction.nationalIDTin} </b>
                          </Typography>

                          
                          <Typography variant="body2" gutterBottom>                
                             Transaction:<b>{transaction.transaction} </b>
                          </Typography>

                                                             
             </CardContent>
        </Card>

 </>
  );
}



export default EnquiredView;