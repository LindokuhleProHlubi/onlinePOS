import React, {useState, useEffect, useContext} from 'react';
import {Drawer as MUIDrawer, ListItem, List, ListItemIcon, ListItemText} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockIcon from '@material-ui/icons/Lock';
import RegistrationIcon  from '@material-ui/icons/Person';
import ArtistIcon  from '@material-ui/icons/Person';
import FolderOpenIcon  from '@material-ui/icons/FolderOpen';
import MusicNoteIcon  from '@material-ui/icons/MusicNote';
import CreditCardIcon  from '@material-ui/icons/CreditCard';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link , useLocation } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from '../../Context/CartContext';



const Drawer = ({open, setOpen, handleDrawer}) =>{
    const { selectedMusicCategoryBag, baseUrlContext, selectedLocationBag, userLastInteractionBag, loginDetailsBag }= useContext(CartContext); 
  const location = useLocation();
  const [selectedMusicCategoryID, setSelectedMusicCategoryID] = selectedMusicCategoryBag;
  const [selectedLocationID, setSelectedLocationID] = selectedLocationBag;
   const [userLastInteraction, setUserLastInteraction] = userLastInteractionBag;
   const baseUrl = baseUrlContext;

  const [loginDetails, setLoginDetails] = loginDetailsBag;


  function LogOut(){
   setLoginDetails({});

  }

		
		   let [musicCategories, setMusicCategories] = useState([]);

		   let [locations, setLocations] = useState([]);

		   useEffect(()=> {

		      const MusicCategories = async()=>{
		          
		          const res = await axios.get(baseUrl +'bringMusicCategories.php');
		          setMusicCategories(res.data);
		      }

		    //  MusicCategories();

              const Locations = async()=>{
		          
		          const res = await axios.get(baseUrl +'bringLocations.php');
		          setLocations(res.data);
		      }

		  //    Locations();

		      
		   }, [])

		   const selectedMusicCategory = (id)=>{
                          
               setSelectedMusicCategoryID(id);
               setUserLastInteraction('musicCategory');
  
           }


           const selectedLocation = (id)=>{
                          
               setSelectedLocationID(id);
               setUserLastInteraction('location');
  
           }
let itemsList = [   
				
				{/* text: 'Register', icon: <RegistrationIcon />, onClick: '/registration'*/},
				{ text: 'Login', icon: <FolderOpenIcon />, onClick: '/login'}	
				
	        ]; 
           

 if(loginDetails.code == '200' ){

  let itemsList = [   
				
				{/* text: 'Register', icon: <RegistrationIcon />, onClick: '/registration'*/},
				{ text: 'Login', icon: <FolderOpenIcon />, onClick: '/login'}	
				
	        ]; 
	    }

let logOutItemList = [   
				{ text: 'Log Out', icon: <LockIcon />, onClick: '/login', customFunction:LogOut}	
				
	        ]; 

		  
 if(loginDetails.rights_id === '3'){

 let balance = loginDetails.balance;
		
 itemsList =[
             { text:'Home', icon: <HomeIcon />, onClick: '/songs', customFunction:()=> selectedMusicCategory(0)},
	         { text:balance, icon: < AttachMoneyIcon/>, onClick: '/songs', customFunction: ''},
		     { text:'Votes cart', icon: <ShoppingCartIcon />, onClick: '/cart', customFunction: ''},
			 { text:'Buy Voucher', icon: <CreditCardIcon />, onClick: '/buyVoucher', customFunction: ''},	
	    ]; 


	    }


	    if(loginDetails.rights_id !== '3'){
	       musicCategories =[{}];
	        locations =[{}]

	    }







	return (

		<MUIDrawer anchor="left" open= {open} onClose={() => setOpen(false)}>
		  
				<List>

		          {itemsList.map((item, index) => {

		           const { text, icon, onClick, customFunction } = item; 
		           return ( 
				            <ListItem button key={text} component={ Link } to={onClick}  onClick={customFunction} >
				             {icon &&  <ListItemIcon>{icon}</ListItemIcon> }
				              <ListItemText primary={text} />
				            </ListItem>

                 );

		          })}
	        </List>



	        <List>

              <ListItem button key='hotSongs' component={ Link } onClick={ ()=> selectedMusicCategory(0)}  to='/songs'>
				            { loginDetails.id > 0 ?  <><MusicNoteIcon/>  <ListItemText  primary="Hot Songs" /> </> : <h6></h6>

				            }
				         </ListItem>


		          {musicCategories.map((item, index) => {

		           const { id, image, categoryName } = item; 
		           return ( 
				            <ListItem button key={id} component={ Link } onClick={ ()=> selectedMusicCategory(item.id)}  to='/songs'>
				            { item.id > 0 ?  <MusicNoteIcon/>  : <h6></h6>

				            }
				            

				              <ListItemText  primary={categoryName} />

				            </ListItem>

                 );

		          })}

		          
	        </List>



	         <List>


		          {locations.map((item, index) => {

		           const { id, townName } = item; 
		           return ( 
				            <ListItem button key={id} component={ Link } onClick={ ()=> selectedLocation(item.id)}  to='/songs'>
				            { item.id > 0 ?  <MusicNoteIcon/>  : <h6></h6>

				            }
				            

				              <ListItemText  primary={townName} />

				            </ListItem>

                 );

		          })}

		          
	        </List>




	         <List>
                <ListItem button key='hotArtists' component={ Link } onClick={ ()=> selectedMusicCategory(0)}  to='/artists'>
				            { loginDetails.id > 0 ?  <><ArtistIcon/>  <ListItemText  primary="Hot Artists" /> </> : <h6></h6>

				            }
				         </ListItem>

                   

		          {musicCategories.map((item, index) => {

		           const { id, image, categoryName } = item; 
		           return ( 
				            <ListItem button key={id + 'artist'} component={ Link } onClick={ ()=> selectedMusicCategory(item.id)}  to='/artists'>
				            { item.id > 0 ?  <ArtistIcon/>  : <h6></h6>

				            }
				            

				              <ListItemText  primary={categoryName} />

				            </ListItem>

                 );

		          })}

		          
	        </List>



           { loginDetails.rights_id === '3' ?

              <List>

		          {logOutItemList.map((item, index) => {

		           const { text, icon, onClick, customFunction } = item; 
		           return ( 
				            <ListItem button key={text} component={ Link } to={onClick}  onClick={customFunction} >
				             {icon &&  <ListItemIcon>{icon}</ListItemIcon> }
				              <ListItemText primary={text} />

				            </ListItem>

                 );

		          })}
	        </List>

	        :
	        <h1></h1>

              

           }

	       
     
		</MUIDrawer>

	);
}

export default Drawer;