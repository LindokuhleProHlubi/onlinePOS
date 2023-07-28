import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent,  Typography, IconButton, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';

import useStyles from '../Products/styles';
import { CardHeader,TextField } from '@material-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';
import EnquiredView from './EnquiredView';
import {CartContext} from '../../Context/CartContext'; 


export const CheckEnquiredDetails = () => {
	   

       const classes = useStyles();
       const history = useHistory();
       const [enquiredUserData, setEnquiredUserData] = useState([]);
       const enquiredUserDetailsBag = history.location.enquiredUserState;
       
       const userContactResponse = history.location.userContactState;
       

       const { userIdentityBag }= useContext(CartContext);
       const [userIdentity, setUserIdentity ] = userIdentityBag;
       let email = '';

     
      if(typeof enquiredUserDetailsBag !== 'undefined' && Object.keys(history.location.enquiredUserState).length > 0) {
                
              email = userContactResponse[0].email;    
                    
      }
 



  function emailMasking(email) { 

     let masking = "";
     let replace = "*";

     for(let i = 0; i < email.length-2; i++){ 

        masking = masking + replace; 

      }
        email = masking + email.substring(email.length+2, email.length);
        return email;
}


 useEffect(()=> {


     emailMasking(email); 

 

     let userId = enquiredUserDetailsBag[0];
        
     let users_id = userId.nationalIDTin 
    
     let data = {email:email,nationalID:users_id}

     setUserIdentity(data);
     setEnquiredUserData(enquiredUserDetailsBag);
    
   }, [setEnquiredUserData])


	return (
    <main className = {classes.content}> 
            <div className={classes.toolbar}/>

       <Grid container direction="column" className={classes.root}>
	
            <Grid item></Grid>

                <Grid item container spacing={4}>

                  <Grid item xs={false} sm={2} md={3} lg={4}/>
                      <Grid item xs={12} sm={8} md={6} lg={4} >
                            
                        <CardHeader title="Enquired User Data"  align="center" />
                          <br/>
                          
                          <p style={{size:'small'}}>Please note that your report will be forwarded to <b>{email}</b>. If you do not have access to this email address, please <IconButton size='small' component={ Link } to="/voucherownerdetails">click here</IconButton> to update.</p>


                        {enquiredUserData.map((transaction)=> (
                          <Grid item  key={transaction.id}> 
                                
                              <EnquiredView transaction={transaction} />
                              <br/>
                          </Grid>
                        ))} 
                          
                        </Grid>
                    <Grid item xs={false} sm={2} md={3} lg={4}/>
                 </Grid>
              </Grid>

 </main>
	);
}

export default CheckEnquiredDetails;