import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from '../GlobalContext/AppReducer.js'

const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
const InitialState = {
    transactions: savedTransactions ? savedTransactions : [
        { id: 1, NameofExpense: 'Parotta', Category: 'Food', Date:'03-02-2023', Amount : 150, UpdatedAt:"2:52 pm", CreatedBy : 'Vikram'  },
        { id: 2, NameofExpense: 'Biriyani', Category: 'Food', Date:'22-02-2023', Amount : 250, UpdatedAt:"3:14 pm", CreatedBy : 'Kumar'  },
        { id: 3, NameofExpense: 'Book',   Category: 'Education', Date:'10-01-2023', Amount : 620, UpdatedAt:"12:12 pm", CreatedBy : 'Siddhart'  },
        { id: 4, NameofExpense: 'Camera', Category: 'Passion', Date:'02-02-2023', Amount : 80000, UpdatedAt:"9:45 am", CreatedBy : 'Vikram'  },
        { id: 5, NameofExpense: 'Headphones', Category: 'Entertainment', Date:'27-02-2023', Amount : 3000, UpdatedAt:"11:02 am", CreatedBy : 'Jhon'  },
        { id: 6, NameofExpense: 'Tea', Category: 'Snacks', Date:'18-03-2023', Amount : 50, UpdatedAt:"10:21 am", CreatedBy : 'Vikram'  },
        { id: 7, NameofExpense: 'Book',   Category: 'Education', Date:'11-03-2023', Amount : 500, UpdatedAt:"11:21 pm", CreatedBy : 'Jhon'  },
    ]
}

// create the global context
export const GlobalContext = createContext(InitialState)

// to allow all other components to access these -- we have to provide it 
// creating a provider componnent

const GlobalProvider = ({ children }) => {  // we will be wrapping all other componnets with this - so all other components all children 
    const [state, dispatch] = useReducer(AppReducer, InitialState) //whenever we call a reducer action we need dispatch

    useEffect(() => {
        const storedState = localStorage.getItem('transactions');
        if (storedState) {
            dispatch({ type: 'INITIALIZE_TRANSACTIONS', payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    // action that make calls to reducer
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider
            value ={{
                transactions : state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >            
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider