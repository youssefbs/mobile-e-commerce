import React, {useContext,useState,useEffect} from 'react';
import {PhoneContext} from '../context/PhoneContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import image0 from '../img/product-1.png';
import image1 from '../img/product-2.png';
import image2 from '../img/product-3.png';
import image3 from '../img/product-5.png';
import image4 from '../img/product-6.png';
import image5 from '../img/product-7.png';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyle=makeStyles({
    trash:{
        '&:hover':{
            color:"#f50057"
        },
        cursor:"pointer"
    },
    button:{
        marginTop:"30px",
        marginBottom:"30px"
    }
})



const Panier=()=>{
    const classes=useStyle();
    const {suppItem,diminueQuantite,phones,ajouterPanier}=useContext(PhoneContext);
    const [stores,setStores]=useState([]);
    const [som,setSom]=useState(0);

    const [open, setOpen] = useState(false);
    const[tel,setTel]=useState({});

    const handleClickOpen = (a) => {
      setOpen(true);
      setTel(a);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const supp=(id)=>{
        suppItem(tel.id);
        handleClose();
    }

    useEffect(()=>{
        const newArr=phones.filter(phone=>{
            if(phone.quantite>0){
                return true;
            }else{
                return false;
            }
        })
        setStores(newArr);
    },[phones])

    useEffect(()=>{
        setSom(somme());
    },[stores])


    const somme=()=>{
        let s=0;
        let i;
        for(i=0;i<stores.length;i++){
            s=s+stores[i].prix*stores[i].quantite 
        }
        return s;
    }

    const fnReturn=()=>{
        if(stores.length==0){
            return (<div style={{textAlign:"center"}}>
                    <Typography variant="h4" align="center">Votre panier est vide</Typography>
                    <br />
                    <Link to="/" >
                    <Button  color="primary" variant="outlined">voir d'autres smartphones</Button>
                    </Link>
            </div>
            )
        }else{
            return (
               <div>
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>smartphone</TableCell>
                        <TableCell align="left">Nom</TableCell>
                        <TableCell align="center">Quantite</TableCell>
                        <TableCell align="center">Supprimer</TableCell>
                        <TableCell align="right">Prix unitaire</TableCell>
                        <TableCell align="right">Prix total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
        
                {
                    stores.map((store,index)=>{
                       return(
                        <TableRow key={index}>
                                          <TableCell component="th" scope="row">
                                                <Link  to={`/phone/${store.id}`} >
                                                    <img src={imgPhone(store.id)} alt={store.titre} style={{width:"100px"}}/>
                                                </Link>
                                          </TableCell>
                                         <TableCell align="left"><Link  to={`/phone/${store.id}`} style={{textDecoration:"none",color:"black"}} > {store.titre} </Link></TableCell>
                                         <TableCell align="center">
                                             {
                                                 store.quantiteTotal==0 && (<div style={{color:"#cc0000"}}>Stock epuisé, vous ne pourrez plus augmenter la quantite</div>)
                                             }
                                             <Button onClick={()=>diminueQuantiteStore(store)}>-</Button>
                                             {store.quantite}
                                             <Button onClick={()=>ajouteQuantite(store.id)}>+</Button>
                                             </TableCell>
                                         <TableCell align="center"><DeleteIcon className={classes.trash}  onClick={()=>handleClickOpen(store)}/> </TableCell>    
                                         <TableCell align="right">{store.prix} dinar</TableCell>
                                         <TableCell align="right">{store.quantite*store.prix} dinar</TableCell>
                        </TableRow>
                        
    
                       ) 
                    }) 
                }
                     <TableRow>
                     <TableCell rowSpan={3} />
                     <TableCell rowSpan={3} />
                     <TableCell rowSpan={3} />
                     <TableCell colSpan={2}>Soustotal</TableCell>
                     <TableCell align="right">{som} dinar</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell>Taxe</TableCell>
                     <TableCell align="right">7%</TableCell>
                     <TableCell align="right">{(som*0.07).toFixed(2)} dinar</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell colSpan={2}>Total</TableCell>
                     <TableCell align="right">{(som*1.07).toFixed(2)} dinar</TableCell>
                   </TableRow>
                  </TableBody>
                    </Table>
            </TableContainer>
            <Grid container className={classes.button}>
                <Grid item container xs={6} justify="center">
                    <Link to="/" >
                <Button  color="primary">Revenir la page d'acceuil</Button>
                    </Link>
                </Grid>
                <Grid item container xs={6} justify="center" >
                    <Link to="/login">
                   <Button variant="contained" color="primary">Payer</Button>
                   </Link>
                </Grid>
            </Grid>
            <Dialog
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="alert-dialog-title"
                     aria-describedby="alert-dialog-description"
                     disableBackdropClick={true}
                   >
                     <DialogTitle id="alert-dialog-title">Le smartphone {tel.titre} va etre supprimer de votre panier</DialogTitle>
                     <DialogActions>
                       <Button onClick={handleClose} color="primary">
                       Annuler la suppression
                       </Button>

                       <Button  onClick={()=>supp(tel.id)} color="primary" variant="contained">
                          Confirmer la suppression
                       </Button>
                     </DialogActions>
            </Dialog>
            </div>
            )
        }
    }

    const ajouteQuantite=(id)=>{
            ajouterPanier(id);
    }


    const recherche=(id)=>{
        var i;
        for(i=0;i<stores.length;i++){
            if(stores[i].id==id){
                return i;
            }
        }
    }
        
    const diminueQuantiteStore=(t)=>{
        const pos=recherche(t.id);
        if(stores[pos].quantite>1){
            diminueQuantite(t.id);
        }else{
            handleClickOpen(t);
        }
    }


    const imgPhone=(id)=>{
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

    return(
        <div>
                <br /> 
                <Typography variant="h4">Votre Panier</Typography>
                <br />
                {fnReturn()}

        </div>
    )
}

export default Panier;