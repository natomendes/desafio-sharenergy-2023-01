import { FormContext } from '@/presentation/contexts'
import { useContext } from 'react'
import { CircleIcon } from '../Icons'

type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = (props: Props) => {
  const { errorState, isLoading } = useContext(FormContext)
  return (
    <button
      type="submit"
      disabled={ errorState.formInvalid }
      className={`
        bg-primary text-white font-bold p-2
        rounded-md mt-4 w-full flex justify-center
        disabled:bg-gray-500
      `}>
      { isLoading ? <CircleIcon className="animate-spin h-6 w-6 text-white"/> : props.text}
    </button>
  )
}
