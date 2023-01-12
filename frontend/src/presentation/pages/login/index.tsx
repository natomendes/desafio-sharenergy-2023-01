import '@/presentation/styles/global.css'
import logo from '@/assets/images/logo_color.png'
import { SubmitButton, TextInput } from '@/presentation/components'

export const Login: React.FC = () => {
  return (
    <div className='h-screen bg-background flex flex-col justify-between'>
      <header className='p-2 bg-white flex justify-center rounded-b-md shadow border-t-4 border-primary'>
        <img
          src={logo} alt="Sharenergy logo"
          className='w-1/2 max-w-xs'
        />
      </header>
      <div className='px-4 flex justify-center'>
        <form className='p-8 bg-white flex flex-col gap-6 rounded shadow text-center'>
          <h2 className="text-primary font-bold text-lg">Login</h2>
          <TextInput placeholder='Username' type="text" />
          <TextInput placeholder='Senha' type="password" />
          <SubmitButton text="Entrar" />
        </form>
      </div>
      <footer className='p-1 bg-primary shadow flex justify-center'>
        <p className='text-white text-xs'>Feito por Renato Mendes</p>
      </footer>
    </div>
  )
}
