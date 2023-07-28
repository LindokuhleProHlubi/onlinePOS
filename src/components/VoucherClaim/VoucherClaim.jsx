import React, { useState,useContext } from 'react';
import {Card,  CardContent,  Typography, Grid, Button} from '@material-ui/core';
import useStyles from '../Products/styles';	
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../Loader/Loader';

export const VoucherClaim = () => {
	
       const classes = useStyles(); 
       const history = useHistory();   
       const { baseURL, dataReceiver } = useContext(CartContext); 
       const { loginDetailsBag } = useContext(CartContext);
       const [ loginDetails, setLoginDetails] = loginDetailsBag;
       const [ voucherContact, setVoucherContact] = useState([]);
       const [ voucherNationalID, setVoucherNationalID ] = useState([]);          
       let voucherClaimDetailsBag = {};
       const [open, setOpen] = React.useState(false);
  

const submitRecoveryAccount = () => {
      
     setOpen(!open);

    const submitAccount = async()=>{
          
      const res = await axios.get(baseURL+'/bridgeClaimVoucher.php?nationalID='+voucherNationalID+'&cellNumber='+voucherContact);
              

           let claimResponse =  dataReceiver(res.data);

            if(claimResponse !== ''){

              voucherClaimDetailsBag = claimResponse;
              goToClaimResponse(claimResponse);
               setOpen(false);
      
              }else if(res.data === ''){

                alert('You have provided invalid data');
                 setOpen(false);
             }  
       }
      
      submitAccount();
     
 }

const goToClaimResponse = () => history.push({
       
        pathname: '/claimvoucherresponse',
        voucherClaimState: voucherClaimDetailsBag

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
                     <Grid item xs={false} sm={2} md={3} lg={4}/>
            
                      <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card>              
                 <CardContent>
                  <Typography align="center" variant="h6">Claim Voucher</Typography><br></br>

                        <Typography variant="h4" gutterBottom>
                             <TextField label="Cell Number" variant="outlined" fullWidth size="small"
                                 placeholder="Contact" type="text" id="voucherContact" name="voucherContact"
                                       onChange={(e)=>setVoucherContact(e.target.value)}
                                                                          
                                      />
                                      </Typography>

                                <Typography variant="h4" gutterBottom>
                                      <TextField label="National ID Number" variant="outlined" fullWidth size="small"
                                      placeholder="National ID" type="text"
                                       id="voucherContact" name="voucherContact"
                                       onChange={(e)=>setVoucherNationalID(e.target.value)}
                                                                          
                                      />
                                      </Typography>


                                <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}} type="button" variant="contained" fullWidth color="primary"  onClick={()=> submitRecoveryAccount()} > Submit
                                    </Button>
                                 
                           </CardContent>
                         </Card>
                        </Grid>
                    <Grid item xs={false} sm={2} md={3} lg={4}/>
                 </Grid>
              </Grid>
  </main>

	);
}

export default VoucherClaim;