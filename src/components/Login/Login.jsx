import React, {useState, useEffect, useContext} from 'react';
import { Grid,  TextField, Card, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import Pagination from '../../components/Pagination/Pagination';
import Cart from '../../components/Cart/Cart';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import {CartContext} from '../../Context/CartContext';
import useStyles from '../Products/styles';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Loader from '../Loader/Loader';


 const Login = () => {

    const classes = useStyles();
    const history = useHistory();
    const { baseUrlContext, dataReceiver }= useContext(CartContext);
    const [loginDetails, setLoginDetails] = useState({});
    const { baseURL } = useContext(CartContext);
    const [loginError, setLoginError] = useState('');
    let LoginDetailsBag = [{}];
    const [username, setUsername] = useState('');
    const [fullName, setFullName]= useState(''); 
    const user = {username, fullName};
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);



    const goToHomePage = () => history.push({
      
      pathname: '/dashboard',
      loginState: LoginDetailsBag

});



const createPassword = () => history.push({
      
     pathname: '/passwordreset'

});


const hitLoginApi = async()=>{
          
 
          setOpen(!open);  
  let data = {username:username, password:fullName}
    
          data = JSON.stringify(data);
        
          const res = await axios.post(baseURL+'bridgeLogin.php', data )
  .then(function (response) {

         
       let responseData =  dataReceiver(response.data);
        
       if(responseData.code === '200'){
                     
                setLoginDetails(response.data);
                LoginDetailsBag = response.data ;  
                goToHomePage();
                setOpen(false);

          }else{

                 setOpen(false);
                 setLoginError(responseData.description);

     }
             
  });
         
}
   

const  handleSubmit = () => {

     hitLoginApi();

    
}

   if(loading){

        return  (
          
           <Loader/>
         
           )
    }

  

    return (
    <main className = {classes.content}>
            <div className={classes.toolbar}/>

            <Backdrop className={classes.backdrop} open={open} >
                       <Loader/>
            </Backdrop>


            <Grid container direction="column">
                  <Grid item></Grid>

                     <Grid item container spacing={4}>
                        <Grid item xs={false} sm={3} lg={4}/>
            
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card >
                                
                               <CardContent>
                                    <div style={{color:"red", align:"center"}}>{loginError}</div>
                                  <CardHeader title="Login"  align="center" />
                                  
                                     <Typography variant="h4" gutterBottom>
                                      <TextField label="National ID" variant="outlined"  fullWidth size="small"  placeholder="Identity Number"
                                       id="username"
                                       name="username"
                                       value={username}
                                       onChange={(e)=>setUsername(e.target.value)}
                                        
                                      />
                                      </Typography>




                                <Typography variant="h4" gutterBottom>
                                      <TextField label="Password" variant="outlined"  fullWidth size="small"  
                                        type="password"
                                       id="fullName"
                                       name="fullName"
                                       value={fullName}
                                       onChange={(e)=>setFullName(e.target.value)}
                                        
                                      />
                                      </Typography>


                                      {/*style ={{backgroundColor:'primary', 
                                    color:"white",
                                    fontStyle: 'bold'
                                  }} 

                                    type="button" variant="contained" fullWidth color="inherit"

                                     <Button className={classes.checkoutButton} size="large" type="button" variant="contained" fullWidth  onClick={()=>handleSubmit()}>Submit</Button>
                                  */}

                        <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                         size="large"  type="button" variant="contained" fullWidth color="inherit" onClick={()=>handleSubmit()}>Login
                        </Button>

                        <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}} size="large"  type="button" variant="contained" fullWidth color="inherit" onClick={()=>createPassword()}>New to iCredit? Create Password
                        </Button>


                              <Typography variant="body1" gutterBottom>                
                                                            
                                <Button component={Link} to="/passwordreset" className={classes.buttonTxt}> Forgot Password?</Button>
                                    
                              </Typography>



                                  
                           </CardContent>
                         </Card>


                        </Grid>
          
                    <Grid item xs={false}  sm={3} md={4} lg={4}/>
                 </Grid>

              </Grid>




  </main>
            

      )
}

export default Login;