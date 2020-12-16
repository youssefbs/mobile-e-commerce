import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const Phone=({info,ajouterPanier,diminueQuantite,suppItem})=>{
    

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
      ajouterPanier(info.id);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const diminuer=()=>{
      if(info.quantite>=1){
        diminueQuantite(info.id);
      }
    }

    const msgStock=()=>{
        if(info.quantiteTotal==0){
          return(
            <span style={{ color:"#cc0000"}}>Stock epuise</span>
          )
        }else{
          return(
            <span>Il ne reste plus que <span style={{ color:"#cc0000"}}>{info.quantiteTotal} exemplaire(s) </span>  en stock.</span>
          )
        }      

    }


    const fnPanier=()=>{
      if(info.quantite==0){
        return(
          <Button size="small" color="primary" variant="contained"  onClick={handleClickOpen}>
            Ajouter Au Panier
          </Button>
        )
      }else{
        return(
          <div>
            <Button onClick={diminuer} size="small"> - </Button>
          {info.quantite}
             <Button onClick={()=>ajouterPanier(info.id)}  size="small"> + </Button>
          </div>
        )
        
      }
    }

    const classes = useStyles();

  return (
    <Card className={classes.root}>
                    <Link to={`/phone/${info.id}`} style={{textDecoration:"none",color:"black"}}>
                   <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={`${info.img}`}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {info.titre}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="ul">
                                  <ul>
                                      <li>Prix:{info.prix} dinar</li>
                                      <li>Marque:{info.marque}</li>
                                      <li>{msgStock()}</li>
                                  </ul>
                                </Typography>
                              </CardContent>
                   </CardActionArea>
                   </Link>
                   <CardActions><Link to={`/phone/${info.id}`} >
                               <Button size="small" color="primary">
                                 Plus d'information
                               </Button></Link>
                               {fnPanier()}
                   </CardActions>
                   <Dialog
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="alert-dialog-title"
                     aria-describedby="alert-dialog-description"
                   >
                     <DialogTitle id="alert-dialog-title" style={{fontSize:"10px"}}>Le smartphone {info.titre} a été ajouter dans votre panier</DialogTitle>
                     <DialogActions>
                       <Button onClick={handleClose} color="primary">
                         Continuer mes achats
                       </Button>
                       <Link to="/panier"  style={{textDecoration:"none",color:"white"}}> 
                       <Button onClick={handleClose} color="primary" variant="contained">
                           Voir mon panier 
                       </Button>
                       </Link>
                     </DialogActions>
                   </Dialog>
    </Card>
  );
}

export default Phone;