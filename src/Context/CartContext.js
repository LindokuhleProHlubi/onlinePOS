import React, {useState} from 'react';

export const CartContext = React.createContext();
export const CartProvider = (props)=>{

    const [cart, setCart]=useState([]);
    const [userIdentity, setUserIdentity ]=useState('');
    const [cartItem, setCartItem]=useState([]);
    const [selectedMusicCategoryID, setSelectedMusicCategoryID]=useState(0);
    const [selectedLocationID, setSelectedLocationID]=useState(0);
    const [totalCartBalance, setTotalCartBalance]=useState(0.00);
    const [loginDetails, setLoginDetails] = useState({});
    const [userLastInteraction, setUserLastInteraction] = useState('');
    //const myBase = 'http://localhost/icredit/api';
    const myBase = 'https://icredit.salvtec.com/bridge00001/';


    const hashData = function(givenData){
         
          var res = eval(process.env.REACT_APP_INTER_ALGO.split('').reverse().join('')); 
          return res;    
        
       }









 return (
       <CartContext.Provider value={{

		       cartBag: [cart, setCart],
		       userIdentityBag: [userIdentity, setUserIdentity ],
		       cartItemBag: [cartItem, setCartItem],
		       selectedMusicCategoryBag:[selectedMusicCategoryID, setSelectedMusicCategoryID],
		       selectedLocationBag:[selectedLocationID, setSelectedLocationID],
		       totalCartBalanceBag: [totalCartBalance, setTotalCartBalance],
		       userLastInteractionBag: [userLastInteraction, setUserLastInteraction],
		       loginDetailsBag : [loginDetails, setLoginDetails],
               dataReceiver: hashData, 
    	       baseURL:myBase 

		       }}>
 		{props.children}
 	   </CartContext.Provider>
 	)
}