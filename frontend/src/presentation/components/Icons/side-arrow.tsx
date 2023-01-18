type Props = React.SVGProps<SVGSVGElement>

export const SideArrow: React.FC<Props> = (props: Props) => {
  return (
    <svg
      {...props}
      width="6"
      height="12"
      aria-hidden="true"
    >
      <path d="M0 0L6 6L0 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}
