import React, { useEffect, useContext, useState } from 'react';
import {Card, CardContent, Typography, Grid, Button, MenuItem, IconButton} from '@material-ui/core';
import useStyles from '../Products/styles'; 
import { useHistory } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import { CardHeader,TextField } from '@material-ui/core';
import {CartContext} from '../../Context/CartContext';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../Loader/Loader';



export const PurchaseVoucher = () => {
  
       const classes = useStyles(); 
       const history = useHistory();
       const { baseURL } = useContext(CartContext); 
       const [ emailAddress, setEmailaddress]= useState('');
       const [ nationalID, setNationalID]= useState('');
       const [ cellnumber, setCellnumber]= useState('');
       const [ amount, setAmount]= useState('');
       const [reference, setReference] = useState('');
       const [getGatewayPage, setGetGatewayPage] = useState(false);
       const [slugURL, setSlugURL] = useState('');
       const [selectedPlatform, setSelectedPlatform] = useState([]);
       const [open, setOpen] = React.useState(false); 
       const [error, setError] = useState('');
       let selectedPurposeID = ''; 
       let selectedConsent = '';



const iFrameStyle = {

      fontSize: '15px',
      textAlign: 'center',
      backgroundColor: 'white',
      width:'100%',
      height:'600px'

};
 

useEffect(()=> {
  
      setAmount('45.00');
    //  setOpen(!open);
      setSelectedPlatform();
      const fetchBanks = async()=>{
          
          const res = await axios.get(baseURL+'bridgeMomoToBankPaymentPlatform.php?hittingPageID=M2ATM');
            setOpen(false);  
        //  res.data = JSON.parse(atob((res.data).slice(0,-2).split("").reverse().join("") + (res.data).slice(-2)));

      }

    //  fetchBanks();
     
   }, [])



const  getPaymentPage = () => {
        
   
if(reference !== ''){
        
    setOpen(!open);

    let slugURL = 'https://www.epaynetsz.com/ePayNetCart/gt00001.php?c=35323531&2c=3130&3c=38&tb=0.01&tn='+reference;

    setSlugURL(slugURL);
    setGetGatewayPage(true);
    //  submitTransaction(); 

    setTimeout(() => {

            setOpen(false); 


    }, 5000);

}else{

  
  setError('Invalid National ID');

}
  
    
        
}


const submitTransaction = () => {
        

  setOpen(!open);    


 const submitVoucherPayment = async()=>{
      

   setTimeout(() => {

            setOpen(false); 


    }, 5000);


        const res = await axios.get('https://www.epaynetsz.com/ePayNetCart/gt00001.php?c=35323531&2c=3130&3c=38&tb=0.45&tn='+reference);
                


      



        // res.data = JSON.parse(atob((res.data).slice(0,-2).split("").reverse().join("") + (res.data).slice(-2)));
            
         console.log(res.data); 
         setOpen(false);  
          
            

      }
      
      submitVoucherPayment();
     
 

   
    
        
}

const closePaymentPage = () => {
    
    setReference('');
    setGetGatewayPage(false);

}


 return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>



              <Grid container direction="column" className={classes.root}>
                  <Backdrop className={classes.backdrop} open={open} >
                                         <Loader/>
                  </Backdrop>

                  <Grid item></Grid>

                     <Grid item container spacing={4}>
               
                      <Grid item xs={false} sm={2} md={3} lg={4}/>
                        
                          <Grid item xs={12} sm={8} md={6} lg={4}>
                            <div style={{color:"red", align:"center"}}>{error}</div>

                          { !getGatewayPage ?
                            <Card >
                               <CardContent>

                                <CardHeader title="Purchase Voucher"  align="center" />

                                  <Typography variant="h4" gutterBottom>
                                      <TextField value={amount} disabled variant="outlined" type="label" fullWidth size="small"  
                                      
                                         
                                      />
                                      {/* onChange={(e)=>setNationalID(e.target.value)}*/}
                                  </Typography>

                                  
                                  <Typography variant="h4" gutterBottom>
                                      <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                       onChange={(e)=>setReference(e.target.value)}
                                         
                                      />
                                  </Typography>


                               

                          <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" onClick={getPaymentPage}>Submit</Button>    


             
                    </CardContent>
               </Card>


                :


                <div style={iFrameStyle}>

                  

                   <IconButton  variant="contained" color="inherit" onClick={closePaymentPage}><CancelIcon style={{color:'red',align:'right', marginLeft:'0px' }} /> Close</IconButton>

                              <iframe
                                width="100%"
                                height="100%"
                                src= {slugURL}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                              />                  

                </div>


               }


            </Grid>
         
            <Grid item xs={false} sm={2} md={3} lg={4}/>
          </Grid>
       </Grid>
    </main>

  );

  }

export default PurchaseVoucher;