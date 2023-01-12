import '@/presentation/styles/global.css'
import logo from '@/assets/images/logo_color.png'
import { SubmitButton, TextInput } from '@/presentation/components'

export const Login: React.FC = () => {
  return (
    <div className='h-screen bg-background flex flex-col justify-between'>
      <header className='p-1 bg-white shadow-sm flex justify-center'>
        <img
          src={logo} alt="Sharenergy logo"
          className='w-1/2'
        />
      </header>
      <div className='px-4'>
        <form className='p-8 bg-white flex flex-col gap-6 rounded shadow'>
          <TextInput placeholder='Username' type="text" />
          <TextInput placeholder='Senha' type="password" />
          <SubmitButton text="Entrar" />
        </form>
      </div>
      <footer className='p-1 bg-white shadow-sm flex justify-center'>
        <p className='text-secondary'>Feito por Renato Mendes</p>
      </footer>
    </div>
  )
}
