import React ,{useState,createContext} from 'react';
import {storeProducts} from '../data'

export const PhoneContext=createContext();

const QTN=[25,30,10,30,20,10];

const PhoneContextProvider=(props)=>{
    
    const [phones,setPhones]=useState(storeProducts);
    

    const ajouterPanier=(id)=>{
            if(phones[id].quantite < QTN[id]){
                let NewPhones=[...phones];
                NewPhones[id].quantite=NewPhones[id].quantite+1;
                NewPhones[id].quantiteTotal=NewPhones[id].quantiteTotal-1;
                setPhones(NewPhones);
            }
    }

    const diminueQuantite=(id)=>{
        let NewPhones=[...phones];
        NewPhones[id].quantite=NewPhones[id].quantite-1;
        NewPhones[id].quantiteTotal=NewPhones[id].quantiteTotal+1;
        setPhones(NewPhones);
    }

    const suppItem=(id)=>{
        let NewPhones=[...phones];
        NewPhones[id].quantite=0;
        NewPhones[id].quantiteTotal=QTN[id];
        setPhones(NewPhones);
        
    }

    return(
        <PhoneContext.Provider value={{phones,ajouterPanier,suppItem,diminueQuantite}}>
            {props.children}
        </PhoneContext.Provider>
    )
}
export default PhoneContextProvider;