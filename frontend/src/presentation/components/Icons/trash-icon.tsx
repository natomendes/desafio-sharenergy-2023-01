type Props = React.SVGProps<SVGSVGElement>

export const TrashIcon: React.FC<Props> = (props: Props) => {
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
      <path d="M5 5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      <path d="M8 5L8.11111 5C9.03159 5 9.77778 4.25381 9.77778 3.33333C9.77778 3.14924 9.92702 3 10.1111 3L13.8889 3C14.073 3 14.2222 3.14924 14.2222 3.33333C14.2222 4.25381 14.9684 5 15.8889 5H16" stroke="currentColor" strokeWidth="2"></path>
      <path d="M18 9L17.2292 18.2491C17.0997 19.804 15.7999 21 14.2396 21H9.7604C8.20013 21 6.90033 19.804 6.77076 18.2491L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </g>
  </svg>
  )
}
