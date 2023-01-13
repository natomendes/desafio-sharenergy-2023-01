import { useRef } from 'react'

type Props = {
  setSearchParam: React.Dispatch<React.SetStateAction<string>>
  searchParam: string
}

export const SearchInput: React.FC<Props> = ({ searchParam, setSearchParam }: Props) => {
  const inputRef = useRef<HTMLInputElement>()

  return (
    <div
      className={`
      text-slate-500
      flex w-1/2 max-w-lg
      lg:w-1/4
      border border-slate-500 rounded-full py-1 px-1
      focus-within:w-full focus-within:px-2
      transition-all ease-in-out duration-1000
      [&:has(input:not(:placeholder-shown))]:w-full
      [&:has(input:not(:placeholder-shown))]:px-2
    `}>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="flex-none peer"
      >
        <path d="m19 19-3.5-3.5"></path>
        <circle cx="11" cy="11" r="6"></circle>
      </svg>
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Busca Nome"
        autoComplete="off"
        onChange={e => { setSearchParam(e.target.value) }}
        value={searchParam}
        className={`
          bg-transparent
          text-slate-500
          placeholder-slate-500
          outline-none
          text-center
          w-full
        `}
      />
    </div>
  )
}
