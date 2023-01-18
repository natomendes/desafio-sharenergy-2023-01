type Props = React.SVGProps<SVGSVGElement>

export const ThreeDashesIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
        {...props}
      >
        <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
  )
}
