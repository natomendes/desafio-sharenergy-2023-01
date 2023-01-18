import { GetRandomdog } from '@/domain/usecases'
import { CircleIcon, Header } from '@/presentation/components'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

type Props = {
  getRandomDog: GetRandomdog
}

export const RandomDog: React.FC<Props> = ({ getRandomDog }: Props) => {
  const imageUrl = useLoaderData() as string
  const [imgSrc, setImgSrc] = useState(imageUrl)
  const [isLoading, setIsLoading] = useState(false)

  const refreshImage = async (): Promise<void> => {
    setIsLoading(true)
    const url = await getRandomDog.get()
    setImgSrc(url)
    setIsLoading(false)
  }

  return (
    <div className='bg-gradient-to-tr from-primary to-green-600/60 h-screen flex flex-col'>
      <Header />
      <main className={`
        p-2 flex flex-col items-center gap-6 flex-grow
        lg:p-3 lg:max-w-5xl
        md:max-w-3xl
        mx-auto w-full
      `}>
        <div className={`
          bg-primary/40 w-full py-2.5 rounded-xl text-white text-center font-medium
          flex flex-col items-center gap-1
        `}>
          <h2>
            Clique para visualizar uma nova imagem
          </h2>
          <button
            onClick={async () => { await refreshImage() }}
            className={`
              bg-white rounded-lg p-2.5 leading-5 text-primary shadow
              ring-white ring-opacity-60 ring-offset-2 ring-offset-primary outline-none ring-2
              min-w-[163px] flex justify-center
              active:outline-none active:ring-2 active:shadow-none         
            `}
          >
            { isLoading ? <CircleIcon className="animate-spin h-5 w-5 text-white" /> : 'Gerar nova imagem' }
          </button>
        </div>
        <div className='max-w-md lg:max-w-xl p-1 rounded-lg bg-primary/60 shadow'>
          <img src={imgSrc} alt="Random dog image" className='rounded-lg object-cover max-h-[600px]' />
        </div>
      </main>
    </div>
  )
}
