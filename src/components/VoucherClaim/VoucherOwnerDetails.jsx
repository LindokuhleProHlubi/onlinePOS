import React, { useEffect, useContext, useState } from 'react';
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core';
import useStyles from '../Products/styles'; 
import { useHistory } from 'react-router-dom';
import { CardHeader,TextField } from '@material-ui/core';
import {CartContext} from '../../Context/CartContext';
import axios from 'axios';


export const VoucherOwnerDetails = () => {
  
       const classes = useStyles(); 
       const history = useHistory();
       const { baseURL, dataReceiver } = useContext(CartContext); 
       const [ emailAddress, setEmailaddress]= useState('');
       const [ nationalID, setNationalID]= useState('');
       const [ cellNumber, setCellnumber]= useState('');
       const [ amount, setAmount]= useState('');
       let selectedConsent = '';
       const [open, setOpen ] = React.useState(false); 


 
const updateAccount = () => {
    
  let nationalID = '';
  let cellNumber = '';
  let momoAccount = '';
  let email = '';

    const submitAccount = async()=>{
          
const res= await axios.get(baseURL+'bridgeConfirmVoucherEmailAddress.php?nationalID='+nationalID+'&cellNumber='+cellNumber+'&momoAccount='+cellNumber+'&email='+emailAddress);

            
          let responseData = dataReceiver(res.data);

            
            if(responseData.resetStatus === '200'){
                  
                       alert(responseData);

                        }else{

                       alert(responseData.res);

            }  
      }
      
      submitAccount();

}



 return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>

       <Grid container direction="column" className={classes.root}>
  
                  <Grid item></Grid>

                     <Grid item container spacing={4}>

                      <Grid item xs={false} sm={2} md={3} lg={4}/>
                        
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Card >
                               <CardContent>

                                <CardHeader title="Update Contact Details"  align="center" />
          
                                  <Typography variant="h4" gutterBottom>
                                      <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                       onChange={(e)=>setNationalID(e.target.value)}
                                         
                                      />
                                  </Typography>


                                  <Typography variant="h4" gutterBottom>
                                      <TextField label="Cell Number" variant="outlined" type="text" fullWidth size="small"  placeholder="Cellnumber"
                                       onChange={(e)=>setCellnumber(e.target.value)}
                                         
                                      />
                                  </Typography>

                                  <Typography variant="h4" gutterBottom>{/*disabled*/}
                                      <TextField label="MoMo Account"  variant="outlined" type="text" fullWidth size="small" placeholder="MoMo Contact" 
                                      
                                         
                                      />
                                      {/* onChange={(e)=>setNationalID(e.target.value)}*/}
                                  </Typography>

                                  <Typography variant="h4" gutterBottom>
                                      <TextField label="Email" variant="outlined" type="text" fullWidth size="small"  placeholder="iCredit@gmail.com"
                                       onChange={(e)=>setEmailaddress(e.target.value)}
                                         
                                      />
                                  </Typography>

           
                <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}} type="button" variant="contained" fullWidth color="inherit"   onClick={updateAccount}>Submit</Button>            
             

      </CardContent>
 </Card>


                        </Grid>
         
                    <Grid item xs={false} sm={2} md={3} lg={4}/>
                 </Grid>

              </Grid>

 </main>
  );

  }

export default VoucherOwnerDetails;