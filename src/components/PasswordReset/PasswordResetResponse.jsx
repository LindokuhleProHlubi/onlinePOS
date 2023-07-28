import React, {useState, useEffect, useContext} from 'react';
import { Grid,  TextField, Card, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import {CartContext} from '../../Context/CartContext';
import useStyles from '../Products/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const PasswordResetResponse = () => {


   const classes = useStyles();
   const history = useHistory();
   const [regError, setRegError] = useState('');
   const [regOTP, setRegOTP] = useState('');
   let LoginDetailsBag = [{}];
   const [password, setNewPassword]= useState('');
   const { baseURL } = useContext(CartContext);
   const passwordResetStatusesBag = history.location.passwordResetState;

 


 const goToUpdatePassword = async()=>{

 
   let registrationID = passwordResetStatusesBag.id;  
   let data = {regOTP,password,registrationID};
    
 

      data = JSON.stringify(data);

      console.log(data)
         
          const res = await axios.post(baseURL+'userCreatePassword.php', data )
  .then(function (response) {
     
      if(response.data.code === '200'){
              
              alert(response.data.description);
              goToLogin();
    
      }else if(response.data.code !== '200'){

         setRegError(response.data.description);

      }
        
       
  });
         
}


const goToLogin = () => history.push({
      
     pathname: '/'

});


const goToPasswordResetStatus = () => history.push({
      
     pathname: '/passwordreset'

});
   

    return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>

               <Grid container direction="column">

                  <Grid item></Grid>

                     <Grid item container spacing={4} >
                        <Grid item xs={false} sm={3} md={4}/>
            
                        <Grid item xs={12} sm={6} md={4}>
                <Card >
                                
                    <CardContent>
                          <div style={{color:"red", align:"center"}}>{regError}</div>
                              <CardHeader title="Password Reset Status"  align="center" />
                                  
                                <Typography variant="body2" gutterBottom>

                                  Please check the OTP on the email address your used for registering with your Lender

                                </Typography><br/>

                                   <Typography variant="h4" gutterBottom>
                                      <TextField  label="Enter Code" variant="outlined"  fullWidth size="small"  placeholder="Reset Code"
                                       id="resetCode"
                                       name="resetCode"
                                        onChange={(e)=>setRegOTP(e.target.value)}
                                      />
                                  </Typography>

                                  <Typography variant="h4" gutterBottom>
                                      <TextField  label="New Passowrd" variant="outlined"  fullWidth size="small"  placeholder="Password"
                                       id="password"
                                       name="password"
                                       value={password}
                                       onChange={(e)=>setNewPassword(e.target.value)}
                                      />
                                  </Typography>
 

                        <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       size="large" type="button" variant="contained" fullWidth onClick={()=>goToUpdatePassword()}>Update</Button>

                        <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                        size="large" type="button" variant="contained" fullWidth onClick={()=>goToPasswordResetStatus()}>Request New Pin</Button>

                                  
                           </CardContent>
                         </Card>

                        </Grid>
          
                    <Grid item xs={false} sm={3} md={4}/>
                 </Grid>

              </Grid>

  </main>
            

      )
}

export default PasswordResetResponse;