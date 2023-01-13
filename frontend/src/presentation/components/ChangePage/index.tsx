type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  prev: boolean
}

export const ChangePage: React.FC<Props> = ({ prev, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        border border-slate-500 rounded-full
        w-[34px] flex justify-center items-center shrink-0
        disabled:opacity-30
      `}
    >
      {
        prev
          ? (
            <svg
            width="6"
            height="12"
            className="overflow-visible text-slate-500 rotate-180"
            aria-hidden="true"
          >
            <path
              d="M0 0L6 6L0 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
            )
          : (
          <svg
          width="6"
          height="12"
          className="overflow-visible text-slate-500"
          aria-hidden="true"
        >
          <path
            d="M0 0L6 6L0 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
            )
      }
    </button>
  )
}
