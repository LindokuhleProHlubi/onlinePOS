import React, {useState, useEffect, useContext} from 'react';
import { Grid,  TextField, Card, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Gender from '@material-ui/icons/Wc';
import CallIcon from '@material-ui/icons/SettingsPhone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import {CartContext} from '../../Context/CartContext';

import useStyles from '../Products/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
const classes = useStyles();
const history = useHistory();


   const [regError, setRegError] = useState('');
   let LoginDetailsBag = [{}];
 
const [fullName, setFullName] = useState('');
const [cellNumber, setCellNumber]= useState('');
const [email, setEmail]= useState('');
const [password, setPassword]= useState('');
const [confirmPassword, setConfirmPassword]= useState('');
 const { baseUrlContext }= useContext(CartContext);
 const baseUrl = baseUrlContext;

 const goToLoginPage = () => history.push({
     pathname: '/login',
      loginState: 'Succesful registered'
});



const HitRegistrationApi = async()=>{

   let data = {fullName, cellNumber, email, password}
    
      data = JSON.stringify(data);
         
          const res = await axios.post(baseUrl +'receiveRegistration.php', data )
  .then(function (response) {
     
      if(response.data.code === '200'){
             goToLoginPage();
      }else{

         setRegError(response.data.description);
      }
        
       
  });
         
}
   

const  handleSubmit = () => {

     HitRegistrationApi();
}

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
                                    <div style={{color:"red", align:"center"}}>{regError}</div>
                                  <CardHeader title="Registration"  align="center" />
                                  
                                     <Typography variant="h4" gutterBottom>
                                      <TextField label="Email" variant="outlined"  fullWidth size="small"  placeholder=" example@gmail.com"
                                       id="email"
                                       name="email"
                                       value={email}
                                       onChange={(e)=>setEmail(e.target.value)}
                                        
                                      />
                                      </Typography>


                                    <Typography variant="h4" gutterBottom>
                                      <TextField  label="Full Name" variant="outlined"  fullWidth size="small"  placeholder="John Doe"
                                       id="fullName"
                                       
                                       name="fullName"
                                       value={fullName}
                                       onChange={(e)=>setFullName(e.target.value)}
                                         
                                      />
                                      </Typography>



                                      <Typography variant="h4" gutterBottom>
                                      <TextField label="Cell Number" variant="outlined"  fullWidth size="small"  placeholder="76000000"
                                       id="cellNumber"
                                       name="cellNumber"
                                       value={cellNumber}
                                       onChange={(e)=>setCellNumber(e.target.value)}
                                        
                                      />
                                      </Typography>




                                <Typography variant="h4" gutterBottom>
                                      <TextField label="Password" variant="outlined"  fullWidth size="small"  
                                        type="password"
                                       id="password"
                                       name="password"
                                       value={password}
                                       onChange={(e)=>setPassword(e.target.value)}
                                        
                                      />
                                      </Typography>


                                    <Typography variant="h4" gutterBottom>
                                      <TextField label="Confirm Password" variant="outlined"  fullWidth size="small"  
                                        type="password"
                                       id="confirmPassword"
                                       name="confirmPassword"
                                       value={confirmPassword}
                                       onChange={(e)=>setConfirmPassword(e.target.value)}
                                        
                                      />
                                      </Typography>


                                  <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         size="large" type="button" variant="contained" fullWidth  onClick={()=>handleSubmit()}>Submit</Button>



                                  
                           </CardContent>
                         </Card>


                        </Grid>
          
                    <Grid item xs={false}  sm={4}/>
                 </Grid>

              </Grid>




  </main>
            

      )
}

export default Registration;