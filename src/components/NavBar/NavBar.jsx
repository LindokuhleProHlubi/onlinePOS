import React, {useContext, useState, useEffect} from 'react';
import { AppBar, Toolbar, IconButton,  Badge,  Typography} from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import {CartContext} from '../../Context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import Drawer from '../../components/Drawer/Drawer';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AndroidIcon from '@material-ui/icons/Android';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import EmailIcon from '@material-ui/icons/Email';


function goToTop(){

   window.scrollTo(0, 0); 

}

const NavBar = () => {

    const classes = useStyles();
    const history = useHistory();
    const { baseURL } = useContext(CartContext);    
    const { cartBag } = useContext(CartContext);
    const { loginDetailsBag }= useContext(CartContext);
    const { userIdentityBag }= useContext(CartContext);
    const [userIdentity, setUserIdentity ] = userIdentityBag;
    const [cart, setCart] = cartBag;
    const location = useLocation();
    const [open, setOpen] = useState(false);   
    const [loginDetails, setLoginDetails] = loginDetailsBag;
    let enquiryResponseBag = {};

    const handleDrawer = () => {
        setOpen(true);
     }


useEffect(() => {

  // goToToP();

  window.scrollTo(0, 0); 

  
}, []);

  
  const goToEnquiryEmailStatus = () => history.push({
    
        pathname: '/enquiryresponsestatus',
        enquiryResponseState:enquiryResponseBag

});

  
  


const requestEmailedEnquiryDetails = async()=>{
        
     const data = {data:userIdentity};

    const res = await axios.post(baseURL+'/selfEnquiryPdf.php', data )
            .then(function (response) {

           // console.log(response.data);
            goToEnquiryEmailStatus();

           /*   enquiryResponseBag = response.data;
          
           if(response.data.error === '' || response.data.error === undefined){
              goToEnquiredDetails();
              setOpen(false);
              }else if(response.data.error !== ''){              
              alert(response.data.error);
              setOpen(false);
           }   
           */

           setOpen(false);

       });
            
   }




 const logOut = () =>{

  setLoginDetails({});

 }



    return (
        <>
        <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:'steelblue'}}>
            <Toolbar >
                
                { location.pathname ==='/' && location.pathname ==='/dashboard' && (
                <div className={classes.btnCard}>
                      <IconButton color="inherit" edge="start" aria-label="menu" onClick={handleDrawer}>
                                  <Menu />
                      </IconButton>
                </div>)} 


                  { location.pathname ==='/dashboard' && (
                <div className={classes.btnCard}>
                      <IconButton color="inherit" edge="start" aria-label="menu" onClick={handleDrawer}>
                                  <Menu />
                      </IconButton>
                </div>)} 



           


              { location.pathname ==='/passwordreset' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}


              { location.pathname ==='/enquiryresponsestatus' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}


              { location.pathname ==='/legacylabpackages' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

              
               { location.pathname ==='/SelfEnquiry' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

              { location.pathname ==='/voucherclaim' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

               { location.pathname ==='/purchasevoucher' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

               { location.pathname ==='/checkenquireddetails' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/SelfEnquiry" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

              { location.pathname ==='/claimvoucherresponse' &&  (
                <div className={classes.btnCard}>

                    <IconButton component={ Link } to="/dashboard" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

               { location.pathname ==='/passwordresetresponse' &&  (
                <div className={classes.btnCard}>

                <IconButton component={ Link } to="/passwordreset" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}
              
              
              { location.pathname ==='/voucherownerdetails' &&  (
                <div className={classes.btnCard}>

                <IconButton component={ Link } to="/voucherclaim" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <ArrowBackIcon/>
                        </Badge>
                    </IconButton>
              </div>)}

              

              { location.pathname ==='/' && (
                <div className={classes.button}>
                     <IconButton color="inherit" edge="start" aria-label="menu" onClick={handleDrawer}>
                        <Menu />
                     </IconButton>
                </div>

              )}

              
           <Drawer setOpen={setOpen} open={open} handleDrawer={handleDrawer}  />
              
                <Typography variant="h6" className={classes.title} color="inherit">
                                   
                     iCredit 
                  
                </Typography>
               

                <div className={classes.grow}/>

                      
            { location.pathname ==='/dashboard'  && (
                <div className={classes.button}>

                <IconButton component={ Link } to="/" onClick={()=>logOut()} aria-label="Logout" className={classes.powerIcon} style={{color:'red'}}>
                        
                            <PowerSettingsNewIcon/>
                       
                    </IconButton>
          
                </div>
                     )}

             { location.pathname ==='/voucherclaim' && (
                <div className={classes.button} xs={false}>
       
                  <IconButton component={ Link } to="voucherownerdetails" onClick={()=>logOut()} className={classes.powerIcon} >
                              
                    <AccountCircleIcon style={{color:'white'}}/><span style={{color:'white'}}> Update Account</span> 
                             
                  </IconButton>
              
                </div>
            )}          

            { location.pathname ==='/schooldetails'  && (
                <div className={classes.button}>

                <IconButton component={ Link } to="/addrecipient" >
                        
                        <span style={{color:'white', fontSize:'small'}}>   Add New </span><AddIcon style={{color:'white'}}/>
                       
                    </IconButton>
          
                </div>
                     )}


             { location.pathname ==='/givedetails'  && (
                <div className={classes.button}>

                <IconButton component={ Link } to="/addrecipient" >
                        
                        <span style={{color:'white', fontSize:'small'}}>   Add New </span><AddIcon style={{color:'white'}}/>
                       
                    </IconButton>
          
                </div>
                     )}
                     

            { location.pathname ==='/utilitydetails'  && (
                <div className={classes.button}>

                <IconButton component={ Link } to="/addrecipient" >
                        
                        <span style={{color:'white', fontSize:'small'}}>   Add New </span><AddIcon style={{color:'white'}}/>
                       
                    </IconButton>
          
                </div>
            )}
            {/* component={ Link } to="" */}

            { location.pathname ==='/legacylabpackages'  && (
                <div className={classes.button} href="" target="_blank">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfTA7UkZsfmTQJ9kEc2lIKNqQi1fU04XU1aJmA5GZ70n04SA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" target="_blank">
                <IconButton>
                        
                        <span style={{color:'white', fontSize:'small'}}>   Add New </span><AddIcon style={{color:'white'}}/>
                       
                    </IconButton>
                 </a>
                </div>
            )}


            { location.pathname ==='/debts'  && (
                <div className={classes.button}>

                   <IconButton component={ Link } to="/addinvoicecredits" >
                        <span style={{color:'white', fontSize:'small'}}>  
                            Add Credit <AddIcon style={{color:'white'}}/>
                        </span>                       
                    </IconButton>
          
                </div>
              )}

              { location.pathname ==='/invoicestatus'  && (
                <div className={classes.button}>

                   <IconButton component={ Link } to="/addinvoicecredits" >
                        
                        <span style={{color:'white', fontSize:'small'}}>  
                            Add Credit <AddIcon style={{color:'white'}}/>
                        </span>
                       
                    </IconButton>
          
                </div>
              )} 


           { location.pathname ==='/invoicing'  && (
                <div className={classes.button}>

                   <IconButton component={ Link } to="/addinvoicecredits" >
                        
                        <span style={{color:'white', fontSize:'small'}}>  
                            Add Credit <AddIcon style={{color:'white'}}/>
                        </span>
                       
                    </IconButton>
          
                </div>
              )}              


           { location.pathname ==='/checkenquireddetails'  && (
                <div className={classes.button}>

                <IconButton onClick={()=>requestEmailedEnquiryDetails()}   >
                            
                      <span style={{color:'white', fontSize:'small'}}>
                               Send <EmailIcon style={{color:'white'}}/> 
                      </span>
                                
                </IconButton>
          
                </div>
                     )}                                     

            </Toolbar>
               </AppBar>
            
        </>
    )
}

export default NavBar

