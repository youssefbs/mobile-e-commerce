import { useContext,useState } from "react";
import React from 'react';
import {PhoneContext} from '../context/PhoneContext'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import image0 from '../img/product-1.png';
import image1 from '../img/product-2.png';
import image2 from '../img/product-3.png';
import image3 from '../img/product-5.png';
import image4 from '../img/product-6.png';
import image5 from '../img/product-7.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const PhoneDetails=(props)=>{
    const id=props.match.params.id;
    const {phones,ajouterPanier,diminueQuantite}=useContext(PhoneContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
      ajouterPanier(id);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const diminuer=(info)=>{
      if(info.quantite>=1){
        diminueQuantite(info.id);
      }
    }

    const msgStock=(info)=>{
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


  const fnPanier=(info)=>{
    if(info.quantite==0){
      return(
        <Button size="small" color="primary" variant="contained"  onClick={handleClickOpen}>
          Ajouter Au Panier
        </Button>
      )
    }else{
      return(
        <div style={{display:"inline"}}>
          <Button onClick={()=>diminuer(info)}> - </Button>
        {info.quantite}
           <Button onClick={()=>ajouterPanier(info.id)}> + </Button>
        </div>
      )
      
    }
  }

    const imgPhone=()=>{
        if(id==0){
            return image0;
        }else if(id==1){
            return image1;
        }else if(id==2){
            return image2;
        }else if(id==3){
            return image3;
        }else if(id==4){
            return image4;
        }else{
            return image5;
        }
    }

    const Prixtotal=(item)=>{
      if(item.quantite>1){
        return(
          <TableRow>
          <TableCell component="th" scope="row" style={{fontSize:"25px"}}>
            Prix Total
          </TableCell>
          <TableCell align="right" style={{color:"#cc0000",fontSize:"25px"}} >{item.prix*item.quantite} dinar</TableCell>
        </TableRow>
        )
      }else{
        return null;
      }
    }

    return(
        <div>
          <Grid container alignItems="center" justify="center" style={{marginTop:"20px"}}>
                <Grid item sm={10} md={4} style={{textAlign:"center"}}>
                    <img src={imgPhone()} alt="gggg"/>
                </Grid>
                <Grid item sm={10} md={8} style={{textAlign:"center"}}>
                       <TableContainer component={Paper} fullWidth>
                         <Table  aria-label="simple table">
                           <TableBody>
                               <TableRow>
                                 <TableCell component="th" scope="row" style={{fontSize:"25px"}}>
                                   {phones[id].titre}
                                 </TableCell>
                                 <TableCell align="right"></TableCell>
                               </TableRow>  
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                   Marque
                                 </TableCell>
                                 <TableCell align="right">{phones[id].marque}</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                   Taille de l'ecran
                                 </TableCell>
                                 <TableCell align="right">{phones[id].tailleEcran} pouce</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                   Stockage
                                 </TableCell>
                                 <TableCell align="right">{phones[id].stockage} GO</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                   Systeme d'exploitation
                                 </TableCell>
                                 <TableCell align="right">{phones[id].se}</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                   Couleur
                                 </TableCell>
                                 <TableCell align="right">{phones[id].couleur}</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                 Processeur
                                 </TableCell>
                                 <TableCell align="right">{phones[id].processeur}</TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row">
                                  {msgStock(phones[id])}
                                 </TableCell>
                                 <TableCell align="right"></TableCell>
                               </TableRow>
                               <TableRow>
                                 <TableCell component="th" scope="row" style={{fontSize:"25px"}}>
                                   Prix Unitaire
                                 </TableCell>
                                 <TableCell align="right" style={{color:"#cc0000",fontSize:"25px"}} >{phones[id].prix} dinar</TableCell>
                               </TableRow>
                               {
                                 Prixtotal(phones[id])
                               }
                           </TableBody>
                         </Table>
                       </TableContainer>
                       <Link to="/">
                       <Button style={{margin:"30px"}} color="primary">voir d'autres smartphones</Button>
                       </Link>
                       {fnPanier(phones[id])}
                       
                </Grid>

          </Grid>
                  <Dialog
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="alert-dialog-title"
                     aria-describedby="alert-dialog-description"
                   >
                     <DialogTitle id="alert-dialog-title">Le smartphone {phones[id].titre} a été ajouter dans votre panier</DialogTitle>
                     <DialogActions>
                       <Button onClick={handleClose} color="primary">
                         Continuer mes achats
                       </Button>

                       <Button onClick={handleClose} color="primary" variant="contained">
                          <Link to="/panier"  style={{textDecoration:"none",color:"white"}}>  Voir mon panier </Link>
                       </Button>
                     </DialogActions>
                   </Dialog>
        </div>
    )
}

export default PhoneDetails;