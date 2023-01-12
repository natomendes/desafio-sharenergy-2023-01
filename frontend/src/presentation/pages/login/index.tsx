import '@/presentation/styles/global.css'
import logo from '@/assets/images/logo_color.png'

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
        <form className='p-4 bg-white flex flex-col gap-4 rounded shadow'>

        </form>
      </div>
      <footer className='p-1 bg-white shadow-sm flex justify-center'>
        <p className='text-secondary'>Feito por Renato Mendes</p>
      </footer>
    </div>
  )
}
