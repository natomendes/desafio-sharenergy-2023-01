type Props = {
  name: string
  email: string
  username: string
  age: number
  image: string
}

export const UserItem: React.FC<Props> = (props: Props) => {
  return (
    <li className={`
    bg-lightGray shadow-md rounded overflow-hidden
    h-fit p-2 flex items-center gap-1
  `}>
    <img
      src={props.image}
      alt="User profile picture"
      className={`
        h-full rounded-full max-h-20
        border-2 border-yellowOrange
      `}
    />
    <div className={`
      font-inter text-center flex-grow text-secondary
    `}>
      <p className="text-vividBurgundy font-bold">{ props.name }</p>
      <p className="text-xs italic">{ props.email }</p>
      <div className={`
        flex justify-evenly mt-1
        text-sm font-roboto
      `}>
        <p className={`
          flex flex-col w-fit px-2
          text-[12px]
        `}>
          <span className="text-vividBurgundy font-bold">Username</span>
          <span>{ props.username }</span>
        </p>
        <p className={`
          flex flex-col w-fit px-2
          text-[12px]
        `}>
          <span className="text-vividBurgundy font-bold">Idade</span>
          <span>{ props.age }</span>
        </p>
      </div>
    </div>
  </li>
  )
}
