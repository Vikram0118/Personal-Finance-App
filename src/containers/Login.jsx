import React, {useState, useRef, useEffect} from 'react'
import { login, bgPC, warning, tickMark } from './import'
import { Link } from 'react-router-dom'

const Login = ({ setLoggedPerson}) => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [email, setEmail] = useState('vikrampalani@gmail.com')
  const [passWord, setPassWord] = useState('TestPassword')

  const[wrongCredentials, setWrongCredentials] = useState(false)
  const[correctCredentials, setCorrectCredentials] = useState(false)

  

  const credentials = [
    {
      id: 1,
      emailRegistered:'vikrampalani@gmail.com',
      passWordRegistered : 'TestPassword',
      nameOfThePerson : 'Vikram'
    },
  ]

  const onSubmit = e => {
    e.preventDefault();

    const emailResult  = credentials.filter(credential => (credential.emailRegistered === (email)))
    const passwordResult  = emailResult.reduce(credential => (credential.passWordRegistered === (passWord)))
    // console.log(passwordResult)

    if(passwordResult) {

      console.log(passwordResult)
      const name = passWord.nameOfThePerson
      // console.log(name)
      setLoggedPerson(name)

      console.log('logedin')
      emailRef.current.value = ''
      passwordRef.current.value = ''
      setEmail('')
      setPassWord('')
      setCorrectCredentials(true)
      setWrongCredentials(false)
    } else {
      setWrongCredentials(true)
    }

  }

  return (
    <section className="h-screen">
  <div className="container h-full px-6 py-11 max-w-4xl mx-auto my-auto">
    <div className="flex flex-col sm:flex-row h-full items-center justify-center lg:justify-center">
      <div className="w-11/12">
        <img
          src={login}
          className=" pointer-events-none"
          alt="Phone image" />
      </div>
      <div className="w-10/12 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-400 px-8 pt-8 pb-4 rounded-lg">
        <form onSubmit={ onSubmit }>
          <div className="relative mb-6 flex flex-col gap-2">
          <label
              htmlFor="userName"
              className=""  
              >📧 Email ID
            </label>
            <input
              type="text"
              className="px-1 py-2 bg-transparent border-b-2 border-slate-300 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
              id="userName"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete='off'
              required
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
              className="px-1 py-2 bg-transparent border-b-2 border-slate-300 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600"
              id="passWord"
              ref={passwordRef}
              value={passWord}
              required
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password" />            
          </div>

            <button
              type="submit"
              className="inline-block w-full border border-blue-600 rounded bg-blue-600 px-7 pt-3 pb-2.5 text-lg leading-normal text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 active:bg-blue-600 active:text-white "
              >
              Login
            </button>     

          <p className='text-center font-thin mt-2 text-xs sm:text-sm '>Developed By <a href='https://www.linkedin.com/in/vikram-palani/' target='_blank'> <span className='hover:text-blue-600'>Vikram</span></a></p> 

        </form>
      </div>
    </div>
  </div>

  {wrongCredentials ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto mx-4 sm:mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <img src={warning} alt="" className='mx-auto pointer-events-none'/>
                  <p className="my-2 text-slate-500 text-sm sm:text-lg leading-relaxed text-center">
                   Login failed. <br />
                   Please verify the credentials and try again
                  </p>
                  <div className='mx-auto bg-slate-400 text-center rounded-sm py-1'>
                    <button onClick={() => {
                        emailRef.current.value = ''
                        passwordRef.current.value = ''
                        setEmail('')
                        setPassWord('')
                        setWrongCredentials(false)
                       }} className='w-full'>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </> ) : null }

    {correctCredentials ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto mx-4 sm:mx-auto sm:w-80">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <img src={tickMark} alt="" className='mx-auto pointer-events-none'/>
                  <p className="my-2 text-slate-500 text-sm sm:text-lg leading-relaxed text-center">
                   Login successful. </p>
                  <Link to='Expense'>
                    <div className='mx-auto bg-slate-400 text-center rounded-sm py-1'>
                      <button onClick={() => {
                          emailRef.current.value = ''
                          passwordRef.current.value = ''
                          setEmail('')
                          setPassWord('')
                          setWrongCredentials(false)
                         }} className='w-full'>Done</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </> ) : null }
</section>
  )
}

export default Login