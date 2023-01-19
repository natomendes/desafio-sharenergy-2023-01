import { SideArrow } from '@/presentation/components'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  prev: boolean
}

export const ChangePage: React.FC<Props> = ({ prev, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        rounded-full
        ring-white ring-opacity-60 ring-offset-primary/40 outline-none ring-2
        w-[34px] flex justify-center items-center shrink-0
        disabled:opacity-30
      `}
    >
      <SideArrow className={`overflow-visible text-white ${prev ? 'rotate-180' : ''}`}
      />
    </button>
  )
}
