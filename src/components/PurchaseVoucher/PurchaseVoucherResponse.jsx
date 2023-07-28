import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent,  Typography, IconButton, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';

import useStyles from '../Products/styles';
import { CardHeader,TextField } from '@material-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';
import EnquiredView from './EnquiredView';
import {CartContext} from '../../Context/CartContext'; 


export const EnquiryResponseStatus = () => {
	   

       const classes = useStyles();
       const history = useHistory();
      
    
  const goToHome = () => history.push({
    
        pathname: '/dashboard'

});

  



	return (
    <main className = {classes.content}> 
            <div className={classes.toolbar}/>

       <Grid container direction="column" className={classes.root}>
	
            <Grid item></Grid>

                <Grid item container spacing={4}>

                  <Grid item xs={false} sm={2} md={3} lg={4}/>
                      <Grid item xs={12} sm={8} md={6} lg={4} >
                            
                              <Card >
                               <CardContent>

                                <CardHeader title="Enquiry Response"  align="center" />

                                  <Typography variant="body2" gutterBottom>
                                     <b>Status</b>:
                                      
                                  </Typography>

                                    <br/>
           

              <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" onClick={goToHome}>Done</Button>    


             
                    </CardContent>
               </Card>
                          
                        </Grid>
                    <Grid item xs={false} sm={2} md={3} lg={4}/>
                 </Grid>
              </Grid>

 </main>
	);
}

export default EnquiryResponseStatus;