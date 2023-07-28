import React, {useState, useEffect, useContext} from 'react';
import { Grid,  TextField } from '@material-ui/core';
import Product from './Product/Product';
import Pagination from '../../components/Pagination/Pagination';
import Cart from '../../components/Cart/Cart';
import useStyles from './styles';
import axios from 'axios';
import {CartContext} from '../../Context/CartContext';
import { useHistory } from 'react-router-dom';



  function Products(){
    
   const classes = useStyles();
    const history = useHistory();
   const[products, setProducts] = useState([]);
   const[loading, setLoading] = useState(false);
   const[currentPage, setCurrentPage] = useState(1);
   const[productsPerPage, setProductsPerPage] = useState(100);
   const[search, setSearch] = useState('');
   const {loginDetailsBag, selectedLocationBag, baseUrlContext, userLastInteractionBag, selectedMusicCategoryBag }= useContext(CartContext); 
   const [selectedMusicCategoryID, setSelectedMusicCategoryID] = selectedMusicCategoryBag;
   const [loginDetails, setLoginDetails] = loginDetailsBag;
   const [selectedLocationID, setSelectedLocationID] = selectedLocationBag;
   const [userLastInteraction, setUserLastInteraction] = userLastInteractionBag;
   const[callServer, setCallServer] = useState('');
   const baseUrl = baseUrlContext;
   
    let currentState = userLastInteraction;
    if(userLastInteraction === 'musicCategory'){
     currentState = 'musicCategory'+ selectedMusicCategoryID;
    }else if(userLastInteraction === 'location'){
      currentState = 'location'+  selectedLocationID;
    }

    if(currentState !== callServer){

       setCallServer(currentState);
    }

   

   useEffect(()=> {

      const fetchProducts = async()=>{
          setLoading(true);
    let res = '';
      if(selectedMusicCategoryID !==0 && userLastInteraction === 'musicCategory'){
         res = await axios.get(baseUrl + 'bringMusicCategoryHotSongs.php?categoryID='+selectedMusicCategoryID);

         }else if(userLastInteraction === 'location'){
            res = await axios.get(baseUrl + 'bringLocationHotSongs.php?locationID='+selectedLocationID);
         }
         else
         {
            res = await axios.get(baseUrl +'bringHotSongs.php');
         }

          
          setProducts(res.data);
          setLoading(false);
      }

      fetchProducts();
      
   }, [callServer])




   // GET LOGIN DETAILS FROM THE PREVIOUS PAGE

         const checkObjType = history.location.loginState;

        if (typeof checkObjType  !== 'undefined' && Object.keys(history.location.loginState).length > 0) {
        
          setLoginDetails(history.location.loginState);
         history.push({pathname: '/songs', state: {} });
         
         
      }


   // GET CURRENT PRODUCTS

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   //Change Page
   const paginate = pageNumber => setCurrentPage(pageNumber);
   let filteredProducts = [];
   if(search != ''){

         filteredProducts = products.filter(product => {

        return product.stageName.toLowerCase().includes(search.toLowerCase());
    });
   
   }

   

   if(filteredProducts.length > 1){
        
          currentProducts =   filteredProducts;
   }



    return (
        <main className = {classes.content}>
            <div className={classes.toolbar}/>
          <Grid container justify = "center" spacing={4}>
                <Grid item container justify = "center"  xs={12} sm={12} md={6} lg={6}>
                  


                        <TextField   label=" Artist Name"   variant="filled"  fullWidth color="primary"  onChange={e => setSearch(e.target.value)} size="small" /> {filteredProducts.length} Results
                  

                    </Grid>

                </Grid> 


         <Grid container justify = "center" spacing={4}>
             {currentProducts.map((product, index)=> (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product index={index} product={product} loading={loading}/>
    
              </Grid>
          ))}
        </Grid>
        <div className={classes.toolbar}/>
        <Pagination productsPerPage={productsPerPage} totalProducts ={products.length} paginate={paginate}/>
        
    </main>
    );
   
}
export default Products;