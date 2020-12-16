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
import {Redirect} from 'react-router-dom';

let i=0;

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  link:{
    margin:"auto",

  },

  error:{
    color:"fe0404",
  }


}));






const Login =()=> {
  
  
  
  const classes = useStyles();


  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [emailErr,setEmailErr]=useState("");
  const [passwordErr,setPasswordErr]=useState("");

  const [errorE,setErrorE]=useState(false);
  const [errorP,setErrorP]=useState(false);
  const[redirect,setRedirect]=useState(false);

  const Verif=(e)=>{
    ControllPassword();
    ControllEmail();
   if(errorE===true || errorP===true || email===""|| password===""){
      e.preventDefault();
      setRedirect(false);
    }else{
      setRedirect(true);
    }
    
  }

  const  ControllEmail=()=>{
    let i1= email.indexOf(".");
    let i2= email.indexOf("@");
    if(email.length===0){
      setEmailErr("Champ obligatoire");
      setErrorE(true);
    }else if(i1!==-1 && i2!==-1 ){
      if(i2<i1){
        setEmailErr("");
        setErrorE(false);
      //  setFocusEmail(false);
      
      }else{
        setEmailErr("Email incorrect il doit respecter ce format xxx@xx.xx| est de forme incorrect");
        setErrorE(true);
      
      }
    }else{
      setEmailErr("Email incorrect il doit respecter ce format xxx@xx.xx | est de forme incorrect");
      setErrorE(true);
      
    }
  }

  const ControllChangeEmail=(e)=>{
      setEmail(e.target.value); 
      let i1= email.indexOf(".");
      let i2= email.indexOf("@");
    if(email.length>0 && emailErr==="Champ obligatoire"){
      setEmailErr("");
      setErrorE(false);
      //setFocusEmail(false);
    }
    if(i1!==-1 && i2!==-1 ){
      if(i2<i1){
        setEmailErr("");
        setErrorE(false);
        //setFocusEmail(false);}
      }

  }
 }


  const ControllPassword=(e)=>{
    if(password.length==0){
      setErrorP(true);
      setPasswordErr("Champ obligatoire");
    }else if(password.length<8){
      setErrorP(true);
      setPasswordErr("longueur minimum du mot de passe est 8");
    }else{
      setErrorP(false);
      setPasswordErr("");
      //setFocusPass(false);
    }
  }

  const ControllChangePassword=(e)=>{
    setPassword(e.target.value);
    if(password.length>0 && passwordErr==="Champ obligatoire"){
      setErrorP(false);
      setPasswordErr("");
      //setFocusPass(false);
    }
    if(password.length>=8){
      setErrorP(false);
      setPasswordErr("");
      //setFocusPass(false);
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
         Inscription
        </Typography>
        <form className={classes.form} onSubmit={Verif}>
        <br />
        <Typography  variant="h6" component="h6" style={{fontSize:"15px",textDecoration:"underline"}}>Tous les champs sont obligatoires</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Adresse Email*"
            name="email"
            autoComplete="email"
            value={email}
            onChange={ControllChangeEmail}
            helperText={emailErr}
            error={errorE}
            onBlur={ControllEmail}
           
          />
              
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Mot de passe*"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onBlur={ControllPassword}
            helperText={passwordErr}
            error={errorP}
            onChange={ControllChangePassword}
           
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
           
          >
            Se connecter
          </Button>
          <Grid container spacing={0} style={{fontSize:"13px"}}>
          <Grid item xs={4} className={classes.link}>
                <a href="https://mail.google.com/mail" target="_blank">
                {"Mote de passe oublié?"}
                </a>
            </Grid>
            <Grid item xs={8} className={classes.link}>
                <Link to="signUp">
                {"Vous n'avez pas de compte? Crée compte"}
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;