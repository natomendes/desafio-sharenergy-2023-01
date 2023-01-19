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
      bg-primary/40 text-white
      ring-white ring-opacity-60 ring-offset-primary/40 outline-none ring-2
      flex w-1/2 max-w-lg
      md:w-1/3 lg:w-1/4
      rounded-full py-1 px-1
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
          text-white
          placeholder-white/70
          outline-none
          text-center
          w-full
        `}
      />
    </div>
  )
}
