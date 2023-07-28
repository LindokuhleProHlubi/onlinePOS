import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent, Accordion, AccordionSummary, Typography, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../../Products/styles';
import { CardHeader,TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from '../../../Context/CartContext'; 
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../../Loader/Loader';


export const LegacyLabEnquiry = () => {
	   
       const classes = useStyles();
       const history = useHistory();
       const { baseURL } = useContext(CartContext);
       const [purposes, setPurposes] = useState([]);
       const [selectedPurpose, setSelectedPurpose] = useState([])
       const [purpose, setPurpose] = useState([])
       const [nationalID, setNationalID] = useState('');
       const [clientPackageView ,setClientPackageView] = useState(false);
       const [voucherNumber, setVoucherNumber] = useState('');
       let selectedPurposeID = '';	
       let enquiredUserDetailsBag = {}; 
       let userContactResponse = {};
       const [open, setOpen] = React.useState(false);
    
 

 useEffect(()=> {



  let data = {}
    
          data = JSON.stringify(data);
          alert('helo');   
          const res = axios.post(baseURL+'getPurposes.php' )
  .then(function (response) {

      alert(response);

      console.log(response.data);
      return 0;

       if(response.data.code === '200'){
        

           
                setPurpose(response.data)
                setOpen(false);

          }else{

                setOpen(false);

     }
             
  });
     
   }, [])

 

const SubmitEnquiry = () =>{

   makeEnquiry();
 

};

const findClientDetails = async()=>{
        
      
    /*    const data = {nationalID:nationalID};
  
        const res = await axios.post(baseURL+'/getNationalIDContacts.php', data )
            .then(function (response) {

              userContactResponse = response.data;
                    
       });
     */


     setClientPackageView(!clientPackageView);

   }

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

                      <Grid item xs={false} sm={2} md={3} lg={4}>
                        <Card>
                              <CardContent>



                       <Accordion className={classes.accordion}>
                          <AccordionSummary expandIcon={<ArrowDropDownOutlinedIcon className={classes.accordionIcon} />} >
                            
                               <b>My Subscription Package</b>
                             
                          </AccordionSummary> <hr/>
                          
                   <AccordionDetails>
                    <Typography variant="body2" gutterBottom> 
                    {!clientPackageView  ?
                    <>                     
                    <span > View Packages am Subscribed to/ View my service.<br/> </span>
                    <br/> 
                      <Typography variant="h4" gutterBottom>
                                 <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                         onChange={(e)=>setNationalID(e.target.value)}/>

                      </Typography>

                             
                                    
                                    
                                   <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" >
                                        <span className={classes.btnTxt} onClick={()=>findClientDetails()}>Find</span>
                                   </Button>
                      </> 
                                   :
                     <>              
                      <Typography gutterBottom>
                                 WRITE DETAILS OF PACKAGE AND CAN ALSO HAVE ABILITY TO SEARCH FOR SERVICES IN THE SELECTED PACKAGE
                      </Typography>  

                      <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" >
                                        <span className={classes.btnTxt} onClick={()=>findClientDetails()}>View Services Registered</span>
                                   </Button>

                      <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" >
                                        <span className={classes.btnTxt} onClick={()=>findClientDetails()}>Cancel</span>
                                   </Button>             
                      </>
                      }
                            </Typography>
                                                       
                          </AccordionDetails>

                      </Accordion>

                  

                              </CardContent>
                        </Card>
                      </Grid>
           
                <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Card>
                       <CardContent>

                        <Grid item xs={12} align="center">
                          <Typography align="center" variant="h6">Packages and Services</Typography>
                        </Grid><hr/>
                        

      
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
         
               <Grid item xs={false} sm={2} md={3} lg={4}>

               </Grid>
             </Grid>

          </Grid>
 </main>
	);
}



export default LegacyLabEnquiry;