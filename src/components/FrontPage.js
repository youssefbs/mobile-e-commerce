import React,{useState,useContext} from 'react';
import {PhoneContext} from '../context/PhoneContext'
import Phone from "./Phone";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Filter from './Fliter';
import { Typography } from '@material-ui/core';






const FrontPage=()=>{
    
    const {phones,ajouterPanier,diminueQuantite,suppItem}=useContext(PhoneContext);
    const [phonesF,setPhonesF]=useState(phones);
    

    const choix=(fil)=>{
      const newArr= phones.filter(arr=>{
        let l1=fil.marque.length;
        let l2=fil.ram.length;
        let l3=fil.stockage.length;
        let l4=fil.SE.length;
        let i;
        if(l1!=0){
          for(i=0;i<l1;i++){
            if(arr.marque==fil.marque[i]){
              break;
            }
          }
          if(i>=l1){
            return false;
          }
        }

        if(l2!=0){
          for(i=0;i<l2;i++){
            if(arr.ram==fil.ram[i]){
              break;
            }
          }
          if(i>=l2){
            return false;
          }
        }

        if(l3!=0){
          for(i=0;i<l3;i++){
            if(arr.stockage==fil.stockage[i]){
              break;
            }
          }
          if(i>=l3){
            return false;
          }
        }

        if(l4!=0){
          for(i=0;i<l4;i++){
            if(arr.se==fil.SE[i]){
              break;
            }
          }
          if(i>=l4){
            return false;
          }
        }

        return true;
      });
      
  
      setPhonesF(newArr);
    }    


    return (
        <div style={{marginBottom:"20px"}}>
             
             <br />
             <Grid container spacing={2} justify="center">
                <Grid  item sm={5} xs={12} md={3}>
                  <Paper>
                        <Filter choix={choix} />
                  </Paper>
                </Grid>
                <Grid container xs={12} sm={7} md={9}  item spacing={2} justify="center">
                  {
                    phonesF.map(phone=>{
                        return (<Grid item  md={4} key={phone.id}>
                                  <Phone info={phone} ajouterPanier={ajouterPanier} suppItem={suppItem}  diminueQuantite={diminueQuantite}/>
                                </Grid>
                              )
                      
                    })                  
                  }
                  {
                    phonesF.length==0 && <Typography style={{margin:"30px"}} variant="h4" align="center"  color="textPrimary">Il y a aucun smartphone avec les caracterstique choisi. Veuillez choisir d'autre caracterstique</Typography>
                  }
                </Grid>  
                  
             </Grid>  
                           
        </div>
    )
}
export default FrontPage;