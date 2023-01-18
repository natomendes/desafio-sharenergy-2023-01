import { SideArrow } from '../Icons'

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
      <SideArrow className={`overflow-visible text-slate-500 ${prev ? 'rotate-180' : ''}`}
      />
    </button>
  )
}
