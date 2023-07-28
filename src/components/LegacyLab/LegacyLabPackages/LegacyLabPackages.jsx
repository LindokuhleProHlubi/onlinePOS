import React, { useState, useEffect, useContext } from 'react';
import {Card,  CardContent , ListItem, List, ListItemText, Accordion, AccordionSummary, Typography, Grid, Button, MenuItem, InputAdornment } from '@material-ui/core';

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
import ClientPackages from './ClientPackages/ClientPackages';

export const LegacyLabPackages = () => {
	   
       const classes = useStyles();
       const history = useHistory();
       const { baseURL, dataReceiver } = useContext(CartContext);
       const [purposes, setPurposes] = useState([]); 
       const [organizations, setOrganizations] = useState([]);
       const [selectedPurpose, setSelectedPurpose] = useState('')
       const [selectedEnquiryPurpose, setSelectedEnquiryPurpose] = useState('');
       const [selectedOrganization, setSelectedOrganization] = useState('')
       const [clientServiceResponse, setClientServiceResponse] = useState(''); 
       const [accNumber, setAccNumber ] = useState('');
       const [benAmount, setBenAmount] = useState('');
       const [purpose, setPurpose] = useState('')
       const [nationalID, setNationalID] = useState('');
       const [clientPackageView, setClientPackageView] = useState(false);
       const [clientEnquiryView, setClientEnquiryView] = useState(false);
       const [voucherNumber, setVoucherNumber] = useState('');
       const [enquiryResponse, setEnquiryResponse]= useState([]);
       const [error, setError] = useState('');
              const [consentValue, setConsentValue] = React.useState([]);
       let selectedConsent = '';
       const consent = [{id:1, name:'Yes'},
                        {id:2,name:'No'}];


       let selectedPurposeID = '';	
       let selectedEnquiryPurposeID = '';
       let selectedOrganizationID = '';
       let enquiredUserDetailsBag = {}; 
       let userContactResponse = {};
       const [open, setOpen] = React.useState(false);
    
 

 useEffect(()=> {

   setOpen(!open);
    const res = axios.post(baseURL+'bridgeLegacyLabGetServices.php' )
  .then(function (response) {

              response = dataReceiver(response.data);         
        
       if(response){
                
                setPurposes(response);
                setOpen(false);

          }else{

                setOpen(false);

     }
             
  });
     
    getOrganization();

   }, [])

 

const getOrganization = () =>{
    
        const res = axios.post(baseURL+'bridgeLegacyLabGetOrganization.php' )
  .then(function (response) {

       
        response = dataReceiver(response.data); 

       if(response){
                

                setOrganizations(response)
        

          }else{

                setOrganizations({serviceName:'No Organization Added'})

     }
             
  });

}

const SubmitEnquiry = () =>{


};


const addClientService = async()=>{
        

        
        if(consentValue != '1'){

          alert('Please select the consent to submit.');

        }

      
        let data = {nationalID:nationalID, 
                    benAmount:benAmount, 
                    accountNumber:accNumber, 
                    organizationsID:selectedOrganization, 
                    servicesID:selectedPurpose};
                    
  //      const data = {nationalID:'9407036100115', organizationsID:'1', servicesID:'1'};
        
          data = JSON.stringify(data);

        const res = await axios.post(baseURL+'bridgeLegacyLabAddService.php', data )
            .then(function (response) {
              
               response =  dataReceiver(response.data);
                

              if(response){

                                     
              setClientServiceResponse(response);

                }else{


              setClientServiceResponse(response);
              }

                    
       });
     
   //  setClientPackageView(!clientPackageView);

   }



const findClientDetails = async()=>{
        
      
        const data = {nationalID:nationalID};
  
        const res = await axios.post(baseURL+'/getNationalIDContacts.php', data )
            .then(function (response) {

              userContactResponse = response.data;
                    
       });
     
     setClientPackageView(!clientPackageView);

   }




const goToLagacyLabEnquiry = async()=>{
        
     setClientEnquiryView(!clientEnquiryView);

   }


const handleEnquiryPurposeChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    
       setSelectedEnquiryPurpose(event.target.value);
       selectedEnquiryPurposeID = event.target.value;

}



const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    
		   setSelectedPurpose(event.target.value);
	     selectedPurposeID = event.target.value;

}



const handleOrganizationChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    
       setSelectedOrganization(event.target.value);
       selectedOrganizationID = event.target.value;

}


const fetchNationalID = async()=>{
        
      
        const data = {nationalID:nationalID};
  
        const res = await axios.post('https://www.digimagesystem.com/iCredit/api/getNationalIDContacts.php', data )
            .then(function (response) {

              userContactResponse = response.data;
                    
       });
        
   }




const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {

          setConsentValue(event.target.value);
          selectedConsent = event.target.value;
         
  
   }; 






const enquireLegacyLab = async()=>{
        
        setOpen(!open);
        setError('');     
        let data = {servicesID:selectedEnquiryPurpose,
                     nationalID:nationalID,
                     voucher:voucherNumber};

 	      data = JSON.stringify(data);


        if(!selectedEnquiryPurpose){

           setError('Service Error');
        
         }

        if(!nationalID){

           setError('ID Error');

         }
 


    const res = await axios.post(baseURL+'bridgeLegacyLabEnquiry.php', data )
            .then(function (response) {

             let responseData =  dataReceiver(response.data);
                
             
            if(responseData.error){
             

               setError(responseData.error);
              
             
              }else{

              //  if(!responseData.error){

                       //   alert('fillData');
                          console.log(responseData) 

                          setEnquiryResponse(responseData);

                          
                      
              //        }else{


             //       setError(response.data.error);

             // }
            }

          setOpen(false); 
            

               
            
          /*
           if(response.data.error === '' || response.data.error === undefined){
              if(response.data){
                  if(userContactResponse){
                      goToEnquiredDetails();
                      setOpen(false);
                  }
              }
            	}else if(response.data.error !== ''){
               //alert(response.data.error);
               setOpen(false);
           }
           */
           
       });
            
   }

const goToEnquiredDetails = () =>{
  
}

const SubmitPackage = () =>{
  
}


	return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>
            
            <Backdrop className={classes.backdrop} open={open} >
                      <Loader/>
            </Backdrop>
            
            <Grid container direction="column" className={classes.root}>
	
                  <Grid item></Grid>

                     <Grid item container spacing={2}>

                      <Grid item xs={false} sm={12} md={6} lg={6}>
                        <Card>
                                   
                         <CardContent>


                          <Grid item xs={12} align="center">
                            <Typography align="center" variant="h6">Financial Assets</Typography>
                          </Grid><hr/>      


                       <Accordion className={classes.accordion}>
                          <AccordionSummary expandIcon={<ArrowDropDownOutlinedIcon className={classes.accordionIcon} />} >
                            
                           <b>Click to Add Financial Asset</b><br/>
                             
                          </AccordionSummary> <hr/>
                          
                   <AccordionDetails>
                    

                  
                 <Typography variant="body2" gutterBottom> 
                    {!clientPackageView  ?
                    <>                     
                      <div><b> {clientServiceResponse}</b></div>
                    <br/> 
                      <Typography variant="h4" gutterBottom>
                                 <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                         onChange={(e)=>setNationalID(e.target.value)}/>

                      </Typography>

                                 
                                                
                      <Typography variant="body1" gutterBottom>                
                              <TextField label="Select Organization" variant="outlined" fullWidth size="small" select
                                  onChange={handleOrganizationChange}
                                  value={selectedOrganization}
                                  > 
                                  {organizations.map((val) => (
                                    <MenuItem key={val.id} value={val.id} >
                                       {val.organisationName}
                                   </MenuItem>
                                   ))}
                              </TextField>
                          </Typography>


                          <Typography variant="body1" gutterBottom>                
                              <TextField label="Select Service" variant="outlined" fullWidth size="small" select
                                  onChange={handlePurposeChange}
                                  value={selectedPurpose}
                                  > 

                                    {purposes.map((val) => (
                                    <MenuItem key={val.id} value={val.id} >
                                       {val.serviceName}
                                   </MenuItem>

                                   ))}
                              </TextField>
                          </Typography>


                      <Typography variant="h4" gutterBottom>
                       <TextField label="Benefit Amount" variant="outlined" type="text" fullWidth size="small"  placeholder="Benefit Amount"
                                         onChange={(e)=>setBenAmount(e.target.value)}/>

                      </Typography>    


                      <Typography variant="h4" gutterBottom>
                       <TextField label="Account Details" variant="outlined" type="text" fullWidth size="small"  placeholder="62558495401"
                                         onChange={(e)=>setAccNumber(e.target.value)}/>

                      </Typography>    

                      <Typography variant="body1" gutterBottom>
                          I hereby consent that the information provided above is correct and accurate. I also acknowledge that it is my responsibility to update this information should there be any changes to the above.
                      </Typography>

                      <Typography variant="h4" gutterBottom>                
                               <TextField label="Consent" variant="outlined"  fullWidth size="small" select
                                 onChange={handleConsentChange}
                                 value={consentValue} >

                                    {consent.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.name} 
                                   </MenuItem>
                                   ))}
                      </TextField></Typography><br></br>


                                  <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" onClick={()=>addClientService()}>
                                        <span className={classes.btnTxt} > Add Asset</span>
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



                    {/*<Accordion className={classes.accordion}>
                          <AccordionSummary expandIcon={<ArrowDropDownOutlinedIcon className={classes.accordionIcon} />} >
                            
                           <b>Click to add Financial Asset</b><br/>
                             
                          </AccordionSummary> <hr/>
                          
                   <AccordionDetails>
                    

                  
                 <Typography variant="body2" gutterBottom> 
                    {!clientPackageView  ?
                    <>                     
                      <div><b> {clientServiceResponse}</b></div>
                    <br/> 
                      <Typography variant="h4" gutterBottom>
                                 <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                         onChange={(e)=>setNationalID(e.target.value)}/>

                      </Typography>

                                 
                                                
                      <Typography variant="body1" gutterBottom>                
                              <TextField label="Select Organization" variant="outlined" fullWidth size="small" select
                                  onChange={handleOrganizationChange}
                                  value={selectedOrganization}
                                  > 
                                  {organizations.map((val) => (
                                    <MenuItem key={val.id} value={val.id} >
                                       {val.organisationName}
                                   </MenuItem>
                                   ))}
                              </TextField>
                          </Typography>


                          <Typography variant="body1" gutterBottom>                
                              <TextField label="Select Enquiry Service" variant="outlined" fullWidth size="small" select
                                  onChange={handlePurposeChange}
                                  value={selectedPurpose}
                                  > 

                                    {purposes.map((val) => (
                                    <MenuItem key={val.id} value={val.id} >
                                       {val.serviceName}
                                   </MenuItem>

                                   ))}
                              </TextField>
                          </Typography>



                                  <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" onClick={()=>addClientService()}>
                                        <span className={classes.btnTxt} > Add Service</span>
                                   </Button>

                      </> 
                                   :
                     <>              
          
                      </>
                      }
                            </Typography>
                                                       
                          </AccordionDetails>

                      </Accordion>
                       */} 
                  

                              </CardContent>
                        </Card>
                      </Grid>
           
                <Grid item xs={12} sm={12} md={6} lg={6}>
                     <Card>
                       <CardContent>

                        
                          <Typography align="center" variant="h6">Legacy Lab Enquiry</Typography>

                          <hr/>

                        <Typography variant="body1" gutterBottom>
                        <div style={{color:"red", align:"center"}}>{error}

                        </div>
                        </Typography>
                        
                {enquiryResponse ?
                        <>
                          <Typography variant="h4" gutterBottom>
                               <TextField label="National ID" variant="outlined" type="text" fullWidth size="small"  placeholder="National ID"
                                       onChange={(e)=>setNationalID(e.target.value)}/>

                          </Typography>

                          <Typography variant="h4" gutterBottom>
                                <TextField label="Voucher Number" variant="outlined" type="text" fullWidth size="small"  placeholder="Voucher"
                                    onChange={(e)=>setVoucherNumber(e.target.value)}/>

                          </Typography>

                          <Typography variant="body1" gutterBottom>                
                              <TextField label="Select Enquiry Service" variant="outlined" fullWidth size="small" select
                                  onChange={handleEnquiryPurposeChange}
                                  value={selectedEnquiryPurpose}
                                  > 

                                    {purposes.map((val) => (
                                    <MenuItem key={val.id} value={val.id} >
                                       {val.serviceName}
                                   </MenuItem>

                                   ))}
                              </TextField>
                          </Typography>
                  
                              <Button style={{backgroundColor:'#3171e0',
                                      textTransform: 'none',
                                      margin: '5px',
                                      textTransaform:'none!important',
                                      color:'white'}}
                                      type="button" variant="contained" fullWidth color="inherit" onClick={enquireLegacyLab}> 
                                      Search
                              </Button> 
                        <hr/>
                        
                        <Typography align="center" variant="h6">
                          Subscriptions
                        </Typography> <hr/>

                            <Grid container justify = "center" spacing={1}>

                                       {enquiryResponse.map((clientPackage, index)=> (

                                          <Grid item key={clientPackage.id} xs={12} sm={6} >

                                              <ClientPackages index={index} clientPackage={clientPackage} />
                              
                                        </Grid>
                                    ))}
                              </Grid>

                                                  
                       </>   

                          : 

                                <>
                                                        <Typography align="center" variant="h6">
                          Subscriptions
                        </Typography> <hr/>

                            <Grid container justify = "center" spacing={1}>

                                       {enquiryResponse.map((clientPackage, index)=> (

                                          <Grid item key={clientPackage.id} xs={12} sm={6} >
                                            
                                              <ClientPackages index={index} clientPackage={clientPackage} />
                              
                                        </Grid>
                                    ))}
                              </Grid>
                                 
                                </>
                             }
  
                    </CardContent>
                 </Card>
               </Grid>
         
               <Grid item xs={false} sm={2} md={false} lg={false}>

               </Grid>
             </Grid>

          </Grid>
 </main>
	);
}



export default LegacyLabPackages;