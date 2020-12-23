import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={

    transaction:[
    
          { id: 1, text: 'Flower', amount: 20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]

}


export const GlobalContext =createContext(initialState);

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
 
 
 let deleteTransaction = (id)=>{
dispatch(
    {
        type: "Delete_Transaction",
        payload: id
    }
);
 }

 let AddNewTransaction = (transaction)=>{
    dispatch(
        {
            type: "Add_Transaction",
            payload: transaction
        }
    );
    console.log("working ")
     }
    
 
    return(
        <GlobalContext.Provider value={

            {
                transactions: state.transaction,
                deleteTransaction,
                AddNewTransaction
                
            }

        } >
            {children}</GlobalContext.Provider>

    );

}