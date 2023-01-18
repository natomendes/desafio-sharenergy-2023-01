type Props = React.SVGProps<SVGSVGElement>

export const AddIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 6L12 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M18 12L6 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
      </g>
    </svg>
  )
}
