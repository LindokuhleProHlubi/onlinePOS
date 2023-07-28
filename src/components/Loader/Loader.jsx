import {Card,  CardContent,  Typography, Grid, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from '../Products/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => {
	
 const classes = useStyles(); 
 const history = useHistory(); 

	return (

           <main className={classes.spinner}>	
                        <div className={classes.toolbar} />
                        <CircularProgress  />
           </main>

	);
}

export default Loader;