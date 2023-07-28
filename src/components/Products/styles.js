import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({  
  toolbar: theme.mixins.toolbar,
  
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  appBar:{
    
    backgroundColor:'steelblue',
    textTransaform:'none !important', 
    color:'white'

  },
  btnCard:{
    
          backgroundColor:'steelblue',
          textTransform: 'none',
          margin: '5px',
          textTransaform:'none!important',
          color:'white'
  
      },
  footer:{
    
    backgroundColor:'steelblue',
    textTransaform:'none !important',
    color:'white',
    display:'block',
    position: 'fixed',
    align:'center !important',
    textAlign:'center !important',
    alignContent:'center !important',
    width: '100%',
    height: '30px',
    bottom: 0,
        
  },
   mainWrapper: {
  
          position: 'relative',
          minHeight: '300vh',
 
    }, 
    dashboardButton:{
    
           backgroundColor:'#3171e0',
           textTransform: 'none',
           margin: '5px',
           textTransaform:'none !important',
           color:'white',
           height:'60px'

    },
      buttonTxt:{
    
           backgroundColor:'white',
           textTransform: 'none',
           margin: '5px',
           textTransaform:'none !important',
           color:'black'
  
  },
  backdrop: {
  
           zIndex: theme.zIndex.drawer + 1,
           color: '#fff',
  
  },
  spinner:{
  
          align:"center", 
          justify:"center",
          position: 'absolute',
          left: '50%',
          top: '50%',

  }

}));