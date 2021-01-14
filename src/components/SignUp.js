import React ,{useState}from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Select,InputLabel,FormControl,MenuItem} from '@material-ui/core';
import FormHelperText from "@material-ui/core/FormHelperText";
import {Redirect} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  link:{
    margin:"auto",
    marginBottom: theme.spacing(10),

  },


}));






const SignUp =()=> {
  
  
  
  const classes = useStyles();



  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [password2,setPassword2]=useState("");
  const [ville,setVille]=useState("");
  const [codePostal,setCodePostal]=useState("");
  const [num,setNum]=useState(0);
  const[adresse,setAdresse]=useState("");


  const [emailErr,setEmailErr]=useState("");
  const [passwordErr,setPasswordErr]=useState("");
  const [passwordErr2,setPasswordErr2]=useState("");
  const [numberErr,setNumberErr]=useState("");
  const [nomErr,setnomErr]=useState("");
  const [prenomErr,setprenomErr]=useState("");
  const [adresseErr,setadresseErr]=useState("");
  const [codeErr,setCodeErr]=useState("");



  const [errorE,setErrorE]=useState(false);
  const [errorP,setErrorP]=useState(false);
  const [errorP2,setErrorP2]=useState(false);
  const [errorN,setErrorN]=useState(false);
  const[redirect,setRedirect]=useState(false);

  
  const  ControllEmail=(e)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length===0){
      setEmailErr("Champ obligatoire");
      setErrorE(true);
    }
    else if(re.test(String(email))){
      setEmailErr("");
        setErrorE(false);
    }else{
      setEmailErr("L'adresse email non valide.");
      setErrorE(true);
    }
    
    /*
    let i1= email.indexOf(".");
    let i2= email.indexOf("@");
    if(i1!==-1 && i2!==-1 ){
      if(i2<i1){
        setEmailErr("");
        setErrorE(false);
      }else{
        setEmailErr("Email incorrect il doit respecter ce format xxx@xx.xx");
        setErrorE(true);
        
      }
    }else{
      setEmailErr("Email incorrect il doit respecter ce format xxx@xx.xx");
      setErrorE(true);
    }*/
  }

  const ControllChangeEmail=(e)=>{
      setEmail(e.target.value);
    if(email!=="" && emailErr==="Champ obligatoire"){
      setEmailErr("");
      setErrorE(false);
    }  
     /* let i1= email.indexOf(".");
      let i2= email.indexOf("@");
    if(i1!==-1 && i2!==-1 ){
      if(i2<i1){
        setEmailErr("");
        setErrorE(false);}
      }*/
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(e.target.value))){
      setEmailErr("");
        setErrorE(false);

  }
}


  const ControllPassword=(e)=>{
    if(password.length==0){
      setErrorP(true);
      setPasswordErr("Champ obligatoire");}
    else if(password.length<8){
      setErrorP(true);
      setPasswordErr("Le mots de passe doit au moins avoir 6 caractères");
    }else{
      setErrorP(false);
      setPasswordErr("");
    }
  }

  const ControllChangePassword=(e)=>{
    setPassword(e.target.value);
    console.log(password.length);
    if(e.target.value.length!=0 && passwordErr==="Champ obligatoire"){
      setPasswordErr("");
      setErrorP(false);
      
    }
    if(password.length>=7){
      setErrorP(false);
      setPasswordErr("");
    }
  }
  

  

  const ControllChangePassword2=(e)=>{
    setPassword2(e.target.value);
    if(password2.length!=0 && passwordErr2==="Champ obligatoire"){
      setPasswordErr2("");
      setErrorP2(false);
      
    }
    if(password2.length>=8){
      setErrorP2(false);
      setPasswordErr2("");
  }
}
  


  const ControllPassword2=(e)=>{
    setPassword2(e.target.value);
        if(e.target.value.length===0){
          setErrorP2(true);
          setPasswordErr2("Champ obligatoire");
        }
        else if(password2!==password){
            setErrorP2(true);
            setPasswordErr2("Les mots de passe ne correspondent pas");
        }else{
            setErrorP2(false);
            setPasswordErr2("");
        }
  }


  const ControllNumber=(e)=>{
        setNum(e.target.value);
        let isnum = /^\d+$/.test(e.target.value);
        if(isnum===false || e.target.value.length!==8){
          setErrorN(true);
          setNumberErr("Donner un numero valide");
        }else if(e.target.value.length===8){
            setErrorN(false);
            setNumberErr("");
        }else{
          setErrorN(true);
          setNumberErr("Le numero doit etre composé de 8 chiffre");
           
        }
  }

  const ControllChangeNumber=(e)=>{
    setNum(e.target.value);
    if(num.length!==0 && numberErr==="Champ obligatoire"){
      setErrorN(false);
      setNumberErr("");
    }
    let isnum = /^\d+$/.test(e.target.value);
     if(e.target.value.length===8 && isnum){
      setErrorN(false);
      setNumberErr("");
     }else if(isnum===false){
      setErrorN(true);
      setNumberErr("Donner un numero valide");   
     }else if(e.target.value.length>8){
      setErrorN(true);
      setNumberErr("Le numero doit etre composé de 8 chiffre");
     }
}


  const ControllSelect=(e)=>{
    setCodePostal(e.target.value);
    setCodeErr("");
    if(codePostal==="2033"){
      setVille("Megrine");
    }else if(codePostal==="2034"){
      setVille("Ezzahra");
    }else{
      setVille("Chargui2");
    }
  }


  const SubmitSign=(e)=>{
    let b=true;

    if(nom===""){
      b=false;
      setnomErr("Champ obligatoire");
    }

    if(num===0){
      b=false;
      setNumberErr("Champ obligatoire");
    }

    if(prenom===""){
      b=false;
      setprenomErr("Champ obligatoire");
    }

    if(email===""){
      b=false;
      setEmailErr("Champ obligatoire");
      setErrorE(true);
    }

    if(password===""){
      b=false;
      setPasswordErr("Champ obligatoire");
      setErrorP(true);
    }

    if(password2===""){
      b=false;
      setPasswordErr2("Champ obligatoire");
      setErrorP2(true);
    }
    if(adresse===""){
      
      b=false;
      setadresseErr("Champ obligatoire");
    }

    if(codePostal===""){
      b=false;
      setCodeErr("Champ obligatoire");
    }





    if(b===false || passwordErr!=="" || passwordErr2!=="" || emailErr!=="" || nomErr!=="" || numberErr!=="" || adresseErr!=="" || codeErr!==""){
      e.preventDefault();
    }else{
      setRedirect(true);
    }
    

  }


  
  return (
    <Container component="main" maxWidth="xs">
       {
        redirect && <Redirect to="/" />
      }
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Créer un compte
        </Typography>
        <form className={classes.form} onSubmit={SubmitSign}>
        <Typography  variant="h6" component="h6" style={{fontSize:"15px",textDecoration:"underline"}}>Tous les champs sont obligatoires</Typography>
         <Grid container  spacing={1} >
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="Nom"
                label="Nom"
                name="Nom"
                autoComplete="email"
                onChange={(e)=>{
                  if(nomErr!==""){
                    setnomErr("");
                  }
                  if(/\d/.test(e.target.value) ){
                      setnomErr("Nom invalide ne doit pas contenir des chiffres");
                  }else{
                    setnomErr("");
                  }
                  setNom(e.target.value);
                }}
                onBlur={(e)=>{
                  if(e.target.value.length==0){
                    setnomErr("Champ obligatoire");
                  }
                }
              }
                value={nom}
                error={ nomErr!==""? true:false}
                helperText={nomErr}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="Prénom"
                label="Prénom"
                name="Prénom"
                autoComplete="email"
                onChange={(e)=>{
                  if(prenomErr!==""){
                    setprenomErr("");
                  }
                  if(/\d/.test(e.target.value) ){
                    setprenomErr("Prénom invalide ne doit pas contenir des chiffres");
                }else{
                  setprenomErr("");
                }
                  setPrenom(e.target.value);
                }}
                onBlur={(e)=>{
                  if(e.target.value.length==0){
                    setprenomErr("Champ obligatoire");
                  }
                }
              }
                value={prenom}
                error={prenomErr!=""? true:false}
                helperText={prenomErr}
              />
            </Grid>  
         </Grid> 
         <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={ControllChangeEmail}
            onBlur={ControllEmail}
            helperText={emailErr}
            error={errorE}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Mot de passe (longueur minimun 8)"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={ControllChangePassword}
            onBlur={ControllPassword}
            helperText={passwordErr}
            error={errorP}
          />
         
          </Grid>
          <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Confirmation mot de passe"
            type="password"
            autoComplete="current-password"
            value={password2}
            onChange={ControllChangePassword2}
            helperText={passwordErr2}
            error={errorP2}
            onBlur={ControllPassword2}
          />
          </Grid>

          <Grid item sm={12}>
          
          <TextField
             margin="normal"
             variant="outlined"
             label="Date de naissance"
             fullWidth
             type="date"
             InputLabelProps={{
                shrink: true,
             }}
             InputProps={{inputProps: { min: "1900-12-07", max: `2013-12-07`} }}
             defaultValue="2013-12-18"
          />
            </Grid>

            <Grid item sm={12}>
          
          <TextField
             margin="normal"
             variant="outlined"
             label="Numero de telephone"
             fullWidth
             type="text"
             onChange={ControllChangeNumber}
             onBlur={ ControllNumber}
             error={errorN}
             helperText={numberErr}
             error={numberErr!=""? true:false}
             helperText={numberErr}
             value={num===0?"":num}
          />
            </Grid>
            <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lieu"
            label="Adresse (nom de la rue)"
            name="lieu"
            autoComplete="lieu"
            error={adresseErr!=""? true:false}
            value={adresse}
            onChange={(e)=>{
              if(adresseErr!=""){
                setadresseErr("");
              }
              if(/\d/.test(e.target.value) ){
                setadresseErr("Nom de rue incorrect");
              }else{
                setadresseErr("");
              }
              setAdresse(e.target.value)}}
            helperText={adresseErr}
            onBlur={(e)=>{
              if(e.target.value.length==0){
                setadresseErr("Champ obligatoire");
              }
            }
             
            }
          />
        </Grid>
        <Grid item xs={5}>
                       <FormControl fullWidth   error={codeErr!=""?true:false}>
                               <InputLabel id="demo-simple-select-label">Code Postal</InputLabel>
                               <Select
                                 labelId="demo-simple-select-label"
                                 id="demo-simple-select"
                                 onChange={ControllSelect}
                                 value={codePostal}
                                 fullWidth
                               >
                                             <MenuItem value="2033" >2033</MenuItem>
                                             <MenuItem value="2034" >2034</MenuItem>
                                             <MenuItem value="2035" >2035</MenuItem>
                               </Select>
                               <FormHelperText >{codeErr}</FormHelperText>
                      </FormControl>
        </Grid>

        <Grid item xs={5}>
                       <TextField
                        fullWidth
                        label="ville"
                        disabled
                        helperText="Ville selon le code postal"
                        value={ville}
                       />
        </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'inscrire
          </Button>
          <Grid container >
            <Grid item xs={9} className={classes.link}>
                <Link to="login">
                {"Vous avez deja un compte? Identifiez-vous"}
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;