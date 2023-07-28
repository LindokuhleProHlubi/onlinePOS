import React, {useState, useEffect, useContext} from 'react';
import { Grid,  TextField, Card, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import {CartContext} from '../../Context/CartContext';
import useStyles from '../Products/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../Loader/Loader';

const PasswordReset = () => {


   const classes = useStyles();
   const history = useHistory();
   const [regError, setRegError] = useState('');
   let passwordResetStatusesBag = {};
   const { baseURL } = useContext(CartContext);
   const [open, setOpen] = React.useState(false);
   const [nationalID, setNationalID] = useState('');
   const [cellNumber, setCellNumber]= useState('');


const resetPassword = async()=>{
   

      setOpen(!open); 
      let data = {nationalID: nationalID, cellNumber: cellNumber};
      data = JSON.stringify(data);
         
    const res = await axios.post(baseURL+'bridgeIsUserAvailableForRegistration.php', data )
  .then(function (response) {
      
      passwordResetStatusesBag = response.data; 
      
      if(response.data.code === '200'){
              

             goToPasswordResetStatus();
             setOpen(false);
    
      }else{

         setRegError(response.data.description);
         setOpen(false)
      }
        
  });
         
}
   

const  handleSubmit = () => {

     resetPassword();
   //    goToPasswordResetStatus();

}


const goToPasswordResetStatus = () => history.push({
      
     pathname: '/passwordresetresponse',
     passwordResetState: passwordResetStatusesBag

});

  return (
    
    <main className = {classes.content}>
            <div className={classes.toolbar}/>

             <Backdrop className={classes.backdrop} open={open} >
                                         <Loader/>
             </Backdrop>


              <Grid container direction="column">

                  <Grid item></Grid>

                     <Grid item container spacing={4}>
                        <Grid item xs={false} sm={3} md={4}/>
            
                        <Grid item xs={12} sm={6} md={4}>
                      <Card >
                                
                       <CardContent>
                          <div style={{color:"red", align:"center"}}>{regError}</div>
                              <CardHeader title="Authentication"  align="center" />
                                    
                                 <Typography variant="h4" gutterBottom>
                                      <TextField  label="National ID" variant="outlined"  fullWidth size="small"  placeholder="Nationa ID number"
                                       id="nationalID"
                                       name="nationalID"
                                       value={nationalID}
                                       onChange={(e)=>setNationalID(e.target.value)}

                                      />
                                  </Typography>

                                 <Typography variant="h4" gutterBottom>
                                      <TextField label="Cell Number" variant="outlined"  fullWidth size="small"  placeholder="Cell Number"
                                       id="cellNumber"
                                       name="cellNumber"
                                       value={cellNumber}
                                       onChange={(e)=>setCellNumber(e.target.value)}
                                       />
                                  </Typography>                                 
                                 

                        <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         size="large" type="button" variant="contained" fullWidth onClick={()=>handleSubmit()}>Submit</Button>

                                  
                           </CardContent>
                         </Card>

                        </Grid>
          
                    <Grid item xs={false} sm={3} md={4}/>
                 </Grid>
              </Grid>

  </main>
            

      )
}

export default PasswordReset;