import { Header, SubmitButton, TextInput } from '@/presentation/components'
import { FormContext, MainContext } from '@/presentation/contexts'
import { Authentication } from '@/domain/usecases'
import { Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Validation } from '@/presentation/protocols'
import '@/presentation/styles/global.css'

type Props = {
  authentication: Authentication
  validation: Validation
}

export const Login: React.FC<Props> = ({ authentication, validation }: Props) => {
  const { saveCurrentAccount } = useContext(MainContext)
  const navigate = useNavigate()
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const [errorState, setErrorState] = useState({
    username: '',
    password: '',
    errorMessage: '',
    formInvalid: true
  })

  useEffect(() => {
    const usernameError = validation.validate('username', state)
    const passwordError = validation.validate('password', state)

    setErrorState({
      ...errorState,
      username: usernameError,
      password: passwordError,
      formInvalid: !!usernameError || !!passwordError
    })
  }, [state])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => { setState({ ...state, [e.target.name]: e.target.value }) }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (!isLoading && state.username && state.password) {
        setIsLoading(true)
        const account = await authentication.auth({ username: state.username, password: state.password })

        saveCurrentAccount(account)

        navigate('/', { replace: true })
      }
    } catch (error) {
      setIsLoading(false)
      setErrorState({
        ...errorState,
        errorMessage: error.message
      })
      setShowError(true)
    }
  }

  return (
    <div className='h-screen bg-gradient-to-tr from-primary to-green-600/60 flex flex-col justify-between'>
      <Header />
      <div className='px-4 flex h-full items-center justify-center relative'>
        <FormContext.Provider value={{ state, setState, errorState }}>
          <form
            onSubmit={handleSubmit}
            className='p-8 bg-lightGray flex flex-col gap-6 rounded-lg shadow text-center'
          >
            <h2 className="text-primary font-bold text-lg">Login</h2>

            <TextInput placeholder='Username' type="text" name="username" className="auto-complete-gray" onChange={handleChange} />

            <TextInput placeholder='Senha' type="password" name="password" className="auto-complete-gray" onChange={handleChange}/>

            <SubmitButton text="Entrar" />
          </form>
          <div className='absolute top-0 right-0 left-0'>
            <Transition
              show={showError}
              className={`
              bg-red-400 rounded-b shadow
              overflow-hidden
              text-center
              whitespace-nowrap
            `}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              afterEnter={() => {
                setTimeout(() => {
                  setShowError(false)
                }, 2500)
              }}
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <p className="text-gray-800 text-[14px] leading-6">{ errorState.errorMessage }</p>
            </Transition>
          </div>
        </FormContext.Provider>
      </div>
      <footer className='p-1 bg-primary shadow flex justify-center'>
        <p className='text-white text-xs'>Feito por Renato Mendes</p>
      </footer>
    </div>
  )
}
