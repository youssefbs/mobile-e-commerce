import React, {useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));




const Filter=({choix})=>{
    const classes = useStyles();
    const [filter,setFilter]=useState({
        marque:[],
        ram:[],
        stockage:[],
        SE:[]
    });
    


    const test=(e)=>{
        const newArr=filter;
        if(e.target.name!=undefined){
            if(e.target.checked){
                if(e.target.name=="marque"){
                    newArr.marque.push(e.target.value);
                    
                }else if(e.target.name=="ram"){
                    newArr.ram.push(e.target.value);
                    
                }else if(e.target.name=="stockage"){
                    newArr.stockage.push(e.target.value);
                    
                }else{
                    newArr.SE.push(e.target.value);
                    
                }
                setFilter(newArr);
            }else{
                let Arr;
                if(e.target.name=="marque"){
                    
                    Arr=filter.marque.filter(arr=>{
                        if(arr==e.target.value){
                            return false;
                        }
                        return true;
                    })
                    newArr.marque=Arr;
                }else if(e.target.name=="ram"){
                  
                     Arr=filter.ram.filter(arr=>{
                        if(arr==e.target.value){
                            return false;
                        }
                        return true;
                    })
                    newArr.ram=Arr;
                }else if(e.target.name=="stockage"){
                  
                     Arr=newArr.stockage.filter(arr=>{
                        if(arr==e.target.value){
                            return false;
                        }
                        return true;
                    })
                    newArr.stockage=Arr;
                }else{
                  
                     Arr=newArr.SE.filter(arr=>{
                        if(arr==e.target.value){
                            return false;
                        }
                        return true;
                    })
                    newArr.SE=Arr;
                }
                
                setFilter(newArr);
            }      
        }
        choix(filter);
       
    }
    

    return(
        <div>
            <FormControl component="fieldset" className={classes.formControl} >
              <FormLabel component="legend">Marque:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox   name="marque" color="primary"  value="google" onClick={test}  />}
                  label="Google"
                  
                />
                <FormControlLabel
                  control={<Checkbox   name="marque" color="primary" value="SAMSUNG" onClick={test}  />}
                  label="SAMSUNG"
                  
                />
                <FormControlLabel
                  control={<Checkbox  name="marque"  color="primary" value="htc" onClick={test}  />}
                  label="htc"
                  
                />
                <FormControlLabel
                  control={<Checkbox  name="marque"  color="primary" value="apple" onClick={test}  />}
                  label="apple"
                  
                />
              </FormGroup>
            </FormControl>
            <hr />  
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">RAM:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox   name="ram" color="primary" value="1" onClick={test}  />}
                  label="1"
                  
                />
                <FormControlLabel
                  control={<Checkbox   name="ram" color="primary" value="2" onClick={test}  />}
                  label="2"
                  
                />
                <FormControlLabel
                  control={<Checkbox  name="ram"  color="primary" value="4" onClick={test}  />}
                  label="4"
                  
                />
              </FormGroup>
            </FormControl>
            <hr />
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Stockage:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox   name="stockage" color="primary" value="4" onClick={test}  />}
                  label="4"
                  
                />
                <FormControlLabel
                  control={<Checkbox   name="stockage" color="primary" value="32" onClick={test}  />}
                  label="32"
                  
                />
                <FormControlLabel
                  control={<Checkbox  name="stockage"  color="primary" value="64" onClick={test}  />}
                  label="64"
                 
                />
              </FormGroup>
            </FormControl>
            <hr />
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Systeme d'exploitation:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox   name="se" color="primary" value="Android" onClick={test}   />}
                  label="Android"
                  
                />
                <FormControlLabel
                  control={<Checkbox   name="se" color="primary" value="iOS" onClick={test}  />}
                  label="iOS"
                  
                />
              </FormGroup>
            </FormControl>
            
        </div>       
    )
}

export default Filter;