import React, { useState,useContext } from 'react';
import {Card,  CardContent,  Typography, Grid, Button} from '@material-ui/core';
import useStyles from '../Products/styles';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import axios from 'axios';


export const PasswordCodeConfirmation = () => {
	
       const classes = useStyles(); 
       const history = useHistory(); 
       const { baseURL } = useContext(CartContext); 
       const { loginDetailsBag }= useContext(CartContext);
       const [ loginDetails, setLoginDetails] = loginDetailsBag;
       const [ code, setCode]=useState([]);
       const [ newPassword, setNewPassword]=useState([]);
       const [ response, setResponse ]=useState([]);
       let responseStatus = {};
       const recoveryDetailsBag = history.location.passRecoveryState;
       const recoveryContact = history.location.recoveryContactDetails; 
  
  const  submitRecoveryCode = () => {
 
       const submitAccount = async()=>{
          
             const res= await axios.get(baseURL+'bridgePasswordResetUpdate.php?newPassword='+newPassword+'&code='+ code+'&username='+recoveryContact);

            // res.data = JSON.parse(atob((res.data).slice(0,-2).split("").reverse().join("") + (res.data).slice(-2)));
            
            if(res.data.resetStatus === '200'){
                  
            
                  setResponse(res.data);
                  responseStatus = res.data;
                  goToResetStatusPage();

                }else{

                       alert(res.data.description);

            }  
      }
      
      submitAccount();
     
 }

 const goToResetStatusPage = () => history.push({ 
      
        pathname: '/passwordresetstatus',
        passresetStatusState: responseStatus

});


	return (

		
      <main className = {classes.content}>
            <div className={classes.toolbar}/>

   
  <Grid container direction="column">

               <Grid item></Grid>

                 <Grid item container spacing={4}>
                     <Grid item xs={false} sm={4}/>
            
                      <Grid item xs={12} sm={4}>
               <Card >
                                
                  <CardContent>
                  <Typography align="center" variant="body1">Use the password reset code sent via email, it will expire in 15 mins</Typography>
                      <br></br>


                                <Typography variant="h4" gutterBottom>
                                      <TextField label="Reset Code" variant="outlined" fullWidth size="small"
                                      placeholder="Code"  
                                       type="text"
                                       id="resetCode"
                                       name="resetCode"
                                       onChange={(e)=>setCode(e.target.value)}
                                                                          
                                      />
                                      </Typography>


                                <Typography variant="h4" gutterBottom>
                                      <TextField label="New Password" variant="outlined" fullWidth size="small"
                                      placeholder="New Password"  
                                       type="text"
                                       id="newPassword"
                                       name="newPassword"
                                       onChange={(e)=>setNewPassword(e.target.value)}
                                                                          
                                      />
                                      </Typography>

                  
                               <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="primary"  onClick={()=> submitRecoveryCode()} > Reset</Button>
                                 
                           </CardContent>
                         </Card>

                        </Grid>
          
                    <Grid item xs={false}  sm={4}/>
                 </Grid>

              </Grid>

  </main>

	);
}

export default PasswordCodeConfirmation;