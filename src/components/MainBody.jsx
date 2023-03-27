import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalProvider' 
import { Item } from './index'

const MainBody = ({ searchByName, searchByDate }) => {

  const { transactions } = useContext( GlobalContext );
  const  finalTransactionsByName  = transactions.filter(transaction => (transaction.NameofExpense.toLowerCase().includes(searchByName.toLowerCase())))
  const finalDate = searchByDate.replaceAll('/', '-')
  const finalTransactionsByDate = finalTransactionsByName.filter(transaction =>
    transaction.Date.toLowerCase().includes(finalDate.toLowerCase())
  );

  const finalTransactions = finalTransactionsByDate;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl md:m-4 xl:mx-auto m-3">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-base  text-gray-700 uppercase bg-gray-300 ">
            <tr>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Expense
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Category
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Date
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Amount
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Updated on
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    Created By
                </th>
                <th scope="col" className="px-6 py-2 sm:py-4 font-medium">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            {finalTransactions.map( transaction => {
               return (
                <Item
                  key={transaction.id}    
                  transaction ={transaction}
                />
                )
            })}
        </tbody>
    </table>
</div>
  )
}

export default MainBody