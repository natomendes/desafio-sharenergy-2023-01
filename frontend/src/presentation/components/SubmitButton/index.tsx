import { FormContext } from '@/presentation/contexts'
import { useContext } from 'react'

type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = (props: Props) => {
  const { state: { username, password } } = useContext(FormContext)
  return (
    <button
      type="submit"
      disabled={ !username || !password }
      className={`
        bg-primary text-white font-bold leading-8
        rounded-md mt-4 w-full
        disabled:bg-gray-500
      `}>
      { props.text }
    </button>
  )
}
