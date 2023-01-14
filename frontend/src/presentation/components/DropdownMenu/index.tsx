import { MainContext } from '@/presentation/contexts'
import { Popover } from '@headlessui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const DropdownMenu: React.FC = () => {
  const navigate = useNavigate()
  const { clearCurrentAccount } = useContext(MainContext)
  const logout = (): void => {
    clearCurrentAccount()

    navigate('/login', { replace: true })
  }

  return (
  <Popover>
    <Popover.Button>
      <svg
        width="24"
        height="24"
      >
        <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    </Popover.Button>
    <Popover.Panel className={`
      absolute z-10 shadow-lg
    `}>
      <div className={`
        flex flex-col p-1 w-[200px] mt-2 rounded-b
        bg-gradient-to-tr from-gray-200 to-white
      `}>
        <button className={`
          flex gap-2 items-center p-1 rounded group
          text-sm text-primary leading-8
          hover:bg-primary hover:text-white
        `}>
          <svg className='w-4 group-hover:fill-white' viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#00A2A2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user-management-filled</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="audio-description1" className='group-hover:fill-white' fill="#00A2A2" transform="translate(64.000000, 64.000000)"> <path d="M136.875994,213.332429 C131.288494,226.120529 128.135918,240.215954 128.004295,255.032675 L128,256 L128,383.999429 L-4.26325641e-14,384 L-4.26325641e-14,298.666667 C-4.26325641e-14,251.991467 37.426752,214.097963 83.9216506,213.34476 L85.3333333,213.333333 L136.875994,213.332429 Z M298.666667,170.666667 C345.794965,170.666667 384,208.871701 384,256 L384,384 L149.333333,384 L149.333333,256 C149.333333,208.871701 187.538368,170.666667 234.666667,170.666667 L298.666667,170.666667 Z M106.666667,64 C141.952,64 170.666667,92.7146667 170.666667,128 C170.666667,163.285333 141.952,192 106.666667,192 C71.3813333,192 42.6666667,163.285333 42.6666667,128 C42.6666667,92.7146667 71.3813333,64 106.666667,64 Z M266.666667,1.42108547e-14 C307.84,1.42108547e-14 341.333333,33.4933333 341.333333,74.6666667 C341.333333,115.84 307.84,149.333333 266.666667,149.333333 C225.493333,149.333333 192,115.84 192,74.6666667 C192,33.4933333 225.493333,1.42108547e-14 266.666667,1.42108547e-14 Z" id="Mask"> </path> </g> </g> </g></svg>
          Usuários
        </button>
        <button className={`
          flex gap-2 items-center p-1 rounded group
          text-sm text-primary leading-8
          hover:bg-primary hover:text-white
        `}>
          <svg className='w-4 group-hover:fill-white' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#00A2A2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M461.814,197.514c-2.999-11.335-14.624-18.093-25.958-15.094c-1.866,0.553-13.477,3.649-26.042,14.341 c-6.234,5.349-12.633,12.751-17.361,22.454c-4.748,9.69-7.685,21.577-7.657,35.033c0.013,16.345,4.133,34.895,13.442,56.257 c6.282,14.403,9.144,29.697,9.144,44.846c0.062,25.627-8.438,50.756-21.121,68.283c-6.296,8.777-13.546,15.606-20.816,20.022 c-2.986,1.81-5.943,3.131-8.888,4.181l0.989-5.854c-0.055-17.03-4.05-34.84-13.021-50.528 c-28.356-49.643-66.223-134.741-66.223-134.741l-1.527-4.879c29.47-7.796,58.579-23.408,73.148-54.985 c38.931-84.344-41.08-142.73-41.08-142.73s-25.958-56.222-38.924-54.06c-12.978,2.164-41.094,38.931-41.094,38.931h-23.788h-23.788 c0,0-28.108-36.767-41.08-38.931c-12.979-2.163-38.924,54.06-38.924,54.06s-80.018,58.386-41.087,142.73 c13.822,29.953,40.741,45.572,68.634,53.748l-2.951,9.662c0,0-31.908,81.552-60.279,131.195C37.198,441.092,58.478,512,97.477,512 c29.47,0,79.14,0,101.692,0c7.292,0,11.763,0,11.763,0c22.544,0,72.222,0,101.691,0c12.654,0,23.38-7.547,31.204-19.324 c15.826-0.013,30.81-4.872,43.707-12.758c19.455-11.915,34.708-30.32,45.434-51.896c10.685-21.618,16.856-46.636,16.878-72.672 c0-20.484-3.885-41.619-12.682-61.813c-7.561-17.34-9.918-30.216-9.904-39.29c0.028-7.526,1.5-12.544,3.359-16.414 c1.417-2.889,3.124-5.17,4.983-7.091c2.771-2.868,5.964-4.879,8.349-6.054c1.182-0.595,2.135-0.968,2.674-1.162l0.449-0.152 l-0.007-0.028C458.179,220.189,464.779,208.724,461.814,197.514z"></path> </g> </g></svg>
          HttpCats
        </button>
        <button className={`
          flex gap-2 items-center p-1 rounded group
          text-sm text-primary leading-8
          hover:bg-primary hover:text-white
        `}>
          <svg className='w-4 group-hover:fill-white' fill="#00A2A2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.297 477.297"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M42.85,358.075c0-24.138,0-306.758,0-330.917c23.9,0,278.867,0,302.767,0c0,8.542,0,49.44,0,99.722 c5.846-1.079,11.842-1.812,17.99-1.812c3.149,0,6.126,0.647,9.232,0.928V0H15.649v385.233h224.638v-27.158 C158.534,358.075,57.475,358.075,42.85,358.075z"></path> <path d="M81.527,206.842h184.495c1.812-10.16,5.393-19.608,10.095-28.452H81.527V206.842z"></path> <rect x="81.527" y="89.432" width="225.372" height="28.452"></rect> <path d="M81.527,295.822h191.268c5.112-3.106,10.57-5.63,16.415-7.183c-5.544-6.45-10.095-13.697-13.978-21.269H81.527V295.822z"></path> <path d="M363.629,298.669c41.071,0,74.16-33.197,74.16-74.139c0-40.984-33.09-74.16-74.16-74.16 c-40.898,0-74.009,33.176-74.009,74.16C289.62,265.472,322.731,298.669,363.629,298.669z"></path> <path d="M423.143,310.706H304.288c-21.226,0-38.612,19.457-38.612,43.422v119.33c0,1.316,0.604,2.481,0.69,3.84h194.59 c0.086-1.337,0.69-2.524,0.69-3.84v-119.33C461.733,330.227,444.39,310.706,423.143,310.706z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
          Clientes
        </button>
        <button
          onClick={logout}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-vividBurgundy leading-8
            hover:bg-yellowOrange hover:text-white
          `}>
          <svg className='w-4 group-hover:fill-white' fill="#A61C3C" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.025 512.025"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M177.646,179.831c-3.349-29.547-26.752-51.819-54.4-51.819H68.782c-27.648,0-51.051,22.272-54.4,51.819L0.238,303.735 c-1.173,10.368,2.027,20.651,8.768,28.224c5.803,6.528,13.547,10.304,21.909,10.773l11.776,159.403 c0.448,5.568,5.077,9.877,10.667,9.877h85.333c5.589,0,10.219-4.309,10.645-9.877l11.776-159.403 c8.384-0.469,16.107-4.267,21.909-10.773c6.741-7.552,9.941-17.856,8.768-28.224L177.646,179.831z"></path> <path d="M96.025,106.679c29.461,0,53.333-23.872,53.333-53.333c0-29.461-23.893-53.333-53.333-53.333 c-29.461,0-53.333,23.872-53.333,53.333C42.691,82.807,66.563,106.679,96.025,106.679z"></path> <path d="M354.564,20.471c4.651-1.984,7.253-6.997,6.251-11.947c-1.024-4.949-5.397-8.512-10.453-8.512H245.358 c-17.643,0-32,14.357-32,32v384c0,17.643,14.357,32,32,32h21.333c5.888,0,10.667-4.779,10.667-10.667V98.018 c0-26.987,16.043-51.307,40.853-61.952L354.564,20.471z"></path> <path d="M465.966,0.012c-6.293,0-12.395,1.259-18.176,3.733L326.595,55.692c-16.939,7.253-27.904,23.872-27.904,42.325v367.936 c0,25.387,20.672,46.059,46.059,46.059c6.293,0,12.395-1.259,18.176-3.733l121.195-51.947 c16.939-7.253,27.904-23.872,27.904-42.325V46.071C512.025,20.684,491.353,0.012,465.966,0.012z M362.691,288.012 c0,5.888-4.779,10.667-10.667,10.667c-5.888,0-10.667-4.779-10.667-10.667v-42.667c0-5.888,4.779-10.667,10.667-10.667 c5.888,0,10.667,4.779,10.667,10.667V288.012z"></path> </g> </g> </g> </g></svg>
          Sair
        </button>
      </div>

      <img src="/solutions.jpg" alt="" />
    </Popover.Panel>
  </Popover>
  )
}
