import React, {useState} from 'react'
import { login, bgPC } from './import'

const Login = () => {

  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')

  const onSubmit = e => {
    e.preventDefault();
  }


  return (
    <section className="h-screen bg-[url('./assets/bg-pc.svg')] bg-no-repeat bg-fixed bg-center bg-cover ">
  <div className="container h-full px-6 py-11 max-w-3xl mx-auto my-auto">
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-center">
      <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12">
        <img
          src={login}
          className=" pointer-events-none"
          alt="Phone image" />
      </div>
      <div className="w-10/12 md:w-8/12 sm:9/12 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 px-8 pt-8 pb-4 rounded-lg">
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
              placeholder="Password" />            
          </div>

          <button
            type="submit"
            className="inline-block w-full border border-blue-600 rounded bg-blue-600 px-7 pt-3 pb-2.5 text-lg leading-normal text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 active:bg-blue-600 active:text-white "
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>     

          <p className='text-center font-extralight mt-2 text-xs sm:text-sm '>Developed By <a href='https://www.linkedin.com/in/vikram-palani/' target='_blank'> <span className='hover:text-blue-600'>Vikram</span></a></p> 

        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login