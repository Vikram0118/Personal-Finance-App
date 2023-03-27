import React, { useContext, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { GlobalContext } from '../GlobalContext/GlobalProvider'


// const Item = ({ NameofExpense, Category, Date, Amount, UpdatedAt, CreatedBy  }) => {
const Item = ({ transaction }) => {

  const [deleteModel, setDeleteModel] = useState(false)

  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <tr className="bg-gray-100 border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {transaction.NameofExpense}
        </th>
        <td className="px-6 py-4">
            {transaction.Category}
        </td>
        <td className="px-6 py-4">
            {transaction.Date}
        </td>
        <td className="px-6 py-4">
            ${transaction.Amount}
        </td>
        <td className="px-6 py-4">
          {transaction.UpdatedAt}
        </td>
        <td className="px-6 py-4">
          {transaction.CreatedBy}
        </td>
        <td className='px-6 py-4'>
        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setDeleteModel(true)}>
          <FaTrash />
        </button>
        

        {deleteModel ? (
          <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto mx-4 sm:mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <p className="my-2 text-slate-500 text-sm sm:text-lg leading-relaxed">
                   Are you sure you want to delete this record of expense ?
                  </p>
                  <div className='text-center text-black'>
                    <p>Expense : {transaction.NameofExpense}</p>
                    <p>Category : {transaction.Category}</p>
                    <p>Amount : {transaction.Amount}</p>
                    <p>Date : {transaction.Date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 my-2 ">
                  <button
                      className="bg-blue-600 text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setDeleteModel(false);
                        deleteTransaction(transaction.id)
                      }}
                    >
                      Yes, I'm sure
                  </button>
                  <button
                    className="bg-blue-600 text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setDeleteModel(false)}
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </> ) : null }
        </td>
      </tr>  
    </>
  )
}

export default Item
