import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent,  Typography, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';
import useStyles from '../Products/styles';
import { CardHeader,TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from '../../Context/CartContext'; 
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../Loader/Loader';


export const LegacyLab = () => {
	   
       const classes = useStyles();
       const history = useHistory();
       const { baseURL } = useContext(CartContext);
       const [purposes, setPurposes] = useState([]);
       const [selectedPurpose, setSelectedPurpose] = useState([])
       const [purpose, setPurpose] = useState([])
       const [nationalID, setNationalID] = useState('');
       const [voucherNumber, setVoucherNumber] = useState('');
       let selectedPurposeID = '';	
       let enquiredUserDetailsBag = {};  
       let userContactResponse = {};
       const [open, setOpen] = React.useState(false);
    
 

 useEffect(()=> {

      const fetchPurposes = async()=>{

          // setOpen(!open); 
           const res = await axios.get(baseURL+'/getPurposes.php');  
           		
 		      if(res.data !== ''){
       
            setPurposes(res.data);
            setOpen(false);

              }else{

                  alert('Connection error, Please try again later.');
                  setOpen(false);
                
          }
      }
      fetchPurposes();
     
   }, [])

 

const SubmitEnquiry = () =>{

   makeEnquiry();
 

};


const goToEnquiredDetails = () => history.push({
    
        pathname: '/checkenquireddetails',
        enquiredUserState: enquiredUserDetailsBag,
        userContactState:userContactResponse

});


const SubmitPackage = () => history.push({
    
        pathname: '/legacylabpackages'

});



const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    

		   setSelectedPurpose(event.target.value);
	     selectedPurposeID = event.target.value;

   
}


const fetchNationalID = async()=>{
        
      
        const data = {nationalID:nationalID};
  
        const res = await axios.post(baseURL+'/getNationalIDContacts.php', data )
            .then(function (response) {

              userContactResponse = response.data;
                    
       });
        
   }



const makeEnquiry = async()=>{
        
        setOpen(!open);
        fetchNationalID();
     
        const data = {purposeID:selectedPurpose,
                     nationalID:nationalID,
                     voucher:voucherNumber};
 	

    const res = await axios.post(baseURL+'/selfEnquiry.php', data )
            .then(function (response) {

              enquiredUserDetailsBag = response.data;
          
           if(response.data.error === '' || response.data.error === undefined){

              if(response.data){

                  if(userContactResponse){

                      goToEnquiredDetails();
                      setOpen(false);

                  }
              }

            	
               
               }else if(response.data.error !== ''){
              
               alert(response.data.error);
               setOpen(false);

           }            
       });
            
   }



	return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>
            
            <Backdrop className={classes.backdrop} open={open} >
                      <Loader/>
            </Backdrop>
            
            <Grid container direction="column" className={classes.root}>
	
                  <Grid item></Grid>

                     <Grid item container spacing={4}>

                      <Grid item xs={false} sm={2} md={3} lg={4}/>
           
                <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Card>
                       <CardContent>

                        <CardHeader title="Enquire"  align="center"/>

                        

      
            	         	<Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" onClick={SubmitEnquiry}>Insurance Enquiry</Button>        		
				    

                                    <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" onClick={SubmitPackage}>Packages</Button>            
            

             
                    </CardContent>
                 </Card>
               </Grid>
         
               <Grid item xs={false} sm={2} md={3} lg={4}/>
             </Grid>

          </Grid>
 </main>
	);
}



export default LegacyLab;