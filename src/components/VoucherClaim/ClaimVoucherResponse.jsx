import {Card,  CardContent,  Typography, Grid, Button} from '@material-ui/core';
import useStyles from '../Products/styles';	
import { useHistory } from 'react-router-dom';

export const ClaimVoucherResponse = () => {
	
       const classes = useStyles(); 
       const history = useHistory();    
       const voucherClaimDetailsBag = history.location.voucherClaimState;
       const responseStatus = voucherClaimDetailsBag.res;
       let statusValue = voucherClaimDetailsBag.voucherBalance;
     //let statusDeterminer = '';

       if(statusValue == '1'){

          statusValue = 'not used';
       
           }else{

             statusValue = 'Used';

    }


  const doneActivating = () => history.push({ 
      
      pathname: '/dashboard'

});

const purchaseVoucher = () => history.push({
  
  pathname:'/purchasevoucher'

})

	return ( 
		
      <main className = {classes.content}>
            <div className={classes.toolbar}/>   
       <Grid container direction="column">

                  <Grid item></Grid>

                     <Grid item container spacing={4}>
                        <Grid item xs={false} sm={4}/>
            
                        <Grid item xs={12} sm={4}>
                            <Card >
                                
                         <CardContent>
                            <Typography align="center" variant="body1">
                                  <h5>Voucher Details</h5>
                            </Typography><br></br>
                    
                           <Typography variant="body1" gutterBottom>                           
                             
                             <b>Response</b>: Hello, your voucher number is - <b>{voucherClaimDetailsBag.voucher}</b>.
                             <br/>
                             <b>Status</b>: Your voucher status is - <b>{statusValue}</b>. 
                             <br/>
                              Please note that you can only use it once, otherwise you will be required to purchase another voucher. 
                           </Typography>

                              <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}}
                                       type="button" variant="contained" fullWidth color="inherit" onClick={()=> doneActivating()} > Done</Button>
                              
                              <Button style={{backgroundColor:'#3171e0',
                                        textTransform: 'none',
                                        margin: '5px',
                                        textTransaform:'none!important',
                                        color:'white'}} type="button" fullWidth variant="contained" color="inherit" onClick={()=> purchaseVoucher()} > Purchase Voucher</Button>

                           </CardContent>
                         </Card>


                        </Grid>
          
                    <Grid item xs={false}  sm={4}/>
                 </Grid>

              </Grid>

  </main>
	);
}

export default ClaimVoucherResponse;