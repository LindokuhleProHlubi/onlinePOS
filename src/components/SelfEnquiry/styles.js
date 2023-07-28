import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    root:{
           maxWidth:'100%',
           marginTop:'18%',
      },
      media: {
          height: 0,
          paddingTop:'60.25%'
      },
      cardActions: {
          display:'flex',
        justifyContent:'flex-end'
      },
      cardContent: {
        display:'flex',
        justifyContent: 'space-between'
      },
      buttonContainer:{
        display:'flex',
        justifyContent: 'flex-end',
      
      },
      loginButton:{
     
            paddingleft:' 3%',         
            padding: theme.spacing(1),
      },
      registerButton:{
       paddingRight:' 3%',
       marginLeft:'10%',
      
    },

}) );