import React, {useState, useContext, useRef} from 'react'
import { FaPlus } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import {  GlobalContext } from '../GlobalContext/GlobalProvider'

const AddExpense = ({ loggedPerson }) => {

  const expenseRef = useRef(null)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)

  const [AddExpenseModel, setAddExpenseModel] = useState(false);

  const [nameOfExpense, setNameOfExpense] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext)

  const created = loggedPerson

  const onSubmitExpense = (e) => {
    e.preventDefault()
    
    setAddExpenseModel(false)

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let currentDate = `${day}-${month}-${year}`;

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime =` ${hours}:${minutes} ${ampm}`;

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        NameofExpense: nameOfExpense,
        Amount: +amount,
        Category: category,
        CreatedBy : 'Vikram',
        Date: currentDate,
        UpdatedAt: strTime
      }
      addTransaction( newTransaction );  

      setNameOfExpense('');
      setCategory('');
      setAmount('');
      expenseRef.current.value = '';
      categoryRef.current.value = '';
      amountRef.current.value = '';
      
  }

  return (

  <>
    <button
        type="submit"
        onClick={() => setAddExpenseModel(true) }
        className=" border text-center border-blue-600 rounded font-normal bg-blue-600 px-2 py-1 text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 active:bg-blue-600 active:text-white ">
          <div className='flex items-center justify-center gap-1'>
              <FaPlus />
              <p>Add Expense</p>
          </div>
    </button>     

    {AddExpenseModel ? (
      <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
        <div className="relative mx-4 w-3/4 sm:w-1/3">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
            <button className=' ml-auto inline-flex items-center' onClick={() => setAddExpenseModel(false)}>
              <GrClose />
            </button>
  
          <form onSubmit={onSubmitExpense}>

            <div className="relative mb-5 flex flex-col">
            <label
                htmlFor="NameofExpense"
                className=""  
                >🧾 Name of the Expense
              </label>
              <input
                type="text"
                ref={expenseRef}
                className="px-1 py-2 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
                id="NameofExpense"
                placeholder="Name"
                value={nameOfExpense}
                onChange={(e) => { 
                  setNameOfExpense(e.target.value)
                }} 
                autoComplete='off'
                required
                autoCorrect='off' />
            </div>
              
            <div className="relative mb-5 flex flex-col">
            <label
                htmlFor="Category"
                className=""  
                >🔠 Category of the Expense
              </label>
              <input
                type="text"
                ref={categoryRef}
                className="px-1 py-2 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
                id="Category"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                required
                autoComplete='off'
                autoCorrect='off' />
            </div>
              
            <div className="relative mb-5 flex flex-col">
            <label
                htmlFor="NameofExpense"
                className=""  
                >💸 Amount of Expense 
              </label>
              <input
                type="number"
                ref={amountRef}
                className="px-1 py-2 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
                id=""
                min='1'
                placeholder="Amount"
                required
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
                autoComplete='off'
                autoCorrect='off' />
            </div>
              
            <button
              type="submit"
              className="inline-block w-full border border-blue-600 rounded bg-blue-600 px-7 pt-3 pb-2.5 text-lg leading-normal text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 active:bg-blue-600 active:text-white "
             >
              Submit
            </button>     
              
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </> ) : null }

  </>
  )
}

export default AddExpense