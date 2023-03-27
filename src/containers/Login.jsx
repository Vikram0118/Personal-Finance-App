import React, {useState} from 'react'
import { login, bgPC } from './import'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')

  const onSubmit = e => {
    e.preventDefault();
  }


  return (
    <section className="h-screen bg-[url('./assets/bg-pc.svg')] bg-no-repeat bg-fixed bg-center bg-cover ">
  <div className="container h-full px-6 py-11 max-w-4xl mx-auto my-auto">
    <div className="flex flex-col sm:flex-row h-full items-center justify-center lg:justify-center">
      <div className="w-11/12">
        <img
          src={login}
          className=" pointer-events-none"
          alt="Phone image" />
      </div>
      <div className="w-10/12 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-400 px-8 pt-8 pb-4 rounded-lg">
        <form onSubmit={onSubmit}>

          <div className="relative mb-6 flex flex-col gap-2">
          <label
              htmlFor="userName"
              className=""  
              >📧 Email ID
            </label>
            <input
              type="text"
              className="px-1 py-2 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
              id="userName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete='off'
              autoCorrect='off' />
          </div>


          <div className="relative mb-6 flex flex-col gap-2">
          <label
              htmlFor="passWord"
              className=""  
              >🔑 Password
            </label>
            <input
              type="passWord"
              className="px-1 py-2 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
              id="passWord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password" />            
          </div>

          <Link to='Expense'>
            <button
              type="submit"
              className="inline-block w-full border border-blue-600 rounded bg-blue-600 px-7 pt-3 pb-2.5 text-lg leading-normal text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 active:bg-blue-600 active:text-white "
              >
              Sign in
            </button>     
          </Link>

          <p className='text-center font-thin mt-2 text-xs sm:text-sm '>Developed By <a href='https://www.linkedin.com/in/vikram-palani/' target='_blank'> <span className='hover:text-blue-600'>Vikram</span></a></p> 

        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login