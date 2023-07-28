import React, {useState,useContext} from 'react';
import { Grid, Card, CardContent, Button, Typography } from '@material-ui/core';
import {CartContext} from '../../Context/CartContext'; 
import useStyles from '../Products/styles';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';



const Login = () => {

      const classes = useStyles();
      const history = useHistory();   
      const [loginDetails, setLoginDetails] = useState({});
      const [loginError, setLoginError] = useState('');
      const [loading, setLoading] = useState(false);
      const { baseURL } = useContext(CartContext);
      const [username, setUsername] = useState('');
      const [fullName, setFullName]= useState(''); 
      const user = {username, fullName}; 
      let LoginDetailsBag = [{}];

   
const goToHomePage = () => history.push({ 

      pathname: '/Dashboard',
      loginState: LoginDetailsBag
 
});


const openRegistration = () => history.push({
  
  pathname: '/Registration'

})


const goToSelfEnquiry = () => history.push({ 

      pathname: '/SelfEnquiry'

 
});


const goToClaimVoucher = () => history.push({ 

      pathname: '/voucherclaim'

 
});



const goToPurchaseVoucher = () => history.push({ 

      pathname: '/purchasevoucher'

 
});


const goToLegacyLab = () =>history.push({ 

      pathname: '/legacylabpackages'

 
});



   
if(loading){

        return  (

          <main className = {classes.spinner} style={{backgroundColor:""}}>
            <div className={classes.toolbar} />
                        <CircularProgress  />
                      
           </main>
           )
    }
 



return (
    <main className = {classes.content} style={{backgroundColor:"ghostwhite"}}>
            <div className={classes.toolbar} />

   
 <Grid container direction="column" >

                  <Grid item ></Grid>

             <Grid item container spacing={2} style={{backgroundColor:""}}>
           
{/*-------------------------------------------------------------------------
                                PAGE SIDE MENU START

                                xs={false} sm={2} md={3} lg={4}
                                           sm={3} md={3} lg={4}
-------------------------------------------------------------------------*/}  
       
             <Grid item xs={false} sm={4} md={4} lg={4}>
               <Card>
                  <CardContent>
                    
                   
                   <Grid container spacing={2}>
                              <Grid item xs={12} align="center">
                              <Typography align="center" variant="h6">User Guide</Typography>
                              </Grid>
                   </Grid>

                 {/* <Bar>I pulse</Bar> */} 


                 <Accordion style={{padding:'10px', marginTop:10}} >
                    <AccordionSummary expandIcon={<AddIcon style={{color:'blue'}} />} >
                   <span style={{color:'blue'}}> 1. Claim Voucher</span>
                    </AccordionSummary>
                    <hr/>
                  <AccordionDetails>
                    <Typography variant="body1" gutterBottom> 
                           <br/>               
                                Please note that you have 1 free voucher per year. You can claim it by clicking “Claim/Resend Voucher” and the voucher will be displayed on the screen.
                           <br/> 
                    </Typography>
                       
                  </AccordionDetails>
                </Accordion>
                <Accordion style={{padding:'10px', marginTop:'10px'}} >
                    <AccordionSummary expandIcon={<AddIcon style={{color:'blue'}} />} >
               {/* <AddTaskIcon /> */}<span style={{color:'blue'}}> 2. Self Enquiry</span>
                    </AccordionSummary>
                    <hr/>
                  <AccordionDetails>
                      <Typography variant="body1" gutterBottom> 
                          <br/>               
                            You can have access to a single view of your liabilities at the click of a button, Ts & Cs apply.
                          <br/> 
                      </Typography>
                       
                  </AccordionDetails>
                </Accordion>  
                <Accordion style={{padding:'10px', marginTop:10}} >
                    <AccordionSummary   expandIcon={<AddIcon style={{color:'blue'}} />} >
               {/* <AddTaskIcon /> */} <span style={{color:'blue'}}>3. Purchase Voucher </span>
                    </AccordionSummary>
                    <hr/>
                  <AccordionDetails>
                        <Typography variant="body1" gutterBottom> 
                          <br/>               
                           If you want to make an enquiry, you need to purchase a voucher using the “Purchase Voucher” menu. Payments are brought to you via ePayNet. For more information about ePayNet,<a href='https://salvtec.co.sz/ePayNet/'> click here</a>.  <br/> 
                        </Typography>
                       
                  </AccordionDetails>
                </Accordion>  

                  </CardContent>
                </Card>
             </Grid>
        
{/*------------------------------------------------------------------------------
                                   PAGE SIDE MENU END
----------------------------------------------------------------------------*/}     
           
{/*------------------------------------------------------------------------------
                                LOGIN FORM START
                                xs={12} sm={8} md={6} lg={4}
                                xs={12} sm={6} md={6} lg={4}
---------------------------------------------------------------------------------*/}             
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Card >
                   <Grid container spacing={2}>
                         <Grid item xs={12} align="center">
                              <p align="center" spacing={2} variant="h6" style={{backgroundColor:"white", color:"white"}}>.</p>
                         </Grid>
                   </Grid>
                               <CardContent>
                                
                                    <div style={{color:"red", align:"center"}}>{loginError}</div>
                              
    <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" onClick={()=> goToSelfEnquiry()} >iCredit Self Enquiry </Button>
                                      
    
    <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" onClick={()=> goToClaimVoucher()} > Claim/ Resend Voucher </Button>

    <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" gutterBottom onClick={()=> goToPurchaseVoucher()} > Purchase Voucher </Button>

    <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" gutterBottom onClick={()=> goToLegacyLab()} > Legacy Lab </Button>                                         


      {/*  <ReactCSSTransitionGroup
             transitionName="example"
             transitionEnterTimeout={500}
             transitionLeaveTimeout={300}>
         
         <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         type="button" variant="contained" fullWidth color="inherit" gutterBottom onClick={()=> goToPurchaseVoucher()} > EKZEMPULI </Button>

        </ReactCSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <h1>Fading at Initial Mount</h1>
        </CSSTransitionGroup>

      */}  
                                  <br></br>
                                   
      <Typography variant="body1" gutterBottom>                
                                    
        
            
      </Typography>
  </CardContent>
</Card>


                        </Grid>
{/*------------------------------------------------------------------------------
                                LOGIN FORM END
---------------------------------------------------------------------------------*/}           

              <Grid item xs={false} sm={4} md={4} lg={4} style={{backgroundColor:''}}>
                 <Card style={{backgroundColor:''}}>
                  <CardContent>
                    
                   
                   <Grid container spacing={2}>
                              <Grid item xs={12} align="center">
                              <Typography align="center" variant="h6">Making Payments On iCredit</Typography>
                              </Grid>
                              
                   </Grid>
                    <Typography variant="body1" gutterBottom> 
                          <br/>               
                            Did you know that you can now buy your iCredit voucher from the comfort of wherever via ePayNet. Simply <a href='https://play.google.com/store/apps/details?id=dig.salvtec.epaynet' target='blank'>download</a> and register on ePayNet or visit <a href='https://epaynet.salvtec.co.sz'> https://epaynet.salvtec.co.sz</a> for more information. 
                            <br/><br/><br/><p><br/><br/></p>
                        </Typography>
                        
                  
                  </CardContent>
                </Card>
                  
 {/*      <nav>
            <List>
                <ListItem disablePadding>
                  {/*<ListItemButton>*}
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  {/*</ListItemButton>*}
                </ListItem>
                <ListItem disablePadding>
                  {/*<ListItemButton>*}
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  {/*</ListItemButton>*}
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  {/*<ListItemButton>/}
                    <ListItemText primary="Trash" />
                  {/*</ListItemButton>*}
                </ListItem>
                <ListItem disablePadding>
                  {/*<ListItemButton component="a" href="#simple-list">/}
                    <ListItemText primary="Spam" />
                  {/*</ListItemButton>*}
                </ListItem>
            </List>
          </nav> 
      */}
                   </Grid>
                 </Grid>

              </Grid>
              
  </main>
            

      )
}

export default Login;