import React from 'react';
import {Products, NavBar, Footer, Pagination, Cart, EnquiryResponseStatus, CartItem, Login, Dashboard, LegacyLab, LegacyLabPackages, LegacyLabEnquiry, Registration, Artists , SelfEnquiry, VoucherClaim, ClaimVoucherResponse, CheckEnquiredDetails, VoucherOwnerDetails, PurchaseVoucher, PasswordReset, PasswordResetResponse} from './components';
import {CartProvider} from './Context/CartContext';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './components/Products/styles';

const App = () => {

	const classes = useStyles();


    return ( 

    	<Router basename="/">
	    	<CartProvider>
		        <div className={classes.mainWrapper}>
		            <NavBar />
		             <Switch> 
		                    <Route exact path = "/">
		             		   <Login />
		             		</Route> 
		             		<Route exact path = "/songs">
		             		   <Products />
		             		</Route>

		             		<Route exact path = "/cart">
		             			 <Cart/>
		             		</Route> 

		             		<Route exact path = "/login">
		             		   <Login />
		             		</Route>


		             		<Route exact path = "/legacylab">
		             		   <LegacyLab />
		             		</Route>


  	             		    <Route exact path = "/legacylabpackages">
		             		   <LegacyLabPackages />
		             		</Route>


		             		<Route exact path = "/legacylabenquiry">
		             		   <LegacyLabEnquiry />
		             		</Route>

		             		
		             		<Route exact path = "/dashboard">
		             		   <Dashboard />
		             		</Route>

		             		<Route exact path = "/selfenquiry">
		             			 <SelfEnquiry/>
		             		</Route>


		             		

		             		
		             		<Route exact path = "/voucherclaim">
		             			 <VoucherClaim/>
		             		</Route>
	                	    
		             		<Route exact path = "/claimvoucherresponse">
		             			 <ClaimVoucherResponse/>
		             		</Route>

		             		<Route exact path = "/checkenquireddetails">
		             			 <CheckEnquiredDetails/>
		             		</Route>

		             		<Route exact path = "/enquiryresponsestatus">
		             			 <EnquiryResponseStatus/>
		             		</Route>

		             		<Route exact path = "/voucherownerdetails">
		             			 <VoucherOwnerDetails/>
		             		</Route>

		             		<Route exact path = "/purchasevoucher">
		             			 <PurchaseVoucher/>
		             		</Route>

		             		<Route exact path = "/passwordreset">
		             		   <PasswordReset />
		             		</Route>


		             		<Route exact path = "/passwordresetresponse">
		             		   <PasswordResetResponse />
		             		</Route>
 		
		             		<Route exact path = "/registration">
		             		   <Registration />
		             		</Route>

		             		<Route exact path = "/artists">
		             		   <Artists />
		             		</Route>

		             		<Route exact path="/*">
							    <Login />
							</Route>
			               
		            </Switch>
		            
		        </div>
		        <Footer />
	        </CartProvider>
	    </Router>
    ) 
}

export default App