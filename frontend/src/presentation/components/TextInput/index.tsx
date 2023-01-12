type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextInput: React.FC<Props> = (props: Props) => {
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
        placeholder=" "
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        className={`
          peer
          px-2
          leading-7
          focus:outline-none
          [&:not(:placeholder-shown)]:border-primary
        `}
      />
      <label className={`
        cursor-text text-gray-500 leading-6
        absolute left-2
        origin-[0%] translate-y-[0]
        transition-transform ease-in-out duration-[400ms]
        group-focus-within:-translate-y-5 group-focus-within:scale-[0.9]
        peer-[&:not(:placeholder-shown)]:-translate-y-5 scale-[0.9]
      `}>
        { props.placeholder }
      </label>
    </div>
  )
}
