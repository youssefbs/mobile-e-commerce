import './App.css';
import Login from "./components/Login";
import SignUp from './components/SignUp';
import NavBarApp from "./components/NavBarApp";
import {BrowserRouter as Router ,Switch,Route} from'react-router-dom';
import PhoneContextProvider from './context/PhoneContext';
import FrontPage from './components/FrontPage';
import 'fontsource-roboto';
import Panier from './components/Panier';
import PhoneDetails from './components/PhoneDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    
      <PhoneContextProvider>
         <Router>
           <NavBarApp /> 
           <div className="app">
           <Switch>
               <Route path="/" exact  component={FrontPage}/>
               <Route path="/login" component={Login}/>
               <Route path="/signUp" component={SignUp}/>
               <Route path="/panier" component={Panier}/>
               <Route path="/phone/:id" component={PhoneDetails}/>
               <Route path="/" component={NotFound} />
               
           </Switch>
            
          </div>  
         </Router>
      </PhoneContextProvider>
    
  );
}

export default App;
