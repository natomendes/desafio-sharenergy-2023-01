import { FormContext } from '@/presentation/contexts'
import { useContext, useRef } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextInput: React.FC<Props> = (props: Props) => {
  const { state } = useContext(FormContext)
  const inputRef = useRef<HTMLInputElement>()
  return (
    <div className={`
      border-b border-gray-500
      relative
      transition ease-in-out delay-[300ms]
      group
      focus-within:border-primary
      [&:has(input:not(:placeholder-shown))]:border-primary
    `}>
      <input
        {...props}
        ref={inputRef}
        placeholder=" "
        readOnly
        value={state[props.name]}
        onFocus={e => { e.target.readOnly = false }}
        className={[
          props.className,
          `
          peer
          px-2 bg-lightGray
          leading-7
          focus:outline-none
          [&:not(:placeholder-shown)]:border-primary
        `].join(' ')}
      />
      <label className={`
        cursor-text text-gray-500 leading-6
        absolute left-2 text-[14px]
        translate-y-[0]
        transition-transform ease-in-out duration-[400ms]
        group-focus-within:-translate-y-5 group-focus-within:scale-[0.9] group-focus-within:text-primary
        peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:scale-90 peer-[&:not(:placeholder-shown)]:text-primary
      `}
        onClick={() => { inputRef.current.focus() }}
      >
        { props.placeholder }
      </label>
    </div>
  )
}
