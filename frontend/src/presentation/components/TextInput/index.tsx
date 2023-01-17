import { FormContext } from '@/presentation/contexts'
import { classNames } from '@/presentation/utils'
import { useContext, useRef } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextInput: React.FC<Props> = (props: Props) => {
  const { state, errorState } = useContext(FormContext)
  const inputRef = useRef<HTMLInputElement>()
  return (
    <div className={classNames(
      'border-b border-gray-500 relative',
      'transition ease-in-out delay-[300ms] group',
      errorState[props.name]
        ? 'focus-within:border-red-500 [&:has(input:not(:placeholder-shown))]:border-red-500'
        : 'focus-within:border-primary [&:has(input:not(:placeholder-shown))]:border-primary'
    )}>
      <input
        {...props}
        ref={inputRef}
        autoComplete="off"
        placeholder=" "
        readOnly
        value={state[props.name]}
        onFocus={e => { e.target.readOnly = false }}
        title={errorState[props.name] || ''}
        className={[props.className, classNames(
          'peer px-2 bg-lightGray leading-7 focus:outline-none'
        )].join(' ')}
      />
      <label className={classNames(
        'cursor-text text-gray-500 leading-6 absolute left-2 text-[14px]',
        'translate-y-[0] transition-transform ease-in-out duration-[400ms]',
        'group-focus-within:-translate-y-5 group-focus-within:scale-[0.9]',
        'peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:scale-90',
        errorState[props.name]
          ? 'peer-[&:not(:placeholder-shown)]:text-red-500 group-focus-within:text-red-500'
          : 'peer-[&:not(:placeholder-shown)]:text-primary group-focus-within:text-primary'
      )}
        onClick={() => { inputRef.current.focus() }}
      >
        { props.placeholder }
      </label>
    </div>
  )
}
