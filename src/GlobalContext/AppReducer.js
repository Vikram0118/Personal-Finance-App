
// specify the application state changes in response to certain action stored in our context

const AppReducer = ( state, action ) => {

    switch( action.type ) {

        case "DELETE_TRANSACTION" :
            const updatedTransactions = state.transactions.filter( transaction => transaction.id !== action.payload );
              // save updated transactions to local storage
              localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
        
              return {
                ...state,
                transactions: updatedTransactions
              };
        
        case "ADD_TRANSACTION" :
            const newTransactions = [action.payload, ...state.transactions];
            // save new transactions to local storage
            localStorage.setItem("transactions", JSON.stringify(newTransactions));
                
            return {
              ...state,
              transactions: newTransactions
            };        
            
        default:
            return state;
    }

}

export default AppReducer