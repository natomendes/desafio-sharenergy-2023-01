type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      disabled
      className={`
        bg-primary text-white font-bold leading-8
        rounded-md mt-4
        disabled:bg-gray-500
      `}>
      { props.text }
    </button>
  )
}
