import React from 'react';
import useStyles from '../Products/styles';
import { useHistory} from 'react-router-dom';



const Footer = () => {

const classes = useStyles();
let fullYear = new Date().getFullYear();


return (
 < >

      <div className = {classes.footer}>
              
                 Powered by: Digimage © {fullYear} |<a to="/https://iCredit.salvtec.co.sz/privacy.html" href='https://iCredit.salvtec.co.sz/privacy.html' style={{color:'white !important'}}> <span style={{color:'white', backgroungColor:'white'}}>Privacy Statement</span></a>
              </div>

  </>

   )
}

export default Footer;